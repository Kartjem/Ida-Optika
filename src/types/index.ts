// Компоненты
export interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
}

// Навигация
export interface NavItem {
    label: string;
    href: string;
}

// VantaWaves
export interface VantaWavesProps extends BaseComponentProps {
    variant?: 'hero' | 'page' | 'subtle';
}

// Услуги
export interface Service {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    features: string[];
}

// Команда
export interface TeamMember {
    name: string;
    position: string;
    icon: React.ComponentType<any>;
    experience?: string;
    image?: string;
}

// Контакты
export interface ContactMethod {
    icon: React.ReactNode;
    title: string;
    primary: string;
    secondary: string;
    action: string | null;
}

// Достижения
export interface Achievement {
    title: string;
    value: string;
    description: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface GlassFrame {
    id: string;
    brand: string;
    model: string;
    image: string;
    price?: number;
}

export interface ContactInfo {
    phone: string;
    address: string;
    hours: {
        weekdays: string;
        saturday: string;
        sunday: string;
    };
}

export type Locale = 'ru' | 'et';
