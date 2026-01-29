import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { User, Stethoscope, Building2, CheckCircle2 } from 'lucide-react';

export const OutcomesBenefits: React.FC = () => {
    return (
        <Section className="bg-slate-900 text-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Outcomes & Benefits</h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Delivering value across the entire healthcare ecosystem.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Patients */}
                <Card className="bg-slate-800 border-slate-700 p-8 text-white">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <User className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold">For Patients</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">Early diagnosis before symptoms appear.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">Tailored care plans matching your U-Gene profile.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">Empowerment through health data ownership.</span>
                        </li>
                    </ul>
                </Card>

                {/* Healthcare Providers */}
                <Card className="bg-slate-800 border-slate-700 p-8 text-white">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                            <Stethoscope className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold">For Providers</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">Integrate genomic data into clinical workflows.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">Better treatment subtype assignment.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">Reduced trial-and-error prescribing.</span>
                        </li>
                    </ul>
                </Card>

                {/* Public Health */}
                <Card className="bg-slate-800 border-slate-700 p-8 text-white">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                            <Building2 className="w-6 h-6 text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold">Public Health</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">Improved population health metrics for UAE.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">Reduced long-term health system burden.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">Data-driven policy making support.</span>
                        </li>
                    </ul>
                </Card>

            </div>
        </Section>
    );
};
