
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { Activity, Dna, ShieldCheck } from 'lucide-react';

export const FeaturesSection = () => {
    const features = [
        {
            icon: Dna,
            title: "Genomic Precision",
            description: "We analyze your U-Gene profile to identify specific variants that influence your metabolism, injury risk, and nutritional needs."
        },
        {
            icon: Activity,
            title: "Actionable Insights",
            description: "No confusing reports. Get clear, practical recommendations for diet, exercise, and lifestyle changes."
        },
        {
            icon: ShieldCheck,
            title: "Clinical Validity",
            description: "Our protocols are backed by the latest peer-reviewed research and validated by medical professionals."
        }
    ];

    return (
        <Section variant="secondary" padding="lg" withWave>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <Heading level={2} align="center">Deep insights that evolve with you</Heading>
                <Text size="lg" align="center" color="text-primary/80">
                    Your health journey isn't static. Our platform adapts as new research emerges and your goals change.
                </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {features.map((feature, index) => (
                    <div key={index} className="bg-surface p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-primary/5">
                        <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                            <feature.icon className="h-7 w-7 text-primary" />
                        </div>
                        <Heading level={4} className="mb-3">{feature.title}</Heading>
                        <Text className="text-muted-foreground">
                            {feature.description}
                        </Text>
                    </div>
                ))}
            </div>
        </Section>
    );
};
