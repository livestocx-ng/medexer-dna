import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/landing/Hero';
import { ProblemSection } from '../components/landing/ProblemSection';
import { FeaturesSection } from '../components/landing/FeaturesSection';
import { TargetAudience } from '../components/landing/TargetAudience';
import { FinalCTA } from '../components/landing/FinalCTA';
import { TheSolution } from '../components/landing/TheSolution';
import { HowItWorks } from '../components/landing/HowItWorks';
import { FAQ } from '../components/landing/FAQ';

export const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-surface selection:bg-primary/20">
            <Navbar />
            <main className="flex-grow w-full">
                <div id="home">
                    <Hero />
                </div>
                <ProblemSection />
                <TheSolution />
                <HowItWorks />
                <FeaturesSection />
                <TargetAudience />
                <FAQ />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
};
