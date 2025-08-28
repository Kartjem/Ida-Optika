'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MapPin, Building2, Clock, Car, Bus } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GoogleMap from '@/components/GoogleMap';
import VantaWaves from '@/components/VantaWavesUniversal';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const contactMethods = [
    {
        icon: <Phone className="w-8 h-8" />,
        title: 'Телефон',
        primary: '+372 357 9233',
        secondary: 'Звоните в рабочее время',
        action: 'tel:+37235792233'
    },
    {
        icon: <MapPin className="w-8 h-8" />,
        title: 'Адрес',
        primary: 'Tallinna mnt 30b, Narva',
        secondary: 'Внутри торгового центра Coop',
        action: 'https://maps.google.com/?q=Tallinna+mnt+30b,+Narva'
    },
    {
        icon: <Building2 className="w-8 h-8" />,
        title: 'Расположение',
        primary: 'Торговый центр Coop',
        secondary: 'Первый этаж, секция оптики',
        action: null
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: 'Рабочие часы',
        primary: 'Пн-Пт: 10:00-18:00',
        secondary: 'Сб: 10:00-15:00, Вс: Выходной',
        action: null
    }
];

export default function ContactPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);
    const t = useTranslations();

    useEffect(() => {
        // Анимация заголовка
        gsap.fromTo(heroRef.current?.children || [],
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                delay: 0.5,
                stagger: 0.2
            }
        );

        // Анимация контактов
        // if (contactRef.current) {
        //     gsap.fromTo(contactRef.current.children,
        //         { opacity: 0, y: 30 },
        //         {
        //             opacity: 1,
        //             y: 0,
        //             duration: 0.8,
        //             ease: 'power2.out',
        //             stagger: 0.1,
        //             scrollTrigger: {
        //                 trigger: contactRef.current,
        //                 start: 'top 80%',
        //                 end: 'bottom 20%',
        //                 toggleActions: 'play none none reverse',
        //             },
        //         }
        //     );
        // }
    }, []);

    return (
        <VantaWaves className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <Navigation />

            {/* Hero секция */}
            <section className="relative pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={heroRef} className="text-center">
                        <h1 className="font-lora text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-text mb-6">
                            Контакты
                        </h1>
                        <p className="text-lg md:text-xl text-secondary-text max-w-3xl mx-auto">
                            Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить
                            на ваши вопросы и помочь с выбором оптических решений
                        </p>
                    </div>
                </div>
            </section>

            {/* Контактная информация */}
            <section className="relative py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-lora text-3xl md:text-4xl font-bold text-secondary-text text-center mb-12">
                        Контактная информация
                    </h2>
                    <div
                        ref={contactRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="bg-primary-secondary/80 backdrop-blur-sm rounded-custom p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-accent/20 hover:border-primary-accent/40"
                            >
                                <div className="text-primary-accent mb-4 flex justify-center">{method.icon}</div>
                                <h3 className="font-lora text-xl font-bold text-secondary-text mb-3">
                                    {method.title}
                                </h3>
                                {method.action ? (
                                    <a
                                        href={method.action}
                                        className="block"
                                        target={method.action.startsWith('http') ? '_blank' : undefined}
                                        rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        <p className="text-primary-accent font-semibold mb-2 hover:underline">
                                            {method.primary}
                                        </p>
                                        <p className="text-secondary-text/80 text-sm">
                                            {method.secondary}
                                        </p>
                                    </a>
                                ) : (
                                    <>
                                        <p className="text-primary-accent font-semibold mb-2">
                                            {method.primary}
                                        </p>
                                        <p className="text-secondary-text/80 text-sm">
                                            {method.secondary}
                                        </p>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Google карта */}
            <section className="relative py-20 bg-primary-secondary/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-lora text-3xl md:text-4xl font-bold text-secondary-text text-center mb-12">
                        Как нас найти
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <GoogleMap className="w-full" />
                        <div className="space-y-6 text-secondary-text">
                            <div className="bg-primary-secondary/80 rounded-custom p-6 shadow-lg">
                                <h3 className="font-lora text-xl font-bold text-secondary-text mb-4">
                                    Удобное расположение
                                </h3>
                                <ul className="space-y-3 text-secondary-text">
                                    <li className="flex items-start">
                                        <MapPin className="text-primary-accent mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                                        <span>Tallinna mnt 30b, Narva, Estonia</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Building2 className="text-primary-accent mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                                        <span>Внутри торгового центра Coop</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Car className="text-primary-accent mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                                        <span>Бесплатная парковка у торгового центра</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Bus className="text-primary-accent mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                                        <span>Остановка общественного транспорта рядом</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-primary-secondary/80 rounded-custom p-6 shadow-lg">
                                <h3 className="font-lora text-xl font-bold text-secondary-text mb-4">
                                    Ориентиры
                                </h3>
                                <ul className="space-y-2 text-secondary-text text-sm">
                                    <li>Рядом с главным входом</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <Footer />
        </VantaWaves>
    );
}