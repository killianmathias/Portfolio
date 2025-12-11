import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './styles/detail.css';
import PresentationTitle from '../Presentation/PresentationTitle';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects as localProjects } from '../../data/projects';

function Detail({ projectId }) {
    const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue
    const translations = language === 'fr' ? require('../../locales/fr').default : require('../../locales/en').default;
    const [project, setProject] = useState(null);
    const [readme, setReadme] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                // Check if it's a local project
                const localProject = localProjects.find(p => p.id === projectId);
                
                if (localProject) {
                   const translation = localProject.translations[language] || localProject.translations['en'];
                   setProject({
                       ...localProject,
                       title: translation.title,
                       description: translation.description,
                       html_url: localProject.html_url,
                       pushed_at: localProject.pushed_at
                   });
                   setReadme(localProject.readme[language] || localProject.readme['en']);
                   setLoading(false);
                   return;
                }

                const response = await fetch('https://api.github.com/users/killianmathias/repos');
                if (!response.ok) throw new Error('Erreur lors de la récupération des données.');
                const data = await response.json();
                const project = data.find((proj) => proj.id.toString() === projectId);

                if (project) {
                    try {
                        const translationUrl = `https://raw.githubusercontent.com/killianmathias/${project.name}/main/translations.json`;
                        const translationResponse = await fetch(translationUrl);
                        let title = project.name.replace(/-/g, ' ');
                        let description = project.description || 'Aucune description disponible';

                        if (translationResponse.ok) {
                            const translationData = await translationResponse.json();
                            const translations = translationData[language] || translationData['en'];
                            title = translations.title || title;
                            description = translations.description || description;
                        } else {
                            console.warn(`⚠️ Fichier de traduction introuvable pour ${project.name} (${translationUrl})`);
                        }

                        setProject({ ...project, title, description });

                        const readmeUrl = `https://raw.githubusercontent.com/killianmathias/${project.name}/main/README.${language}.md`;
                        const readmeResponse = await fetch(readmeUrl);
                        if (readmeResponse.ok) {
                            const text = await readmeResponse.text();
                            setReadme(text);
                        } else {
                            console.warn(`⚠️ README introuvable pour ${project.name} (${readmeUrl})`);
                            setReadme('Aucune documentation disponible.');
                        }
                    } catch (err) {
                        console.error(`❌ Erreur lors de la récupération des traductions pour ${project.name}:`, err);
                    }
                } else {
                    console.warn(`⚠️ Aucun projet trouvé avec l'id ${projectId}`);
                }
            } catch (error) {
                console.error('❌ Erreur lors de la récupération des projets GitHub :', error);
            } finally {
                setLoading(false);
            }
        };

        if (projectId) fetchProject();
    }, [projectId, language]);

    if (loading) return <p>{translations.chargement}</p>;
    if (!project) return <p>{translations.introuvable}</p>;

    return (
        <div className='detail'>
            <div className='title-container'>
                <PresentationTitle text={project.title.replace(/-/g, ' ')} />
            </div>
            <div className='detail-content'>
                <p>{project.description || translations.detailNoDescription}</p>
                {project.pushed_at && <p>{translations.detailUpdate} {new Date(project.pushed_at).toLocaleDateString()}</p>}
                {project.html_url && project.html_url !== '#' && (
                    <a href={project.html_url} target='_blank' rel='noopener noreferrer'>
                        {project.html_url.includes('github.com') ? translations.detailSee : translations.detailSeeProject}
                    </a>
                )}
            </div>
            <hr />
            <div className='markdown'>
                <ReactMarkdown>{readme}</ReactMarkdown>
            </div>
        </div>
    );
}

export default Detail;
