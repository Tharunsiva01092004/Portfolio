import React from 'react';

const Contact = () => {
    return (
        <div className="contact-section">
            <h2>Get In Touch</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <a href="mailto:tharunsiva0109@gmail.com" className="contact-link">
                        <i className="fas fa-envelope"></i>
                        tharunsiva0109@gmail.com
                    </a>
                    <a href="https://linkedin.com/in/tharunsiva-s-a19a94249/" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                        LinkedIn
                    </a>
                    <a href="https://github.com/Tharunsiva01092004" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                        GitHub
                    </a>
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;