import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Section } from '../components/ui/Section';

import { Button } from '../components/ui/Button';
import { Heading, Text } from '../components/ui/Typography';

export const ContactPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-surface flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Section variant="default" padding="lg">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <Heading level={1} className="mb-4">Get Started Today</Heading>
                        <Text size="xl" className="text-primary/70">
                            Whether you're a patient looking for insights or a provider seeking integration, we're here to help.
                        </Text>
                    </div>

                    <div className="max-w-xl mx-auto relative z-10">
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-primary/5">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">First Name</label>
                                        <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">Last Name</label>
                                        <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label htmlFor="role" className="block text-sm font-medium text-primary mb-2">I am a...</label>
                                    <select id="role" className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-primary">
                                        <option value="patient">Patient</option>
                                        <option value="provider">Healthcare Provider</option>
                                        <option value="researcher">Researcher</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                                </div>

                                <Button fullWidth size="lg" className="shadow-lg">Submit Request</Button>
                            </form>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
};
