import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
    pill?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    className = '',
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    pill = true, // Default to true for the new aesthetic
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    // PlayHealth style rounded
    const roundedClass = pill ? 'rounded-full' : 'rounded-lg';

    const variants = {
        // Deep Green Button with Cream text
        primary: "bg-primary text-secondary hover:bg-primary-dark focus:ring-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        // Cream Button with Deep Green text
        secondary: "bg-secondary text-primary hover:bg-secondary-dark focus:ring-secondary shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        // Outline
        outline: "border-2 border-primary text-primary hover:bg-primary-50 focus:ring-primary",
        // Ghost
        ghost: "text-primary hover:bg-primary-50 hover:text-primary-dark focus:ring-primary",
        // Accent (Gold/Tan)
        accent: "bg-accent text-primary hover:bg-yellow-600 focus:ring-accent shadow-md",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",   // Larger padding for pill shape
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl font-semibold",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
        <button
            className={`${baseStyles} ${roundedClass} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
