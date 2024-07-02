import React from 'react';

const Skills: React.FC = () => {
    return (
        <section className="bg-gray-100 p-6">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center">مهارت های من</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    {/* Repeat for each skill */}
                    <div className="skill-card">React.js</div>
                    <div className="skill-card">Node.js</div>
                    <div className="skill-card">CSS</div>
                    <div className="skill-card">HTML</div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
