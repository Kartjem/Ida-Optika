'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Glasses as GlassesIcon } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Моковые данные для галереи
const glassFrames = [
    {
        id: '1',
        brand: 'Ray-Ban',
        model: 'Aviator Classic',
        image: '',
    },
    {
        id: '2',
        brand: 'Gucci',
        model: 'GG0061S',
        image: '',
    },
    {
        id: '3',
        brand: 'Prada',
        model: 'PR 01VS',
        image: '',
    },
    {
        id: '4',
        brand: 'Oakley',
        model: 'Holbrook',
        image: '',
    },
    {
        id: '5',
        brand: 'Tom Ford',
        model: 'FT5178',
        image: '',
    },
    {
        id: '6',
        brand: 'Persol',
        model: 'PO3166S',
        image: '',
    },
];

export default function GlassesPage() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const locale = useLocale();
    const t = useTranslations('pages.glasses');

    useEffect(() => {
        // Анимация заголовка
        gsap.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.5 }
        );

        gsap.fromTo(subtitleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.7 }
        );

        // Анимация карточек при скролле
        if (gridRef.current) {
            gsap.fromTo(gridRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    }, []);

    return (
        <div className="min-h-screen bg-primary-bg">
            <Navigation />

            {/* Заголовок страницы */}
            <section className="pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1
                        ref={titleRef}
                        className="font-bold text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text mb-6"
                    >
                        {t('title')}
                    </h1>
                    <p
                        ref={subtitleRef}
                        className="text-lg md:text-xl text-primary-text max-w-2xl mx-auto"
                    >
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            {/* Сетка с оправами */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        ref={gridRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {glassFrames.map((frame) => (
                            <div
                                key={frame.id}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-square overflow-hidden rounded-custom bg-gradient-to-br from-primary-secondary to-primary-accent/20">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <GlassesIcon className="w-16 h-16 text-primary-text opacity-40 group-hover:opacity-70 transition-opacity" />
                                    </div>
                                    {/* Оверлей с информацией */}
                                    <div className="absolute inset-0 bg-primary-text/0 group-hover:bg-primary-text/80 transition-all duration-300 flex items-center justify-center">
                                        <div className="text-center text-primary-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <h3 className="font-bold text-2xl font-bold mb-2">
                                                {frame.brand}
                                            </h3>
                                            <p className="text-lg">
                                                {frame.model}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA секция */}
            <section className="py-20 bg-primary-secondary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-bold text-4xl md:text-5xl font-bold text-primary-text mb-6">
                        Понравилась модель?
                    </h2>
                    <p className="text-lg md:text-xl text-primary-text mb-8">
                        Запишитесь на примерку и подберите идеальные очки
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+37235792233"
                            className="inline-block bg-primary-accent text-white px-8 py-4 rounded-custom text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            Позвонить: +372 357 9233
                        </a>
                        <Link
                            href={`/${locale}`}
                            className="inline-block border-2 border-primary-accent text-primary-accent px-8 py-4 rounded-custom text-lg font-semibold hover:bg-primary-accent hover:text-white transition-all duration-300"
                        >
                            {t('back_home')}
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
