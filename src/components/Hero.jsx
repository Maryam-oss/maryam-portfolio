import React from 'react';

const Hero = ({ data }) => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-background">

            {/* Animated Background Blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 max-w-4xl space-y-8 animate-fade-in-up">

                <h2 className="text-xl md:text-2xl font-medium text-accent tracking-wide uppercase">
                    {data.title}
                </h2>

                <h1 className="text-6xl md:text-8xl font-extrabold font-heading text-primary tracking-tight leading-tight">
                    Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">{data.name}</span>.
                </h1>

                <p className="text-lg md:text-2xl text-secondary max-w-2xl mx-auto leading-relaxed font-light">
                    {data.tagline}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
                    <a
                        href="#projects"
                        className="px-10 py-4 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-accent/50 hover:bg-black hover:-translate-y-1 transition-all duration-300 transform"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-10 py-4 bg-white/80 backdrop-blur-sm text-primary border border-gray-200 rounded-full font-semibold shadow-sm hover:shadow-md hover:border-accent hover:text-accent transition-all duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
