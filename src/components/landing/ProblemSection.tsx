
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import ProblemImage from '../../assets/images/problem.png';

export const ProblemSection = () => {
    return (
        <Section variant="default" padding="lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                {/* Image Side */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-square bg-secondary/20 group">
                        <img
                            src={ProblemImage}
                            alt="Biological Complexity"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/5 transition-transform duration-700 group-hover:scale-105"></div>

                        <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg border border-primary/5">
                            <Heading level={6} className="mb-2 text-primary" align="left">The Challenge</Heading>
                            <Text size="sm" className="text-muted-foreground">Standard healthcare often misses the unique genetic markers that define your body's specific needs.</Text>
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
                    <Heading level={2} className="leading-tight">
                        Generic healthcare is failing to address your unique biological blueprint.
                    </Heading>

                    <div className="space-y-6">
                        <Text size="lg" color="text-primary/80">
                            Most health advice is based on population averages. But you are not an average. Your U-Gene profile holds the specific instructions for your optimal diet, fitness, and longevity.
                        </Text>

                        <Text size="lg" color="text-primary/80">
                            U-Gene decodes this complexity, turning millions of data points into a simple, actionable roadmap for your health.
                        </Text>
                    </div>

                    <div className="pt-4">
                        <Button variant="ghost" className="group pl-0 hover:bg-transparent hover:text-primary-dark">
                            See the science behind it
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};
