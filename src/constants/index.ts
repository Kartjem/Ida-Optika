import { Eye, Glasses, Shield, UserCheck, Phone, MapPin, Building2, Clock, Car, Bus } from 'lucide-react';
import { Service, TeamMember } from '@/types';

// Услуги
export const SERVICES: Service[] = [
    {
        icon: Eye,
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
        icon: Glasses,
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
        icon: Shield,
        title: 'Профессиональное обслуживание',
        description: 'Качественный сервис и послепродажное обслуживание очков',
        features: [
            'Настройка и ремонт оправ',
            'Замена линз',
            'Чистка и уход',
            'Гарантийное обслуживание'
        ]
    }
];



// Контактные методы (компоненты иконок)
export const CONTACT_ICONS = {
    Phone,
    MapPin,
    Building2,
    Clock,
    Car,
    Bus,
};

// Информация о местоположении
export const LOCATION_INFO = [
    {
        icon: 'MapPin',
        text: 'Tallinna mnt 30b, Narva, Estonia'
    },
    {
        icon: 'Building2',
        text: 'Внутри торгового центра Coop'
    },
    {
        icon: 'Car',
        text: 'Бесплатная парковка у торгового центра'
    },
    {
        icon: 'Bus',
        text: 'Остановка общественного транспорта рядом'
    }
];

// Навигация
export const NAVIGATION_ITEMS = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О нас' },
    { href: '/services', label: 'Услуги' },
    { href: '/glasses', label: 'Очки' },
    { href: '/contact', label: 'Контакты' },
];

export const VANTA_COLORS = {
    hero: 0x4F46E5,
};
