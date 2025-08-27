'use client';

type Variant = 'subtle' | 'hero' | 'contrast';

export default function BackgroundDecor({ variant = 'subtle' }: { variant?: Variant }) {
    const blob = (style: React.CSSProperties, extra = '') => (
        <div
            className={`pointer-events-none absolute blur-3xl opacity-60 will-change-transform ${extra}`}
            style={style}
        />
    );

    const baseRadius = variant === 'hero' ? 800 : 600;
    const intensity = variant === 'contrast' ? 24 : variant === 'hero' ? 20 : 16;

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Живо движущиеся блики для ощущения глубины */}
            {blob(
                {
                    width: baseRadius,
                    height: baseRadius,
                    left: '-10%',
                    top: '-10%',
                    background:
                        `radial-gradient(${baseRadius}px circle at 20% 20%, color-mix(in srgb, var(--color-primary) ${intensity}%, transparent), transparent 70%)`,
                    animation: 'decorFloat1 18s ease-in-out infinite',
                },
            )}
            {blob(
                {
                    width: baseRadius,
                    height: baseRadius,
                    right: '-10%',
                    top: '10%',
                    background:
                        `radial-gradient(${baseRadius}px circle at 80% 10%, color-mix(in srgb, var(--color-text) 10%, transparent), transparent 70%)`,
                    animation: 'decorFloat2 22s ease-in-out infinite',
                },
                'opacity-30'
            )}
            {blob(
                {
                    width: baseRadius,
                    height: baseRadius,
                    left: '10%',
                    bottom: '-20%',
                    background:
                        `radial-gradient(${baseRadius}px circle at 10% 90%, color-mix(in srgb, var(--color-primary) ${Math.max(intensity - 6, 8)}%, transparent), transparent 70%)`,
                    animation: 'decorFloat3 26s ease-in-out infinite',
                },
                'opacity-40'
            )}
        </div>
    );
}
