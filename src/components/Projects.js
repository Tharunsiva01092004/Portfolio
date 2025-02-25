import React from 'react';

const Projects = () => {
    const projects = [
        {
            name: "Smart Handwritten Text Recognition",
            description: "CNN-based model for handwritten text recognition with 92% accuracy. Implemented using TensorFlow and OpenCV for robust text detection and recognition. Features custom CNN architecture, image preprocessing, and data augmentation techniques.",
            tech: ["TensorFlow", "OpenCV", "Python", "CNN", "Deep Learning"]
        },
        {
            name: "Food Recipe Webpage",
            description: "A comprehensive recipe search application utilizing TheMealDB API. Features dynamic filtering, real-time search functionality, responsive UI with modern CSS Grid/Flexbox, and detailed recipe views with ingredients and instructions.",
            tech: ["JavaScript", "REST API", "HTML", "CSS", "Responsive Design"]
        },
        {
            name: "Genshin Impact Clone",
            description: "Pixel-perfect recreation of the Genshin Impact website, featuring complex animations and responsive layouts for all devices. Includes parallax scrolling effects, optimized performance, and interactive character showcase section.",
            tech: ["HTML", "CSS", "JavaScript", "Animation", "UI/UX"]
        },
        {
            name: "Portfolio Website",
            description: "Modern React portfolio showcasing projects and skills. Built with React and featuring smooth animations, clean design, optimized performance, and responsive layouts. Includes dark mode and accessibility features.",
            tech: ["React", "JavaScript", "CSS", "UI/UX", "Animation"]
        }
    ];

    return (
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <div className="project-content">
                        <h3 className="project-title">{project.name}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                            {project.tech.map((tech, idx) => (
                                <span key={idx} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
