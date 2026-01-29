import React from 'react';

type Align = 'left' | 'center' | 'right';

interface HeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    className?: string;
    align?: Align;
    color?: string; // Tailwind text color class
}

export const Heading: React.FC<HeadingProps> = ({
    level = 2,
    children,
    className = '',
    align = 'left',
    color = 'text-primary'
}) => {
    const Tag = `h${level}` as any;

    const sizes = {
        1: "text-4xl md:text-6xl lg:text-7xl font-light tracking-tight", // Hero
        2: "text-3xl md:text-5xl font-light", // Section Headers
        3: "text-2xl md:text-3xl font-medium",
        4: "text-xl md:text-2xl font-medium",
        5: "text-lg font-semibold",
        6: "text-base font-bold uppercase tracking-wider"
    };

    const alignClass = `text-${align}`;

    return (
        <Tag className={`${sizes[level]} ${color} ${alignClass} font-serif ${className}`}>
            {children}
        </Tag>
    );
};

interface TextProps {
    children: React.ReactNode;
    className?: string;
    align?: Align;
    size?: 'sm' | 'base' | 'lg' | 'xl';
    color?: string;
}

export const Text: React.FC<TextProps> = ({
    children,
    className = '',
    align = 'left',
    size = 'base',
    color = 'text-primary' // Often text-primary or text-muted-foreground
}) => {
    const sizesClass = {
        sm: "text-sm leading-relaxed",
        base: "text-base leading-relaxed",
        lg: "text-lg leading-relaxed",
        xl: "text-xl leading-relaxed font-light"
    };

    const alignClass = `text-${align}`;

    return (
        <p className={`${sizesClass[size]} ${color} ${alignClass} font-sans ${className}`}>
            {children}
        </p>
    );
};
