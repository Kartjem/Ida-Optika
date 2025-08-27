'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GoogleMap from '@/components/GoogleMap';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const contactMethods = [
    {
        icon: '📞',
        title: 'Телефон',
        primary: '+372 357 9233',
        secondary: 'Звоните в рабочее время',
        action: 'tel:+37235792233'
    },
    {
        icon: '📍',
        title: 'Адрес',
        primary: 'Tallinna mnt 30b, Narva',
        secondary: 'Внутри торгового центра Coop',
        action: 'https://maps.google.com/?q=Tallinna+mnt+30b,+Narva'
    },
    {
        icon: '🏢',
        title: 'Расположение',
        primary: 'Торговый центр Coop',
        secondary: 'Первый этаж, секция оптики',
        action: null
    },
    {
        icon: '🕒',
        title: 'Рабочие часы',
        primary: 'Пн-Пт: 10:00-18:00',
        secondary: 'Сб: 10:00-15:00, Вс: Выходной',
        action: null
    }
];

const faqItems = [
    {
        question: 'Нужна ли предварительная запись?',
        answer: 'Да, мы работаем по предварительной записи. Это позволяет нам уделить каждому клиенту достаточно времени и внимания.'
    },
    {
        question: 'Сколько времени занимает проверка зрения?',
        answer: 'Комплексная проверка зрения обычно занимает 30-45 минут, в зависимости от сложности случая.'
    },
    {
        question: 'Есть ли возможность оплаты картой?',
        answer: 'Да, мы принимаем все основные банковские карты, а также наличные.'
    },
    {
        question: 'Предоставляете ли вы гарантию на очки?',
        answer: 'На все наши изделия распространяется гарантия производителя. Дополнительно мы предоставляем бесплатную настройку и мелкий ремонт в течение года.'
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
        if (contactRef.current) {
            gsap.fromTo(contactRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: contactRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }

        // Анимация FAQ
        if (faqRef.current) {
            gsap.fromTo(faqRef.current.children,
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: faqRef.current,
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
                            Контакты
                        </h1>
                        <p className="text-lg md:text-xl text-primary-text max-w-3xl mx-auto">
                            Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить
                            на ваши вопросы и помочь с выбором оптических решений
                        </p>
                    </div>
                </div>
            </section>

            {/* Контактная информация */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-lora text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
                        Контактная информация
                    </h2>
                    <div
                        ref={contactRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-custom p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="text-4xl mb-4">{method.icon}</div>
                                <h3 className="font-lora text-xl font-bold text-primary-text mb-3">
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
                                        <p className="text-primary-text opacity-70 text-sm">
                                            {method.secondary}
                                        </p>
                                    </a>
                                ) : (
                                    <>
                                        <p className="text-primary-accent font-semibold mb-2">
                                            {method.primary}
                                        </p>
                                        <p className="text-primary-text opacity-70 text-sm">
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
            <section className="py-20 bg-primary-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-lora text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
                        Как нас найти
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <GoogleMap className="w-full" />
                        <div className="space-y-6">
                            <div className="bg-white rounded-custom p-6 shadow-lg">
                                <h3 className="font-lora text-xl font-bold text-primary-text mb-4">
                                    Удобное расположение
                                </h3>
                                <ul className="space-y-3 text-primary-text">
                                    <li className="flex items-start">
                                        <span className="text-primary-accent mr-3">📍</span>
                                        <span>Tallinna mnt 30b, Narva, Estonia</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary-accent mr-3">🏢</span>
                                        <span>Внутри торгового центра Coop</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary-accent mr-3">🚗</span>
                                        <span>Бесплатная парковка у торгового центра</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary-accent mr-3">🚌</span>
                                        <span>Остановка общественного транспорта рядом</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-custom p-6 shadow-lg">
                                <h3 className="font-lora text-xl font-bold text-primary-text mb-4">
                                    Ориентиры
                                </h3>
                                <ul className="space-y-2 text-primary-text text-sm">
                                    <li>• Рядом с главным входом</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-lora text-3xl md:text-4xl font-bold text-primary-text text-center mb-12">
                        Часто задаваемые вопросы
                    </h2>
                    <div ref={faqRef} className="space-y-6">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-custom p-6 shadow-lg"
                            >
                                <h3 className="font-lora text-xl font-bold text-primary-text mb-3">
                                    {item.question}
                                </h3>
                                <p className="text-primary-text opacity-80 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA секция */}
            <section className="py-20 bg-primary-text text-primary-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-lora text-4xl md:text-5xl font-bold mb-6">
                        Готовы улучшить своё зрение?
                    </h2>
                    <p className="text-lg md:text-xl mb-8 opacity-90">
                        Свяжитесь с нами прямо сейчас для консультации и записи на приём
                    </p>
                    <a
                        href="tel:+37235792233"
                        className="inline-block bg-primary-accent text-white px-8 py-4 rounded-custom text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Позвонить сейчас
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}