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
            <span className="arrow-up">↑</span>
        </button>
    );
};

export default ScrollToTop; 