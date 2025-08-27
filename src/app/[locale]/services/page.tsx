'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const services = [
    {
        icon: '👁️',
        title: 'Комплексная диагностика зрения',
        description: 'Современные методы обследования с использованием новейшего оборудования',
        features: [
            'Проверка остроты зрения',
            'Измерение внутриглазного давления',
            'Исследование глазного дна',
            'Компьютерная периметрия'
        ]
    },
    {
        icon: '👓',
        title: 'Персональный подбор очков',
        description: 'Индивидуальный подход к каждому клиенту с учетом особенностей лица и стиля',
        features: [
            'Подбор по форме лица',
            'Консультация по стилю',
            'Примерка различных моделей',
            'Рекомендации по уходу'
        ]
    },
    {
        icon: '🥽',
        title: 'Контактные линзы',
        description: 'Широкий выбор контактных линз от ведущих производителей',
        features: [
            'Однодневные линзы',
            'Месячные линзы',
            'Цветные линзы',
            'Обучение использованию'
        ]
    },
    {
        icon: '🔧',
        title: 'Ремонт и обслуживание',
        description: 'Профессиональный ремонт и настройка очков',
        features: [
            'Замена линз',
            'Ремонт оправ',
            'Регулировка посадки',
            'Чистка и полировка'
        ]
    },
    {
        icon: '🏥',
        title: 'Консультации специалистов',
        description: 'Экспертные консультации по вопросам здоровья глаз',
        features: [
            'Профилактические осмотры',
            'Консультации офтальмолога',
            'Рекомендации по уходу за глазами',
            'Диагностика заболеваний'
        ]
    },
    {
        icon: '👶',
        title: 'Детская оптометрия',
        description: 'Специализированные услуги для самых маленьких пациентов',
        features: [
            'Проверка зрения у детей',
            'Детские оправы',
            'Игровой подход к диагностике',
            'Консультации для родителей'
        ]
    }
];

export default function ServicesPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
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

        // Анимация карточек услуг
        if (servicesRef.current) {
            gsap.fromTo(servicesRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: servicesRef.current,
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

            {/* Hero секция */}
            <section className="pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={heroRef} className="text-center">
                        <h1 className="font-lora text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text mb-6">
                            Наши услуги
                        </h1>
                        <p className="text-lg md:text-xl text-primary-text max-w-3xl mx-auto">
                            Полный спектр оптометрических услуг с использованием современного оборудования
                            и индивидуальным подходом к каждому клиенту
                        </p>
                    </div>
                </div>
            </section>

            {/* Услуги */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        ref={servicesRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-custom p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="font-lora text-2xl font-bold text-primary-text mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-primary-text opacity-80 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-center text-primary-text opacity-70"
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
            <section className="py-20 bg-primary-secondary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-lora text-4xl md:text-5xl font-bold text-primary-text mb-6">
                        Готовы записаться на прием?
                    </h2>
                    <p className="text-lg md:text-xl text-primary-text mb-8">
                        Свяжитесь с нами для консультации и подбора идеального решения для вашего зрения
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+37235792233"
                            className="inline-block bg-primary-accent text-white px-8 py-4 rounded-custom text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            Позвонить: +372 357 9233
                        </a>
                        <a
                            href="mailto:info@idaoptika.ee"
                            className="inline-block border-2 border-primary-accent text-primary-accent px-8 py-4 rounded-custom text-lg font-semibold hover:bg-primary-accent hover:text-white transition-all duration-300"
                        >
                            Написать email
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
