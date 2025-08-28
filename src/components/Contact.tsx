'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const t = useTranslations('contact');

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
            id="contact"
            ref={sectionRef}
            className="relative py-20 md:py-32 bg-primary-text text-primary-bg"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div ref={contentRef}>
                    <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                        {t('title')}
                    </h2>

                    <div className="mb-12">
                        <a
                            href="tel:+37235792233"
                            className="inline-block bg-primary-accent text-white px-12 py-6 rounded-custom text-2xl font-bold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            {t('phone')}
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                        <div>
                            <h3 className="font-semibold text-xl mb-2">Адрес:</h3>
                            <p className="opacity-90">{t('address')}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl mb-2">{t('hours')}</h3>
                            <div className="opacity-90 space-y-1">
                                <p>{t('weekdays')}</p>
                                <p>{t('saturday')}</p>
                                <p>{t('sunday')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
