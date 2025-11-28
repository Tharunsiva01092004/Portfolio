import React from 'react';
import { aboutData } from '../../data/portfolioData';
import './About.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const About = () => {
    const { title, description, subDescription, education, certifications, expertise } = aboutData;
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="about" className={`about-container fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
            <div className="about-content">
                <div className="about-text">
                    <h2 className="section-title">{title}</h2>
                    <p className="about-description">
                        {description}
                    </p>
                    <p className="about-sub-description">
                        {subDescription}
                    </p>

                    <div className="about-details">
                        <div className="education-section glass-card">
                            <h3><i className="fas fa-graduation-cap"></i> Education</h3>
                            {education.map((edu, index) => (
                                <div key={index} className="education-block">
                                    <p><strong>{edu.title}</strong></p>
                                    <p className="detail-sub">{edu.subtitle}</p>
                                    <p className="detail-school">{edu.school}</p>
                                    <p className="detail-year">{edu.year}</p>
                                </div>
                            ))}
                        </div>

                        <div className="certifications-section glass-card">
                            <h3><i className="fas fa-certificate"></i> Certifications</h3>
                            <ul className="cert-list">
                                {certifications.map((cert, index) => (
                                    <li key={index}>
                                        <strong>{cert.title}</strong>
                                        <span className="cert-issuer"> - {cert.issuer} ({cert.year})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="expertise-areas">
                        <h3 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>My Expertise</h3>
                        <div className="expertise-grid">
                            {expertise.map((item, index) => (
                                <div key={index} className="expertise-item glass-card hover-lift">
                                    <i className={item.icon}></i>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;