
import { Section } from '../ui/Section';
import { Heading, Text } from '../ui/Typography';
import { Button } from '../ui/Button';
import PatientImage from '../../assets/images/audience-patient.png';
import ClinicianImage from '../../assets/images/audience-clinician.png';
import EmployerImage from '../../assets/images/audience-employer.png';

export const TargetAudience = () => {
    const audiences = [
        {
            title: "For Individuals",
            description: "Take control of your future with a health plan written in your genes.",
            image: PatientImage,
            cta: "Get Started"
        },
        {
            title: "For Clinicians",
            description: "Empower your practice with genomic tools that enhance patient outcomes.",
            image: ClinicianImage,
            cta: "Partner with Us"
        },
        {
            title: "For Employers",
            description: "Invest in your workforce's long-term wellness and productivity.",
            image: EmployerImage,
            cta: "Corporate Solutions"
        }
    ];

    return (
        <Section variant="default" padding="lg">
            <div className="mb-12">
                <Heading level={2}>Built for everyone in the ecosystem</Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {audiences.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-[2.5rem] bg-surface border border-primary/10 aspect-[4/5] flex flex-col justify-between p-8 transition-transform hover:-translate-y-1 duration-300">
                        {/* Background/Image Placeholder */}
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover opacity-50 transition-opacity group-hover:opacity-60 transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent"></div>
                        </div>

                        <div className="relative z-10">
                            <Heading level={3} className="mb-3">{item.title}</Heading>
                            <Text className="text-primary/80 font-medium">{item.description}</Text>
                        </div>

                        <div className="relative z-10 pt-8">
                            <Button variant="outline" className="bg-white/50 backdrop-blur hover:bg-white border-primary/20 group-hover:border-primary/50">
                                {item.cta}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
