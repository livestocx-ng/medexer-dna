import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
    className = '',
    hover = false,
    children,
    ...props
}) => {
    const hoverClasses = hover
        ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        : "";

    return (
        <div
            className={`bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden ${hoverClasses} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
