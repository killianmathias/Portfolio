import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const GitHubProjects = ({limit}) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/killianmathias/repos');
                const data = await response.json();

                // Trier par date de push la plus récente
                const sorted = data
                    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
                    .slice(0, limit); // Limiter à 3 éléments

                setProjects(sorted);
            } catch (error) {
                console.error('Erreur lors de la récupération des projets GitHub :', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) return <div className=""><p>En chargement</p></div>;

    return (
        <div className="github-projects">
            {projects.map((project) => (
                <ProjectCard title={project.name} description={project.description} language={project.language} link={project.html_url}/>
            ))}
        </div>
    );
};

export default GitHubProjects;
