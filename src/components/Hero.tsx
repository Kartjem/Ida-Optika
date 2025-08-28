'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLAnchorElement>(null);

    const t = useTranslations('hero');

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.5 });

        tl.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
        )
            .fromTo(subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
                '-=0.5'
            )
            .fromTo(descriptionRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
                '-=0.4'
            )
            .fromTo(ctaRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
                '-=0.3'
            );
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-light via-primary-dark to-primary-accent">
            {/* Контент */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1
                    ref={titleRef}
                    className="font-bold text-5xl md:text-7xl lg:text-8xl font-bold mb-6 brand-name"
                >
                    <span className="ida">IDA</span> <span className="optika">OPTIKA</span>
                </h1>

                <p
                    ref={subtitleRef}
                    className="font-bold text-xl md:text-2xl lg:text-3xl text-primary-accent mb-8"
                >
                    {t('subtitle')}
                </p>

                <p
                    ref={descriptionRef}
                    className="text-lg md:text-xl text-primary. -text max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    {t('description')}
                </p>

                <a
                    ref={ctaRef}
                    href="tel:+37235792233"
                    className="inline-block bg-primary-accent text-white px-8 py-4 rounded-custom text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                    {t('cta')}
                </a>
            </div>

            {/* Стрелка прокрутки */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-primary-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </div>
    );
}
