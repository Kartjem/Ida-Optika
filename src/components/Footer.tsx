'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
    const t = useTranslations();
    const tNav = useTranslations('nav');
    const tFooter = useTranslations('footer');
    const tContact = useTranslations('contact');
    const locale = useLocale();

    const navItems = [
        { label: tNav('home'), href: `/${locale}` },
        { label: tNav('services'), href: `/${locale}/services` },
        { label: tNav('about'), href: `/${locale}/about` },
        { label: tNav('glasses'), href: `/${locale}/glasses` },
        { label: tNav('contact'), href: `/${locale}/contact` },
    ];

    return (
        <footer className="bg-primary-secondary py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Логотип и описание */}
                    <div className="md:col-span-1">
                        <Link href={`/${locale}`} className="flex items-center space-x-2 mb-4">
                            <Image
                                src="/favicon/icon.svg"
                                alt="Ida Optika"
                                width={40}
                                height={40}
                                className="w-auto h-10 rounded-lg"
                            />
                            <span className="font-bold text-xl font-bold text-primary-text brand-name">
                                <span className="ida">IDA</span> <span className="optika">OPTIKA</span>
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
                                    <Link
                                        href={item.href}
                                        className="text-primary-text opacity-80 hover:opacity-100 hover:text-primary-accent transition-colors duration-200"
                                    >
                                        {item.label}
                                    </Link>
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
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
