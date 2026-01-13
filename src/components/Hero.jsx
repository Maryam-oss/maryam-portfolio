import React from 'react';

const Hero = ({ data }) => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-48 overflow-hidden bg-background">

            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col items-start text-left max-w-4xl">
                <h1 className="text-5xl md:text-8xl font-black font-heading tracking-tight leading-tight text-primary mb-6">
                    Hi, I'm <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
                        {data.name}
                    </span>.
                </h1>

                <p className="text-xl md:text-2xl text-white font-medium mb-4">
                    {data.title}
                </p>

                <p className="text-lg text-secondary max-w-xl font-light leading-relaxed mb-10">
                    {data.tagline}
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-accent hover:scale-105 transition-all duration-300"
                    >
                        See My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
