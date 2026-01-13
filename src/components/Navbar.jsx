import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeTable, setActiveTab] = useState('Home');

    const navLinks = [
        { name: 'Home', href: '#home', icon: '🏠' },
        { name: 'About', href: '#about', icon: '👤' },
        { name: 'Projects', href: '#projects', icon: '⚡' },
        { name: 'Hobbies', href: '#hobbies', icon: '📷' },
        { name: 'Skills', href: '#skills', icon: '🛠️' },
        { name: 'Contact', href: '#contact', icon: '👋' },
    ];

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
            <nav className="flex items-center justify-between bg-surface/80 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-2xl shadow-black/50">

                {/* Logo/Title */}
                <a href="#home" className="font-heading font-bold text-xl text-white tracking-tight mr-4">
                    Mary<span className="text-accent">am.</span>
                </a>

                {/* Links */}
                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveTab(link.name)}
                            className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-300 group whitespace-nowrap"
                        >
                            <span className="text-lg filter grayscale group-hover:grayscale-0 transition-all">{link.icon}</span>
                            <span className="hidden sm:inline text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                {link.name}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Contact Button (Desktop) */}
                <a href="#contact" className="hidden md:block px-5 py-2 bg-accent/20 text-accent border border-accent/20 rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-all">
                    Let's Talk
                </a>
            </nav>
        </div>
    );
};

export default Navbar;
