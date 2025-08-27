'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const t = useTranslations();
    const tNav = useTranslations('nav');
    const tFooter = useTranslations('footer');
    const tContact = useTranslations('contact');

    const navItems = [
        { label: tNav('services'), href: '#services' },
        { label: tNav('about'), href: '#about' },
        { label: tNav('glasses'), href: '/glasses' },
        { label: tNav('contact'), href: '#contact' },
    ];

    const handleNavClick = (href: string) => {
        if (href.startsWith('#')) {
            const element = document.getElementById(href.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="bg-primary-secondary py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Логотип и описание */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Image
                                src="/favicon/favicon-96x96.png"
                                alt="Ida Optika"
                                width={40}
                                height={40}
                                className="w-auto h-10 rounded-lg"
                            />
                            <span className="font-lora text-xl font-bold text-primary-text">
                                Ida Optika
                            </span>
                        </Link>
                        <p className="text-primary-text opacity-80 leading-relaxed">
                            {tFooter('description')}
                        </p>
                    </div>

                    {/* Навигация */}
                    <div className="md:col-span-1">
                        <h3 className="font-semibold text-primary-text text-lg mb-4">
                            Навигация
                        </h3>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <button
                                        onClick={() => handleNavClick(item.href)}
                                        className="text-primary-text opacity-80 hover:opacity-100 hover:text-primary-accent transition-colors duration-200"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Контакты */}
                    <div className="md:col-span-1">
                        <h3 className="font-semibold text-primary-text text-lg mb-4">
                            Контакты
                        </h3>
                        <div className="space-y-2 text-primary-text opacity-80">
                            <p>{tContact('address')}</p>
                            <a
                                href="tel:+37235792233"
                                className="block hover:text-primary-accent transition-colors duration-200"
                            >
                                +372 357 9233
                            </a>
                            <a
                                href="mailto:info@idaoptika.ee"
                                className="block hover:text-primary-accent transition-colors duration-200"
                            >
                                info@idaoptika.ee
                            </a>
                        </div>
                    </div>

                    {/* Часы работы */}
                    <div className="md:col-span-1">
                        <h3 className="font-semibold text-primary-text text-lg mb-4">
                            {tContact('hours')}
                        </h3>
                        <div className="space-y-1 text-primary-text opacity-80">
                            <p>{tContact('weekdays')}</p>
                            <p>{tContact('saturday')}</p>
                            <p>{tContact('sunday')}</p>
                        </div>
                    </div>
                </div>

                {/* Разделитель и копирайт */}
                <div className="border-t border-primary-text border-opacity-20 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-primary-text opacity-60 text-sm">
                            {tFooter('copyright')}
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            {/* Ссылки на социальные сети (если нужны) */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
