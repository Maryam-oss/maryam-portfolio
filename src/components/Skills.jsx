import React from 'react';

const Skills = ({ data }) => {
    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 relative inline-block">
                        Technical Skills
                        <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-accent rounded-full opacity-70"></span>
                    </h2>
                    <p className="text-lg text-secondary max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((category, index) => (
                        <div
                            key={index}
                            className="bg-surface/50 backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-white/10 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <h3 className="text-2xl font-bold font-heading text-white mb-6 group-hover:text-accent transition-colors">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 text-sm bg-white/5 border border-white/10 text-gray-300 rounded-xl font-medium shadow-sm group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/20 transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
