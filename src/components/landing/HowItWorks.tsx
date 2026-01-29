import React from 'react';
import { Section } from '../ui/Section';
import { TestTube2, Brain, FileCheck, Activity } from 'lucide-react';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: <TestTube2 className="w-6 h-6 text-white" />,
            title: "Sample Collection & Sequencing",
            description: "Simple saliva collection kit delivered to your door. We sequence your DNA using advanced NGS technology."
        },
        {
            icon: <Brain className="w-6 h-6 text-white" />,
            title: "AI Analysis & Interpretation",
            description: "Our AI engine analyzes your genomic data against global databases to identify specific health risks."
        },
        {
            icon: <FileCheck className="w-6 h-6 text-white" />,
            title: "Personalized Care Plan",
            description: "Receive a comprehensive report with tailored recommendations for diet, lifestyle, and prevention."
        },
        {
            icon: <Activity className="w-6 h-6 text-white" />,
            title: "Continuous Monitoring",
            description: "Regular updates and health tracking to ensure your plan evolves with your health needs."
        }
    ];

    return (
        <Section id="how-it-works" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Your journey to precision health is simple, secure, and scientifically backed.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center group">
                            <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center mb-6 shadow-lg shadow-primary-200 z-10 group-hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed px-2">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
