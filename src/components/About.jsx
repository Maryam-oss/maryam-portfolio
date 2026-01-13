import React from 'react';

const About = ({ data }) => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-24 px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-8 relative inline-block">
                    About Me
                    <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-accent rounded-full opacity-70"></span>
                </h2>
                <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
                    {data.description}
                </p>
            </div>
        </section>
    );
};

export default About;
