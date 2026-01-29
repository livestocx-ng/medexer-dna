import React from 'react';
import { Dna, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Text, Heading } from '../ui/Typography';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-secondary pt-20 pb-10 relative overflow-hidden">
            {/* Wavy top border effect using CSS mask or SVG if needed, keeping it simple for now */}

            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="bg-secondary p-2 rounded-full">
                                <Dna className="h-5 w-5 text-primary" />
                            </div>
                            <span className="text-xl font-serif font-medium tracking-tight">U-Gene</span>
                        </Link>
                        <Text size="sm" color="text-secondary/80" className="leading-relaxed">
                            Pioneering precision medicine in the UAE. Detailed genomic insights for a longer, healthier life.
                        </Text>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Twitter className="h-4 w-4" /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Linkedin className="h-4 w-4" /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Instagram className="h-4 w-4" /></a>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <Heading level={6} color="text-secondary" className="mb-6 opacity-90">Platform</Heading>
                        <ul className="space-y-4">
                            <li><Link to="/solution" className="text-secondary/70 hover:text-white transition-colors text-sm">Our Solution</Link></li>
                            <li><Link to="/how-it-works" className="text-secondary/70 hover:text-white transition-colors text-sm">How It Works</Link></li>
                            <li><Link to="#" className="text-secondary/70 hover:text-white transition-colors text-sm">For Clinicians</Link></li>
                            <li><Link to="#" className="text-secondary/70 hover:text-white transition-colors text-sm">Research</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <Heading level={6} color="text-secondary" className="mb-6 opacity-90">Support</Heading>
                        <ul className="space-y-4">
                            <li><Link to="/faqs" className="text-secondary/70 hover:text-white transition-colors text-sm">FAQs</Link></li>
                            <li><Link to="/contact" className="text-secondary/70 hover:text-white transition-colors text-sm">Contact Us</Link></li>
                            <li><a href="#" className="text-secondary/70 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="text-secondary/70 hover:text-white transition-colors text-sm">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <Heading level={6} color="text-secondary" className="mb-6 opacity-90">Contact</Heading>
                        <ul className="space-y-4 text-sm text-secondary/70">
                            <li>Dubai Healthcare City<br />Dubai, UAE</li>
                            <li><a href="mailto:support@medexer.ae" className="hover:text-white">support@medexer.com.ng</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary/50">
                    <p>&copy; {new Date().getFullYear()} U-Gene Health. All rights reserved.</p>
                    <p>Designed with care.</p>
                </div>
            </div>
        </footer>
    );
};

