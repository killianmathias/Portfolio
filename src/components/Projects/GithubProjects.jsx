import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { useLanguage } from './../../contexts/LanguageContext';

const GitHubProjects = ({ limit }) => {
    const { language } = useLanguage();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const translations = language === 'fr' ? require('../../locales/fr').default : require('../../locales/en').default;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/killianmathias/repos');
                const data = await response.json();

                // Trier par date de push la plus récente
                const sorted = data
                    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
                    .slice(0, limit);

                // Récupérer les traductions pour chaque projet
                const projectsWithTranslations = await Promise.all(
                    sorted.map(async (project) => {
                        try {
                            const translationUrl = `https://raw.githubusercontent.com/killianmathias/${project.name}/main/translations.json`;
                            const translationResponse = await fetch(translationUrl);

                            if (!translationResponse.ok) {
                                console.warn(`⚠️ Translation file not found for ${project.name} at ${translationUrl}`);
                                throw new Error('Translation file not found');
                            }

                            const translationData = await translationResponse.json();

                            const translation = translationData[language] || translationData['en'];
                            return {
                                ...project,
                                title: translation.title || project.name.replace(/-/g, ' '),
                                description: translation.description || project.description || 'No description available',
                            };
                        } catch (error) {
                            console.error(`❌ Error fetching translation for ${project.name}:`, error);
                            return {
                                ...project,
                                title: project.name.replace(/-/g, ' '),
                                description: project.description || translations.nodescpription,
                            };
                        }
                    })
                );

                setProjects(projectsWithTranslations);
            } catch (error) {
                console.error('❌ Error fetching GitHub projects:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, [limit, language]);

    if (loading) return <div className=""><p>{translations.chargement}</p></div>;

    return (
        <div className="github-projects">
            {projects.map((project) => (
                <ProjectCard key={project.id} title={project.title} description={project.description} language={project.language} id={project.id} />
            ))}
        </div>
    );
};

export default GitHubProjects;
