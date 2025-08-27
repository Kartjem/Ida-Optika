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

const teamMembers = [
    {
        name: 'Анна Петрова',
        position: 'Главный оптометрист',
        avatar: '👩‍⚕️',
        experience: '15 лет опыта',
        education: 'Магистр оптометрии, Тартуский университет',
        specialization: 'Диагностика и коррекция зрения'
    },
    {
        name: 'Михаил Иванов',
        position: 'Консультант по оправам',
        avatar: '👨‍💼',
        experience: '8 лет опыта',
        education: 'Специалист по оптике',
        specialization: 'Подбор оправ и стилевые консультации'
    },
    {
        name: 'Елена Сидорова',
        position: 'Специалист по контактным линзам',
        avatar: '👩‍🔬',
        experience: '12 лет опыта',
        education: 'Бакалавр офтальмологии',
        specialization: 'Контактная коррекция зрения'
    }
];

const achievements = [
    { number: '1000+', label: 'Довольных клиентов' },
    { number: '10+', label: 'Лет опыта' },
    { number: '50+', label: 'Брендов очков' },
    { number: '24/7', label: 'Поддержка клиентов' }
];

export default function AboutPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const storyRef = useRef<HTMLDivElement>(null);
    const teamRef = useRef<HTMLDivElement>(null);
    const achievementsRef = useRef<HTMLDivElement>(null);
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

        // Анимация истории
        if (storyRef.current) {
            gsap.fromTo(storyRef.current.children,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power2.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: storyRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }

        // Анимация команды
        if (teamRef.current) {
            gsap.fromTo(teamRef.current.children,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: teamRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }

        // Анимация достижений
        if (achievementsRef.current) {
            gsap.fromTo(achievementsRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: achievementsRef.current,
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
                            {t('pages.about.title')}
                        </h1>
                        <p className="text-lg md:text-xl text-primary-text max-w-3xl mx-auto">
                            {t('pages.about.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* История компании */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div ref={storyRef}>
                            <h2 className="font-lora text-4xl md:text-5xl font-bold text-primary-text mb-6">
                                {t('pages.about.story_title')}
                            </h2>
                            <div className="space-y-4 text-primary-text leading-relaxed">
                                <p>
                                    Ida Optika была основана в 2008 году с простой миссией — предоставить
                                    жителям Нарвы доступ к качественным оптическим услугам и современным
                                    технологиям диагностики зрения.
                                </p>
                                <p>
                                    За годы работы мы стали trusted партнером для тысяч клиентов,
                                    помогая им найти идеальное решение для коррекции зрения. Наша команда
                                    постоянно повышает квалификацию и следит за новейшими тенденциями
                                    в области оптометрии.
                                </p>
                                <p>
                                    Сегодня Ida Optika — это современный оптический центр,
                                    оснащенный новейшим оборудованием и предлагающий широкий выбор
                                    премиальных брендов очков и контактных линз.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-primary-secondary to-primary-accent rounded-custom shadow-lg flex items-center justify-center">
                                <div className="text-center text-primary-text">
                                    <div className="text-6xl mb-4">👓</div>
                                    <p className="text-lg font-semibold">Ida Optika</p>
                                    <p className="text-sm opacity-70">Современная оптика в Нарве</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Достижения */}
            <section className="py-20 bg-primary-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-lora text-4xl md:text-5xl font-bold text-primary-text text-center mb-16">
                        {t('pages.about.achievements_title')}
                    </h2>
                    <div
                        ref={achievementsRef}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {achievements.map((achievement, index) => (
                            <div key={index} className="text-center">
                                <div className="font-lora text-4xl md:text-5xl font-bold text-primary-accent mb-2">
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

            {/* Команда */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-lora text-4xl md:text-5xl font-bold text-primary-text text-center mb-16">
                        Наша команда
                    </h2>
                    <div
                        ref={teamRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                    >
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-custom p-8 shadow-lg text-center"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full bg-primary-secondary flex items-center justify-center">
                                    <span className="text-6xl">{member.avatar}</span>
                                </div>
                                <h3 className="font-lora text-2xl font-bold text-primary-text mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-primary-accent text-lg font-medium mb-3">
                                    {member.position}
                                </p>
                                <div className="space-y-2 text-sm text-primary-text opacity-80">
                                    <p><strong>Опыт:</strong> {member.experience}</p>
                                    <p><strong>Образование:</strong> {member.education}</p>
                                    <p><strong>Специализация:</strong> {member.specialization}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA секция */}
            <section className="py-20 bg-primary-text text-primary-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-lora text-4xl md:text-5xl font-bold mb-6">
                        Присоединяйтесь к нашей семье
                    </h2>
                    <p className="text-lg md:text-xl mb-8 opacity-90">
                        Позвольте нашей команде профессионалов позаботиться о вашем зрении
                    </p>
                    <a
                        href="tel:+37235792233"
                        className="inline-block bg-primary-accent text-white px-8 py-4 rounded-custom text-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Записаться на консультацию
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
