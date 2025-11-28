import React from 'react';

const ScrollToTop = ({ show }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`scroll-to-top ${show ? 'show' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default ScrollToTop; 