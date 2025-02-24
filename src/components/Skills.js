import React from 'react';

const Skills = () => {
    const skills = [
        { 
            category: 'AI & Machine Learning',
            icon: 'fas fa-brain',
            items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Neural Networks', 'Computer Vision']
        },
        { 
            category: 'Web Development',
            icon: 'fas fa-code',
            items: ['React', 'Vue.js', 'Node.js', 'Express.js', 'HTML/CSS', 'JavaScript'] 
        },
        { 
            category: 'Tools & Technologies',
            icon: 'fas fa-tools',
            items: ['Git', 'Docker', 'AWS', 'MySQL', 'MongoDB', 'RESTful APIs'] 
        },
        {
            category: 'Programming Languages',
            icon: 'fas fa-laptop-code',
            items: ['Python', 'Java', 'JavaScript', 'C++', 'SQL']
        }
    ];

    return (
        <div className="skills-section">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
                {skills.map((skillGroup, index) => (
                    <div key={index} className="skill-category">
                        <div className="category-header">
                            <i className={skillGroup.icon}></i>
                            <h3>{skillGroup.category}</h3>
                        </div>
                        <div className="skill-items">
                            {skillGroup.items.map((skill, idx) => (
                                <div key={idx} className="skill-item">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills; 