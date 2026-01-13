import React, { useState, useEffect } from 'react';

const Navbar = ({ data }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Hobbies', href: '#hobbies' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className={`max-w-7xl mx-auto px-6`}>
                <div className={`
          flex justify-between items-center 
          bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg 
          rounded-full px-6 py-3 transition-all duration-300
          ${scrolled ? 'bg-white/95 shadow-2xl scale-[0.98]' : 'bg-white/70'}
        `}>
                    <a href="#" className="font-heading font-bold text-2xl text-primary tracking-tight">
                        Mary<span className="text-accent">am.</span>
                    </a>

                    <ul className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-gray-600 hover:text-accent transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#contact"
                        className="hidden md:inline-block px-5 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-accent transition-colors duration-300"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
