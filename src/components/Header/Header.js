import React from 'react';
import { headerData } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

const Header = () => {
    const { name, title, roles, description } = headerData;
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <div className="header-content">
                <div className="header-main">
                    <div className="header-intro">
                        <span className="greeting">{title}</span>
                        <h1 className="header-title">
                            <span className="name-highlight">{name}</span>
                        </h1>
                    </div>

                    <div className="header-roles">
                        <div className="title-animation">
                            {roles.map((role, index) => (
                                <span key={index} className="animated-text">{role}</span>
                            ))}
                        </div>
                    </div>

                    <p className="header-description">
                        {description}
                    </p>

                    <div className="header-cta">
                        <a href="#about" className="cta-button primary">About Me</a>
                        <a href="#projects" className="cta-button primary">Projects</a>
                        <a href="#skills" className="cta-button primary">Skills</a>
                        <a href="#contact" className="cta-button secondary">Contact</a>
                    </div>
                </div>

                <a href="#about" className="scroll-indicator">
                    <i className="fas fa-chevron-down bounce"></i>
                    <span className="scroll-text">Scroll to explore</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
