import React, { useState, useEffect } from 'react';
import { Menu, X, Dna } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/#home' },
        { name: 'Solution', path: '/#solution' },
        { name: 'How It Works', path: '/#how-it-works' },
        { name: 'FAQs', path: '/#faqs' },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();

        // Extract plain path and hash
        const [, targetHash] = path.split('#');
        const hash = targetHash ? `#${targetHash}` : '';

        // Close mobile menu
        setIsOpen(false);

        // If we are already on the home page (landing)
        if (location.pathname === '/' || location.pathname === '') {
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            // Navigate to home then scroll (browser handles hash scroll naturally on load usually, 
            // but we might need a timeout helper in LandingPage if strictly needed. 
            // For now, simple navigation works).
            navigate(path);
        }
    };

    return (
        <nav
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-surface/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="bg-primary p-2 rounded-full transition-transform group-hover:scale-110 duration-300">
                            <Dna className="h-5 w-5 text-secondary" />
                        </div>
                        {/* <span className="text-xl md:text-2xl font-serif font-medium text-primary tracking-tight">
                            Medexer DNA
                        </span> */}
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={(e) => handleLinkClick(e, link.path)}
                                className="text-sm font-medium tracking-wide transition-colors hover:text-primary text-primary/70 hover:font-semibold"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <Link to="/contact">
                            <Button size="md" variant="primary" className="hidden md:inline-flex shadow-none hover:shadow-lg">
                                Get Assessed
                            </Button>
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-primary hover:bg-primary/5 rounded-full transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-surface border-t border-primary/10 shadow-lg animate-in slide-in-from-top-5 duration-200">
                    <div className="container-custom py-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={(e) => handleLinkClick(e, link.path)}
                                className="block text-lg font-serif text-primary/70 hover:text-primary"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 border-t border-primary/10">
                            <Link to="/contact" onClick={() => setIsOpen(false)}>
                                <Button fullWidth size="lg">Get Assessed</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
