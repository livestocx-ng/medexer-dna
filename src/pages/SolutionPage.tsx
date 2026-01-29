import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { TheSolution } from '../components/landing/TheSolution';
import { Section } from '../components/ui/Section';

export const SolutionPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Section className="bg-primary-50 pt-32 pb-16">
                    <h1 className="text-4xl font-bold text-center text-slate-900 mb-6">Our Solution</h1>
                    <p className="text-xl text-center text-slate-600 max-w-3xl mx-auto">
                        Discover how Medexer DNA Health leverages cutting-edge genomics and AI to transform patient care.
                    </p>
                </Section>
                <TheSolution />
            </main>
            <Footer />
        </div>
    );
};
