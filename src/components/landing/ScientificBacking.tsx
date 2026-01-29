import React from 'react';
import { Section } from '../ui/Section';
import { Quote } from 'lucide-react';

export const ScientificBacking: React.FC = () => {
    return (
        <Section variant="secondary" className="text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Built on the UAE’s National Strategy</h2>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative">
                    <Quote className="absolute top-6 left-6 w-10 h-10 text-primary-200" />
                    <blockquote className="relative z-10 text-xl text-slate-700 italic font-medium leading-relaxed mb-6">
                        "Genomics is the future of healthcare. By understanding our unique genetic makeup, we can predict, prevent, and treat diseases with unprecedented precision."
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                            {/* Placeholder for official image, using generic avatar for now */}
                            <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 text-xs">IMG</div>
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-slate-900">Emirates Genome Council</div>
                            <div className="text-sm text-primary-600">Strategic Alignment</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Partner Logos placeholders */}
                    <div className="flex items-center justify-center h-16 bg-slate-200/50 rounded-lg">Dept of Health</div>
                    <div className="flex items-center justify-center h-16 bg-slate-200/50 rounded-lg">Genome Program</div>
                    <div className="flex items-center justify-center h-16 bg-slate-200/50 rounded-lg">Ministry of Health</div>
                    <div className="flex items-center justify-center h-16 bg-slate-200/50 rounded-lg">Pure Health</div>
                </div>
            </div>
        </Section>
    );
};
