import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './styles/detail.css';
import PresentationTitle from '../Presentation/PresentationTitle';
import { useLanguage } from '../../contexts/LanguageContext';

function Detail({ projectId }) {
    const { language } = useLanguage(); // Utiliser le contexte pour obtenir la langue
    const translations = language === "fr" ? require("../../locales/fr").default : require("../../locales/en").default;
    const [project, setProject] = useState(null);
    const [readme, setReadme] = useState('');
    const [loading, setLoading] = useState(true);
    
    const readmeText = translations.readme
    

    useEffect(() => {
        const fetchProject = async () => {
            try {
                // Récupérer les détails du projet
                const response = await fetch('https://api.github.com/users/killianmathias/repos');
                if (!response.ok) throw new Error("Erreur lors de la récupération des données.");
                
                const data = await response.json();
                const project = data.find((proj) => proj.id.toString() === projectId);

                if (project) {
                    setProject(project);

                    // Récupérer le README
                    const readmeResponse = await fetch(
                        `https://api.github.com/repos/killianmathias/${project.name}/readme`
                    );
                    
                    if (readmeResponse.ok) {
                        const readmeData = await readmeResponse.json();
                        const decodedReadme = decodeURIComponent(escape(atob(readmeData.content)));
                        setReadme(decodedReadme);
                    } else {
                        console.warn("README non trouvé.");
                    }
                } else {
                    console.warn(`Aucun projet trouvé avec l'id ${projectId}`);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des projets GitHub :', error);
            } finally {
                setLoading(false);
            }
        };
        
        if (projectId) fetchProject();
    }, [projectId]);
    if (loading) return <p>{translations.chargement}</p>;
    if (!project) return <p>{translations.introuvable}</p>;

    return (
        <div className='detail'>
            <div className='title-container'>
                <PresentationTitle text={project.name.replace(/-/g, " ")}/>
            </div>
            <div className='detail-content'>
                <p>{project.description || 'Aucune description disponible.'}</p>
                <p>{translations.detailUpdate} {new Date(project.pushed_at).toLocaleDateString()}</p>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                    {translations.detailSee}
                </a>
            </div>
            <hr />
            <div className='markdown'>
                <ReactMarkdown>{readme || {readmeText}}</ReactMarkdown>
            </div>
        </div>
    );
}

export default Detail;