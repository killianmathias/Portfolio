import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './styles/detail.css';


function Detail({ projectId }) {
    const [project, setProject] = useState(null);
    const [readme, setReadme] = useState('');
    const [loading, setLoading] = useState(true);

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

    if (loading) return <p>Chargement...</p>;
    if (!project) return <p>Projet introuvable.</p>;

    return (
        <div className='detail'>
            <h1>{project.name.replace(/-/g, " ")}</h1>
            <p>{project.description || 'Aucune description disponible.'}</p>
            <p>Dernière mise à jour : {new Date(project.pushed_at).toLocaleDateString()}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                Voir sur GitHub
            </a>
            <hr />
            <ReactMarkdown>{readme || 'Aucun README disponible.'}</ReactMarkdown>
        </div>
    );
}

export default Detail;