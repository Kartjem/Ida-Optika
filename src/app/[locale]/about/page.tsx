'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserCheck, Glasses } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
    {
        name: 'Кристина Куликовская',
        position: 'Главный оптометрист',
        icon: UserCheck,
        experience: '15 лет опыта',
    },
    {
        name: 'Инна Аннина',
        position: 'Консультант по оправам',
        icon: Glasses,
        experience: '8 лет опыта',
    }
];

const achievements = [
    { number: '1000+', label: 'Довольных клиентов' },
    { number: '10+', label: 'Лет опыта' },
    { number: '50+', label: 'Брендов очков' },
];

export default function AboutPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const storyRef = useRef<HTMLDivElement>(null);
    const teamRef = useRef<HTMLDivElement>(null);
    const achievementsRef = useRef<HTMLDivElement>(null);
    const t = useTranslations();

    useEffect(() => {
        // Анимации отключены
    }, []);

    return (
        <div className="min-h-screen bg-primary-bg">
            <Navigation />

            {/* Hero секция */}
            <section className="relative pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={heroRef} className="text-center">
                        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text mb-6">
                            {t('pages.about.title')}
                        </h1>
                        <p className="text-lg md:text-xl text-primary-text max-w-3xl mx-auto">
                            {t('pages.about.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* История компании */}
            <section className="relative py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div ref={storyRef}>
                            <h2 className="font-bold text-4xl md:text-5xl font-bold text-primary-text mb-6">
                                {t('pages.about.story_title')}
                            </h2>
                            <div className="space-y-4 text-primary-text leading-relaxed">
                                <p>
                                    <span className="text-red-600 font-bold">Ida</span> <span className="text-primary-text font-bold">Optika</span> была основана в 2012 году с простой миссией — предоставить
                                    жителям Нарвы доступ к качественным оптическим услугам и современным
                                    технологиям диагностики зрения.
                                </p>
                                <p>
                                    За годы работы мы стали партнером для тысяч клиентов,
                                    помогая им найти идеальное решение для коррекции зрения. Наша команда
                                    постоянно повышает квалификацию и следит за новейшими тенденциями
                                    в области оптометрии.
                                </p>
                                <p>
                                    Сегодня <span className="text-red-600 font-bold">Ida</span> <span className="text-primary-text font-bold">Optika</span> — это современный оптический центр,
                                    предлагающий широкий выбор
                                    премиальных брендов очков и контактных линз.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-primary-secondary to-primary-accent rounded-custom shadow-lg flex items-center justify-center">
                                <div className="text-center text-primary-text">
                                    <img
                                        src="/favicon/icon.svg"
                                        alt="Ida Optika Logo"
                                        className="w-auto h-auto "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Достижения */}
            <section className="relative py-20 bg-primary-secondary/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-bold text-4xl md:text-5xl font-bold text-primary-text text-center mb-16">
                        {t('pages.about.achievements_title')}
                    </h2>
                    <div
                        ref={achievementsRef}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"
                    >
                        {achievements.map((achievement, index) => (
                            <div key={index} className="text-center">
                                <div className="font-bold text-4xl md:text-5xl font-bold text-primary-accent mb-2">
                                    {achievement.number}
                                </div>
                                <div className="text-primary-text font-medium">
                                    {achievement.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
