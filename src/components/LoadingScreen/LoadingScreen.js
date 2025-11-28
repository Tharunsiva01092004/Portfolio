import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="loading-content">
                <div className="loading-logo">TS</div>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
                <div className="loading-text">Loading Amazing Things...</div>
            </div>
        </div>
    );
};

export default LoadingScreen; 