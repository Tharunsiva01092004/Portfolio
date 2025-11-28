import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Skills from './components/Skills/Skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        // Loading timer
        setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }, 2000);

        // Scroll listener
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

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
                    <Projects />
                </section>

                <section id="contact" className="section-contact">
                    <Contact />
                </section>
            </main>
            <Footer />
            <ScrollToTop show={showScroll} />
        </div>
    );
}

export default App;