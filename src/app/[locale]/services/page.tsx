'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import VantaWaves from '@/components/VantaWavesUniversal';
import { SERVICES } from '@/constants';

export default function ServicesPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const t = useTranslations();

    // Анимации отключены по запросу пользователя

    return (
        <VantaWaves className="min-h-screen bg-primary-bg">
            <Navigation />

            {/* Hero секция */}
            <section className="relative pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={heroRef} className="text-center">
                        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text mb-6">
                            Наши услуги
                        </h1>
                        <p className="text-lg md:text-xl text-primary-text max-w-3xl mx-auto">
                            Профессиональные оптические услуги и современное оборудование для диагностики зрения
                        </p>
                    </div>
                </div>
            </section>

            {/* Услуги */}
            <section className="relative py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        ref={servicesRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto"
                    >
                        {SERVICES.map((service, index) => (
                            <div
                                key={index}
                                className="bg-primary-secondary/80 backdrop-blur-sm rounded-custom p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-accent/20 hover:border-primary-accent/40 w-full max-w-sm"
                            >
                                <service.icon className="w-12 h-12 mb-4 text-primary-accent" />
                                <h3 className="font-bold text-2xl font-bold text-primary-text mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-primary-text/90 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-center text-primary-text/80"
                                        >
                                            <svg
                                                className="w-4 h-4 text-primary-accent mr-3 flex-shrink-0"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA секция */}
            <section className="relative py-20 bg-primary-secondary/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div ref={ctaRef}>
                        <h2 className="font-bold text-4xl md:text-5xl font-bold text-primary-text mb-6">
                            Записаться на прием
                        </h2>
                        <p className="text-lg md:text-xl text-primary-text mb-8 max-w-2xl mx-auto">
                            Свяжитесь с нами,    чтобы записаться на консультацию или диагностику зрения
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-primary-accent text-white px-8 py-4 rounded-custom font-semibold hover:bg-primary-accent/90 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            Связаться с нами
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </VantaWaves>
    );
}
