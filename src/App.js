import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Skills from './components/Skills';
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }, 2000);
    }, []);

    if (loading) {
        return (
            <div className={`loading-wrapper ${fadeOut ? 'fade-out' : ''}`}>
                <LoadingScreen />
            </div>
        );
    }

    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <section id="about" className="section-about">
                    <About />
                </section>
                
                <section id="skills" className="section-skills">
                    <Skills />
                </section>

                <section id="projects" className="section-projects">
                    <h2 className="section-title">Featured Projects</h2>
                    <Projects />
                </section>

                <section id="contact" className="section-contact">
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;