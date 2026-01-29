import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Heading, Text } from '../ui/Typography';
import { Link } from 'react-router-dom';

export const FinalCTA: React.FC = () => {
    return (
        <Section variant="primary" padding="lg" className="text-center relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <Heading level={2} color="text-secondary" className="mb-6">
                    Ready to Take Control of Your Future Health?
                </Heading>

                <Text size="xl" color="text-secondary/80" align="center" className="mb-12 max-w-2xl mx-auto">
                    Join the movement towards precision medicine. Your U-Gene profile holds the answers—let us help you read them.
                </Text>

                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <Link to="/contact">
                        <Button variant="secondary" size="lg" className="shadow-xl">
                            Start the Conversation
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
};
