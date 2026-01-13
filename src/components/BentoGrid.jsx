import React from 'react';

const BentoGrid = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)] pb-20">

            {/* --- About Tile (Large) --- */}
            <div id="about" className="bento-card md:col-span-2 md:row-span-2 flex flex-col justify-between group">
                <div>
                    <h2 className="text-sm font-medium text-secondary uppercase tracking-widest mb-4">About Me</h2>
                    <p className="text-xl md:text-3xl font-heading font-semibold text-white leading-tight">
                        {data.about.description}
                    </p>
                </div>
                <div className="mt-8 flex gap-2">
                    <div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-3/4"></div>
                    </div>
                    <div className="h-2 w-12 bg-white/10 rounded-full"></div>
                </div>
            </div>

            {/* --- Projects --- */}
            {data.projects.map((project, idx) => (
                <div key={idx} id="projects" className={`bento-card flex flex-col justify-between group ${idx === 0 ? 'md:col-span-2' : 'md:col-span-1'} ${idx === 0 ? 'md:row-span-2' : ''}`}>
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-white/5 rounded-2xl">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <a href={project.githubLink} target="_blank" className="p-2 hover:text-accent transition-colors">↗</a>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-sm text-secondary line-clamp-3">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.techStack.map(t => (
                            <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300 border border-white/5">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            ))}

            {/* --- Skills (Compact Grid) --- */}
            <div id="skills" className="bento-card md:col-span-2 flex flex-col justify-center">
                <h2 className="text-sm font-medium text-secondary uppercase tracking-widest mb-6">Tech Stack</h2>
                <div className="flex flex-wrap gap-3">
                    {data.skills.flatMap(cat => cat.items).slice(0, 10).map((skill, i) => (
                        <span key={i} className="px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-xl text-sm font-semibold">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* --- Hobbies (Small Tiles) --- */}
            {data.hobbies.map((hobby, i) => (
                <div key={i} id="hobbies" className="bento-card flex flex-col items-center justify-center text-center gap-3 hover:border-accent/40 cursor-default">
                    <span className="text-4xl">{hobby.icon}</span>
                    <span className="font-medium text-white">{hobby.title}</span>
                </div>
            ))}

            {/* --- Contact Tile --- */}
            <div id="contact" className="bento-card md:col-span-2 bg-gradient-to-r from-accent to-purple-600 border-none">
                <div className="h-full flex flex-col items-center justify-center text-center py-6">
                    <h2 className="text-3xl font-bold text-white mb-4">Let's work together.</h2>
                    <a href={`mailto:${data.contact.email}`} className="text-xl text-white/90 underline decoration-2 underline-offset-4 hover:text-white">
                        {data.contact.email}
                    </a>
                    <div className="flex gap-6 mt-8">
                        <a href={data.contact.github} className="text-white/80 hover:text-white text-sm font-bold tracking-widest uppercase">GitHub</a>
                        <a href={data.contact.linkedin} className="text-white/80 hover:text-white text-sm font-bold tracking-widest uppercase">LinkedIn</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BentoGrid;
