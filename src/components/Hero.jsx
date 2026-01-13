import React from 'react';

const Hero = ({ data }) => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-background">
            <div className="max-w-3xl space-y-6 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tight">
                    Hello, I'm <span className="text-indigo-500">{data.name}</span>.
                </h1>
                <h2 className="text-2xl md:text-3xl text-secondary font-medium">
                    {data.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                    {data.tagline}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-white text-primary border border-gray-200 rounded-full font-medium shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
