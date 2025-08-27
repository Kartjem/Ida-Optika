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

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const locale = useLocale();

    const t = useTranslations('services');

    useEffect(() => {
        if (!sectionRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            },
        });

        tl.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        )
            .fromTo(subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
                '-=0.4'
            )
            .fromTo(cardsRef.current?.children || [],
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.2
                },
                '-=0.3'
            );
    }, []);

    const services = [
        {
            icon: '👁️',
            title: t('diagnosis.title'),
            description: t('diagnosis.description'),
        },
        {
            icon: '👓',
            title: t('selection.title'),
            description: t('selection.description'),
        },
        {
            icon: '🥽',
            title: t('lenses.title'),
            description: t('lenses.description'),
        },
    ];

    return (
        <section
            id="services"
            ref={sectionRef}
            className="py-20 md:py-32 bg-primary-bg"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef}
                        className="font-lora text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text mb-6"
                    >
                        {t('title')}
                    </h2>
                    <p
                        ref={subtitleRef}
                        className="text-lg md:text-xl text-primary-text max-w-2xl mx-auto"
                    >
                        {t('subtitle')}
                    </p>
                </div>

                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-custom p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                        >
                            <div className="text-5xl mb-6">{service.icon}</div>
                            <h3 className="font-lora text-2xl font-bold text-primary-text mb-4">
                                {service.title}
                            </h3>
                            <p className="text-primary-text opacity-80 leading-relaxed mb-6">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href={`/${locale}/services`}
                        className="inline-block bg-primary-accent text-white px-8 py-4 rounded-custom text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Все услуги
                    </Link>
                </div>
            </div>
        </section>
    );
}