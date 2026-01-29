import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FAQ } from '../components/landing/FAQ';
import { Section } from '../components/ui/Section';

export const FAQPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Section className="bg-slate-50 pt-32 pb-16">
                    <h1 className="text-4xl font-bold text-center text-slate-900 mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-center text-slate-600 max-w-3xl mx-auto">
                        Find answers to common questions about our genetic testing and data privacy.
                    </p>
                </Section>
                <FAQ />
            </main>
            <Footer />
        </div>
    );
};
