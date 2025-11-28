import React, { useState } from 'react';
import './Contact.css';
import { contactData } from '../../data/portfolioData';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Contact = () => {
    const { email, linkedin, github } = contactData;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [ref, isVisible] = useScrollAnimation();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thanks for reaching out! This is a demo form.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className={`contact-section glass-card fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref}>
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <a href={`mailto:${email}`} className="contact-link">
                        <i className="fas fa-envelope"></i>
                        <span>{email}</span>
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                        <i className="fab fa-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer" className="contact-link">
                        <i className="fab fa-github"></i>
                        <span>GitHub</span>
                    </a>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;