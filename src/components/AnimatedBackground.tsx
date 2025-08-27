'use client';

interface AnimatedBackgroundProps {
    className?: string;
    children?: React.ReactNode;
}

export default function AnimatedBackground({ className = '', children }: AnimatedBackgroundProps) {
    return (
        <div className={`relative w-full h-full ${className}`}>
            {/* Анимированный градиентный фон */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-bg via-primary-secondary to-primary-bg animate-gradient-shift"></div>

            {/* Волновые слои */}
            <div className="wave-container">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
            </div>

            {/* Контент */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
