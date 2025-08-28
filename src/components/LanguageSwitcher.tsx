'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

const languages = [
    { code: 'ru', name: 'Русский' },
    { code: 'et', name: 'Eesti' }
];

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const switchLanguage = (newLocale: string) => {
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/');
        router.push(newPath);
        setIsOpen(false);
    };

    const currentLanguage = languages.find(lang => lang.code === currentLocale);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-primary-secondary transition-colors duration-200"
            >
                <span className="text-sm font-medium text-primary-text">
                    {currentLanguage?.code.toUpperCase()}
                </span>
                <svg
                    className={`w-4 h-4 text-primary-text transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
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

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 bg-secondasry border  rounded-lg shadow-lg min-w-[120px] z-50">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => switchLanguage(language.code)}
                            className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-primary-bg transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${currentLocale === language.code ? 'bg-primary-bg' : ''
                                }`}
                        >
                            <span className="text-sm font-medium text-primary-text">
                                {language.name}
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
