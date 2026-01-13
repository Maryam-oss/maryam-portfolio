import React from 'react';

const Hobbies = ({ data }) => {
    return (
        <section id="hobbies" className="py-24 px-6 bg-white relative">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6 relative inline-block">
                        Hobbies & Interests
                        <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-accent rounded-full opacity-70"></span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((hobby, index) => (
                        <div
                            key={index}
                            className="bg-background p-8 rounded-3xl border border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 text-center group"
                        >
                            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {hobby.icon}
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-primary mb-3">
                                {hobby.title}
                            </h3>
                            <p className="text-secondary leading-relaxed">
                                {hobby.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
