import React from 'react';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h2 className="section-title">About Me</h2>
                    <p className="about-description">
                        I'm an Artificial Intelligence and Data Science student at Chennai Institute of Technology. 
                        My passion lies in developing intelligent solutions that bridge the gap between complex problems and innovative technology.
                    </p>
                    <p className="about-focus">
                        Currently focusing on machine learning applications and full-stack development, 
                        I strive to create impactful solutions that make a difference in how we interact with technology.
                    </p>
                </div>
                
                <div className="about-details">
                    <div className="education-section">
                        <h3><i className="fas fa-graduation-cap"></i> Education</h3>
                        <div className="education-item">
                            <h4>Bachelor of Technology</h4>
                            <p>AI and Data Science</p>
                            <p>Chennai Institute of Technology</p>
                            <span className="year">2022 - 2026</span>
                        </div>
                    </div>

                    <div className="certifications-section">
                        <h3><i className="fas fa-certificate"></i> Certifications</h3>
                        <div className="certification-item">
                            <h4>Python and Machine Learning</h4>
                            <p>Udemy</p>
                            <span className="cert-date">2023</span>
                        </div>
                        <div className="certification-item">
                            <h4>Internet of Things</h4>
                            <p>NPTEL</p>
                            <span className="cert-date">2024</span>
                        </div>
                    </div>
                </div>

                <div className="expertise-areas">
                    <h3>Areas of Expertise</h3>
                    <div className="expertise-grid">
                        <div className="expertise-item">
                            <i className="fas fa-robot"></i>
                            <h4>AI & ML</h4>
                            <p>Deep Learning, Computer Vision, Neural Networks</p>
                        </div>
                        <div className="expertise-item">
                            <i className="fas fa-code"></i>
                            <h4>Development</h4>
                            <p>Full-Stack Web Development, API Integration</p>
                        </div>
                        <div className="expertise-item">
                            <i className="fas fa-database"></i>
                            <h4>Data Science</h4>
                            <p>Data Analysis, Visualization, Big Data</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;