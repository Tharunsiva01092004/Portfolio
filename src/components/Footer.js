import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-social">
                    <a 
                        href="https://github.com/Tharunsiva01092004" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a 
                        href="https://linkedin.com/in/tharunsiva-s-a19a94249/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a 
                        href="mailto:tharunsiva0109@gmail.com" 
                        className="social-link"
                    >
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                <div className="footer-info">
                    <p>Tharunsiva S  |  Artificial Intelligence and Data Science Student</p>
                    <p>Chennai Institute of Technology</p>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {currentYear} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;