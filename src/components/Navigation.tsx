'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const locale = useLocale();
    const t = useTranslations('nav');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: t('home'), href: `/${locale}` },
        { label: t('services'), href: `/${locale}/services` },
        { label: t('about'), href: `/${locale}/about` },
        { label: t('glasses'), href: `/${locale}/glasses` },
        { label: t('contact'), href: `/${locale}/contact` },
    ];

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'glass-effect shadow-lg py-3'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Логотип */}
                        <Link href={`/${locale}`} className="flex items-center space-x-2">
                            <Image
                                src="/favicon/icon.svg"
                                alt="Ida Optika"
                                width={50}
                                height={50}
                                className="w-auto h-12 rounded-lg"
                            />
                            <span className="font-bold text-2xl font-bold text-primary-text brand-name">
                                <span className="ida">IDA</span> <span className="optika">OPTIKA</span>
                            </span>
                        </Link>

                        {/* Десктопная навигация */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-primary-text hover:text-primary-accent transition-colors duration-200 font-medium"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Кнопка языка и запись для десктопа */}
                        <div className="hidden md:flex items-center space-x-4">
                            <LanguageSwitcher />
                            <a
                                href="tel:+37235792233"
                                className="bg-primary-accent text-white px-6 py-3 rounded-custom hover:bg-opacity-90 transition-all duration-200 font-medium"
                            >
                                {t('appointment')}
                            </a>
                        </div>

                        {/* Мобильное меню кнопка */}
                        <div className="md:hidden flex items-center space-x-2">
                            <LanguageSwitcher />
                            <button
                                className="p-2 text-primary-text hover:text-primary-accent transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {isMobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Мобильное выезжающее меню */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                    onClick={closeMobileMenu}
                />

                {/* Выезжающее меню */}
                <div
                    className={`absolute top-0 right-0 h-full w-80 max-w-sm bg-primary-bg shadow-xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex flex-col h-full pt-20">
                        {/* Навигационные ссылки */}
                        <div className="flex-1 py-6 overflow-y-auto">
                            <div className="space-y-2 px-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={closeMobileMenu}
                                        className="block py-4 text-lg font-medium text-primary-text hover:text-primary-accent hover:bg-primary-secondary rounded-lg px-4 transition-all duration-200"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Кнопка записи */}
                        <div className="p-6 border-t border-primary-secondary">
                            <a
                                href="tel:+37235792233"
                                onClick={closeMobileMenu}
                                className="block w-full bg-primary-accent text-white text-center py-4 rounded-custom font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                            >
                                {t('appointment')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
