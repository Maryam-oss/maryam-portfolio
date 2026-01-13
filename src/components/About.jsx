import React from 'react';

const About = ({ data }) => {
    return (
        <section id="about" className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-primary mb-8 relative inline-block">
                    About Me
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full opacity-50"></span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    {data.description}
                </p>
            </div>
        </section>
    );
};

export default About;
