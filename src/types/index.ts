export interface NavItem {
    label: string;
    href: string;
}

export interface Service {
    title: string;
    description: string;
    icon: string;
}

export interface TeamMember {
    name: string;
    position: string;
    image: string;
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
    email?: string;
    address: string;
    hours: {
        weekdays: string;
        saturday: string;
        sunday: string;
    };
}

export type Locale = 'ru' | 'et';
