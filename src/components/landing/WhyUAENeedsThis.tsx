import React from 'react';
import { Section } from '../ui/Section';
import { AlertCircle, TrendingUp, ShieldCheck } from 'lucide-react';

export const WhyUAENeedsThis: React.FC = () => {
    return (
        <Section variant="secondary">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Now? The Cost of Chronic Disease</h2>
                <p className="text-lg text-slate-600">
                    Lifestyle diseases like diabetes and obesity are exacting a huge human and economic cost on the Emirates. It's time for a change.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Stat 1 */}
                <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm">
                    <div className="p-3 bg-red-100 rounded-full mb-4">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-4xl font-extrabold text-slate-900 mb-2">~20%</h3>
                    <p className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Diabetes Prevalence</p>
                    <p className="text-center text-slate-500 text-sm mt-3">
                        One of the highest rates globally, affecting 1 in 5 adults in the UAE.
                    </p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm">
                    <div className="p-3 bg-primary-100 rounded-full mb-4">
                        <ShieldCheck className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-4xl font-extrabold text-slate-900 mb-2">Vision 2031</h3>
                    <p className="text-sm font-semibold text-slate-900 uppercase tracking-wide">National Priority</p>
                    <p className="text-center text-slate-500 text-sm mt-3">
                        Aligned with the National Genome Strategy to integrate genomic medicine into specific care.
                    </p>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm">
                    <div className="p-3 bg-blue-100 rounded-full mb-4">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-4xl font-extrabold text-slate-900 mb-2">10-Year</h3>
                    <p className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Strategy Lifecycle</p>
                    <p className="text-center text-slate-500 text-sm mt-3">
                        A comprehensive initiative to enable early disease detection and personalized treatment.
                    </p>
                </div>
            </div>
        </Section>
    );
};
