import React from 'react';
import { contactData } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { email, linkedin, github, footerText } = contactData;

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-social">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href={`mailto:${email}`}
                        className="social-link"
                    >
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                <div className="footer-info">
                    <p>{footerText}</p>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {currentYear} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;