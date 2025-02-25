import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-main">
                    <div className="header-intro">
                        <span className="greeting">Hello, I'm</span>
                        <h1 className="header-title">
                            <span className="name-highlight">Tharunsiva S</span>
                        </h1>
                    </div>

                    <div className="header-roles">
                        <div className="title-animation">
                            <span className="animated-text">AI Engineer</span>
                            <span className="animated-text">Data Scientist</span>
                            <span className="animated-text">Developer</span>
                        </div>
                    </div>

                    <p className="header-description">
                        Crafting intelligent solutions through code and innovation
                    </p>

                    <div className="header-cta">
                        <a href="#about" className="cta-button primary">About Me</a>
                        <a href="#projects" className="cta-button primary">Projects</a>
                        <a href="#skills" className="cta-button primary">Skills</a>
                        <a href="#contact" className="cta-button secondary">Contact</a>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <i className="fas fa-chevron-down bounce"></i>
                    <span className="scroll-text">Scroll to explore</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
