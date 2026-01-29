import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { User, Stethoscope, ArrowRight } from 'lucide-react';

export const PatientsProviders: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'patients' | 'providers'>('patients');

    return (
        <Section className="bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Tabs Header */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-slate-100 p-1 rounded-xl">
                        <button
                            onClick={() => setActiveTab('patients')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all ${activeTab === 'patients'
                                    ? 'bg-white text-primary-600 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                        >
                            <User className="w-4 h-4" />
                            For Patients
                        </button>
                        <button
                            onClick={() => setActiveTab('providers')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all ${activeTab === 'providers'
                                    ? 'bg-white text-secondary-600 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-900'
                                }`}
                        >
                            <Stethoscope className="w-4 h-4" />
                            For Providers
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
                    {activeTab === 'patients' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-in fade-in zoom-in-95 duration-300">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-primary-900">Your Health, Decoded.</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Participating is simple. We send you a collection kit, you return a small saliva sample, and our advanced AI processes your genomic data to provide a lifetime of health insights.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xs font-bold">1</div>
                                        Request your kit online.
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xs font-bold">2</div>
                                        Provide a saliva sample from home.
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xs font-bold">3</div>
                                        Receive your personalized action plan.
                                    </li>
                                </ul>
                                <div className="pt-4">
                                    <Button size="lg">Start Your Journey <ArrowRight className="w-4 h-4 ml-2" /></Button>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-lg p-6 rotate-2 transform border border-primary-100">
                                <div className="aspect-video bg-primary-50 rounded-lg mb-4 flex items-center justify-center text-primary-300">[Patient App Interface]</div>
                                <div className="h-4 w-3/4 bg-slate-100 rounded mb-2"></div>
                                <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-in fade-in zoom-in-95 duration-300">
                            <div className="space-y-6 order-2 md:order-1">
                                <h3 className="text-2xl font-bold text-secondary-900">Precision Clinical Support.</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Empower your practice with genomic intelligence. Our provider portal integrates seamlessly with your workflow to offer risk stratification and pharmacogenomic insights.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="w-6 h-6 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 text-xs font-bold">1</div>
                                        Patient risk stratification dashboard.
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="w-6 h-6 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 text-xs font-bold">2</div>
                                        Medication interaction alerts.
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <div className="w-6 h-6 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 text-xs font-bold">3</div>
                                        Vision 2031 reporting compliance.
                                    </li>
                                </ul>
                                <div className="pt-4">
                                    <Button variant="secondary" size="lg">Provider Access <ArrowRight className="w-4 h-4 ml-2" /></Button>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 bg-white rounded-xl shadow-lg p-6 -rotate-1 transform border border-secondary-100">
                                <div className="aspect-video bg-secondary-50 rounded-lg mb-4 flex items-center justify-center text-secondary-300">[Clinician Dashboard]</div>
                                <div className="h-4 w-3/4 bg-slate-100 rounded mb-2"></div>
                                <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
};
