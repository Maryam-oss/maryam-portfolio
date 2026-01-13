import React from 'react';

const Projects = ({ data }) => {
    return (
        <section id="projects" className="py-24 px-6 bg-background relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6 relative inline-block">
                        Featured Projects
                        <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-accent rounded-full opacity-70"></span>
                    </h2>
                    <p className="text-lg text-secondary">Selected freelance and academic works</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {data.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                        >
                            {/* Optional: Add a gradient banner at top of card */}
                            <div className="h-2 bg-gradient-to-r from-accent to-purple-500 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold font-heading text-primary mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, idx) => (
                                            <span key={idx} className="text-xs font-semibold px-2.5 py-1 bg-gray-50 text-gray-500 rounded-lg border border-gray-200">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-bold text-accent hover:text-accentDark transition-colors group-hover:underline decoration-2 underline-offset-4"
                                        >
                                            View Code &rarr;
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
