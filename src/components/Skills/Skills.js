import React from 'react';
import './Skills.css';
import { skillsData } from '../../data/portfolioData';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const SkillCategory = ({ category, index }) => {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <div
            ref={ref}
            className={`skill-category glass-card hover-lift fade-in-section ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <h3>{category.category}</h3>
            <div className="skill-items">
                {category.items.map((skill, i) => (
                    <span key={i} className="skill-item">{skill}</span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
                {skillsData.map((category, index) => (
                    <SkillCategory key={index} category={category} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Skills;