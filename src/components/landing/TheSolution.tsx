import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MonitorPlay, Dna, Activity, FileText } from 'lucide-react';

export const TheSolution: React.FC = () => {
    return (
        <Section id="solution" className="bg-slate-50">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Medexer DNA Health Solution</h2>
                <p className="text-lg text-slate-600">
                    A comprehensive platform integrating genomic data with clinical insights to deliver true precision medicine.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Col: Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card className="p-6 border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                        <MonitorPlay className="w-8 h-8 text-blue-500 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">AI + Genomics Dashboard</h3>
                        <p className="text-sm text-slate-600">Real-time health insights derived from your unique genetic makeup.</p>
                    </Card>

                    <Card className="p-6 border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                        <Dna className="w-8 h-8 text-purple-500 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Genetic Risk Profiles</h3>
                        <p className="text-sm text-slate-600">Detailed assessments for diabetes, obesity, and cardiac health.</p>
                    </Card>

                    <Card className="p-6 border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                        <Activity className="w-8 h-8 text-green-500 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Tailored Health Plans</h3>
                        <p className="text-sm text-slate-600">Actionable plans for diet, activity, and medication personalized to you.</p>
                    </Card>

                    <Card className="p-6 border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
                        <FileText className="w-8 h-8 text-orange-500 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Provider Tools</h3>
                        <p className="text-sm text-slate-600">Clinician dashboards with alerts and comprehensive genomic reports.</p>
                    </Card>
                </div>

                {/* Right Col: Visual Representation (e.g. Dashboard Mockup) */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-secondary-200 rounded-3xl blur-2xl opacity-50 -z-10"></div>
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                        <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            <div className="ml-4 text-xs font-mono text-slate-400">medexer-dashboard.app</div>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Fatima Al-Mansoori</h4>
                                    <p className="text-xs text-slate-500">ID: #MX-99281 • Type 2 Diabetes Prevention</p>
                                </div>
                                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Active</span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">Polygenic Risk Score</span>
                                    <span className="font-medium text-purple-600">High (82/100)</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div className="bg-purple-600 h-2 rounded-full w-[82%]"></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-primary-50 p-3 rounded-lg">
                                    <p className="text-xs text-primary-600 font-semibold mb-1">Recommended Diet</p>
                                    <p className="text-sm font-medium text-primary-900">Low-Glycemic Mediterranean</p>
                                </div>
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <p className="text-xs text-blue-600 font-semibold mb-1">Screening Freq.</p>
                                    <p className="text-sm font-medium text-blue-900">Every 3 Months</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
