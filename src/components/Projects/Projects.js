import React from 'react';
import './Projects.css';
import { projectsData } from '../../data/portfolioData';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ProjectCard = ({ project, index }) => {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <div
            ref={ref}
            className={`project-card glass-card hover-lift fade-in-section ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                    {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
