'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useLocale } from 'next-intl';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function GalleryCTA() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const t = useTranslations('cta');
    const locale = useLocale();

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.fromTo(contentRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 md:py-32 bg-primary-secondary"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div ref={contentRef}>
                    <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text mb-6">
                        {t('title')}
                    </h2>
                    <p className="text-lg md:text-xl text-primary-text mb-12 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                    <Link
                        href={`/${locale}/glasses`}
                        className="inline-block bg-primary-accent text-white px-8 py-4 rounded-custom text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        {t('button')}
                    </Link>
                </div>
            </div>
        </section>
    );
}
