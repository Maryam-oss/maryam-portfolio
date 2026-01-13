import React from 'react';

const Projects = ({ data }) => {
    return (
        <section id="projects" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4 relative inline-block">
                        Featured Projects
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full opacity-50"></span>
                    </h2>
                    <p className="text-gray-500">Selected freelance and academic works</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((project, index) => (
                        <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-indigo-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, idx) => (
                                            <span key={idx} className="text-xs font-semibold px-2 py-1 bg-gray-50 text-gray-500 rounded border border-gray-100">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 hover:underline"
                                    >
                                        View on GitHub &rarr;
                                    </a>
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
