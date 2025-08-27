'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserCheck, Glasses } from 'lucide-react';
import VantaWaves from './VantaWavesUniversal';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
    {
        name: 'Kristina Kulikovskaja',
        position: 'Главный оптометрист',
        icon: UserCheck,
    },
    {
        name: 'Inna Annina',
        position: 'Консультант по оправам',
        icon: Glasses,
    },
];

export default function Team() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    const t = useTranslations('team');

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
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.2
                },
                '-=0.3'
            );
    }, []);

    return (
        <VantaWaves variant="subtle">
            <section
                id="about"
                ref={sectionRef}
                className="relative py-20 md:py-32 bg-primary-bg"
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
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
                    >
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="text-center group"
                            >
                                <div className="relative w-64 h-64 mx-auto mb-6 rounded-custom overflow-hidden bg-primary-secondary flex items-center justify-center">
                                    <member.icon className="w-24 h-24 text-primary-accent" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-text/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <h3 className="font-lora text-2xl font-semibold text-primary-text mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-primary-accent text-lg">
                                    {member.position}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </VantaWaves>
    );
}
