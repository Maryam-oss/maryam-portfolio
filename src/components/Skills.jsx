import React from 'react';

const Skills = ({ data }) => {
    return (
        <section id="skills" className="py-20 px-4 bg-soft-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4 relative inline-block">
                        Technical Skills
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full opacity-50"></span>
                    </h2>
                    <p className="text-gray-500">My technical toolkit</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((category, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                            <h3 className="text-xl font-semibold text-primary mb-4">{category.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm bg-accent/30 text-indigo-700 rounded-lg font-medium"
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
