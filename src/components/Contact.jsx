import React from 'react';

const Contact = ({ data }) => {
    return (
        <section id="contact" className="py-24 px-6 bg-gradient-to-t from-white to-background relative overflow-hidden">

            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-8 relative inline-block">
                    Let's Connect
                    <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-accent rounded-full opacity-70"></span>
                </h2>
                <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
                    I'm always interested in hearing about new projects and opportunities.
                </p>

                <div className="bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[2rem] shadow-xl border border-white/50 relative overflow-hidden group hover:border-accent/30 transition-colors duration-500">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Get in Touch</h3>
                            <a href={`mailto:${data.email}`} className="text-2xl md:text-4xl font-bold font-heading text-primary hover:text-accent transition-colors relative z-10">
                                {data.email}
                            </a>
                        </div>

                        <div className="flex justify-center gap-10 pt-8">
                            <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary hover:scale-110 transform transition-all duration-300">
                                <span className="sr-only">GitHub</span>
                                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] hover:scale-110 transform transition-all duration-300">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
