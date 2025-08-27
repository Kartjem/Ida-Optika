'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);

    const t = useTranslations('faq');
    const questions = t.raw('questions') as Array<{ question: string; answer: string }>;

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
            .fromTo(faqRef.current?.children || [],
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.1
                },
                '-=0.4'
            );
    }, []);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            ref={sectionRef}
            className="py-20 md:py-32 bg-primary-bg"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    ref={titleRef}
                    className="font-lora text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text text-center mb-16"
                >
                    {t('title')}
                </h2>

                <div ref={faqRef} className="space-y-4">
                    {questions.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-primary-secondary rounded-custom overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-opacity-80 transition-colors duration-200"
                            >
                                <span className="font-semibold text-primary-text text-lg">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 text-primary-accent transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-4">
                                    <p className="text-primary-text leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
