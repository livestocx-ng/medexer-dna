import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Dna, BrainCircuit, Users } from 'lucide-react';

export const ValueProps: React.FC = () => {
    return (
        <Section className="py-20 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <Card hover className="p-8 text-center border-t-4 border-t-primary-500">
                    <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Dna className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Precision Health Planning</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Tailored to your unique genome and lifestyle. We move beyond "one-size-fits-all" to provide care that actually works for <em>you</em>.
                    </p>
                </Card>

                <Card hover className="p-8 text-center border-t-4 border-t-secondary-500">
                    <div className="bg-secondary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <BrainCircuit className="w-8 h-8 text-secondary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">AI Risk Prediction</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Advanced AI algorithms analyze millions of data points to provide early warning insights before disease onset, enabling proactive prevention.
                    </p>
                </Card>

                <Card hover className="p-8 text-center border-t-4 border-t-teal-500">
                    <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">UAE-Aligned Public Health</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Directly supporting Vision 2031 goals. We are committed to improving population health metrics across the Emirates.
                    </p>
                </Card>

            </div>
        </Section>
    );
};
