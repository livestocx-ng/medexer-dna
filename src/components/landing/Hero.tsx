
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Heading, Text } from '../ui/Typography';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroImage from '../../assets/images/hero.png';

export const Hero = () => {
    return (
        <Section variant="primary" padding="lg" className="min-h-[85vh] flex items-center relative overflow-hidden">
            {/* Background Texture/Pattern could go here */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent to-transparent"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
                <div className="space-y-8 animate-in slide-in-from-left duration-700">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 text-secondary text-sm font-medium tracking-wide">
                        Revolutionizing Personalized Healthcare
                    </div>

                    <Heading level={1} color="text-secondary" className="leading-tight">
                        Unlock Your Health Potential with U-Gene Insights
                    </Heading>

                    <Text size="xl" color="text-secondary/80" className="max-w-xl font-light">
                        We translate your genetic data into actionable health strategies.
                        U-Gene bridges the gap between complex science and your daily well-being.
                    </Text>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link to="/contact">
                            <Button variant="secondary" size="lg" className="group">
                                Start Your Journey
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Link to="/how-it-works">
                            <Button variant="outline" size="lg" className="border-secondary/30 text-secondary hover:bg-secondary/10">
                                How it Works
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="relative animate-in slide-in-from-right duration-700 delay-200 hidden lg:block">
                    {/* Hero Image */}
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-secondary/5 border border-secondary/10 group">
                        <img
                            src={HeroImage}
                            alt="U-Gene Concept"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent mix-blend-overlay"></div>
                    </div>

                    {/* Floating pill card */}
                    <div className="absolute -bottom-8 -left-8 bg-surface p-6 rounded-3xl shadow-xl max-w-xs animate-bounce-slow">
                        <Text size="sm" className="font-semibold text-primary mb-1">Trusted Science</Text>
                        <Text size="sm" className="text-muted-foreground">Backed by clinical data and advanced genomic sequencing.</Text>
                    </div>
                </div>
            </div>
        </Section>
    );
};
