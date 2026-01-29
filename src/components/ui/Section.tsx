import React from 'react';

type SectionVariant = 'default' | 'primary' | 'secondary' | 'dark';

interface SectionProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
    variant?: SectionVariant;
    container?: boolean; // Whether to wrap content in a container
    padding?: 'none' | 'sm' | 'md' | 'lg';
    withWave?: boolean; // Helper to add a wave decoration if requested
}

export const Section: React.FC<SectionProps> = ({
    id,
    children,
    className = '',
    variant = 'default',
    container = true,
    padding = 'lg',
    withWave = false
}) => {
    const variants = {
        default: "bg-surface text-primary",
        primary: "bg-primary text-secondary",
        secondary: "bg-secondary text-primary",
        dark: "bg-primary-dark text-white"
    };

    const paddings = {
        none: "",
        sm: "py-8 md:py-12",
        md: "py-12 md:py-16",
        lg: "py-16 md:py-24" // Spacious padding like PlayHealth
    };

    const content = container ? (
        <div className="container-custom h-full w-full relative z-10">
            {children}
        </div>
    ) : children;

    return (
        <section
            id={id}
            className={`relative w-full overflow-hidden ${variants[variant]} ${paddings[padding]} ${className}`}
        >
            {withWave && (
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[-1px]">
                    {/* Placeholder for SVG wave based on variant - minimal implementation for now */}
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(118% + 1.3px)] h-[50px] fill-current opacity-20">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            )}

            {content}
        </section>
    );
};
