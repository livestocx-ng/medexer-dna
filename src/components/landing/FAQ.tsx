import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "Is my genetic data secure?",
            answer: "Absolutely. We use military-grade encryption and strictly adhere to UAE data privacy laws and the Emirates Genome Program standards. Your data is your property."
        },
        {
            question: "What conditions are assessed?",
            answer: "We focus on preventable chronic conditions with high prevalence in the UAE, including Type 2 Diabetes, Cardiovascular Disease, Obesity, and Hypertension, plus pharmacogenomic markers."
        },
        {
            question: "How does AI personalize recommendations?",
            answer: "Our AI engine analyzes millions of genetic variants alongside your lifestyle data to calculate your unique Polygenic Risk Scores (PRS) and identify specific interventions that work best for your biology."
        },
        {
            question: "What labs and partners support this?",
            answer: "We partner with accredited labs in Dubai Healthcare City and collaborate with leading research institutions aligned with the National Genome Strategy."
        }
    ];

    return (
        <Section id="faqs" variant="default">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
            >
                <span className="font-semibold text-slate-900">{question}</span>
                <span className="text-slate-400">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
            </button>
            <div
                className={`bg-slate-50 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};
