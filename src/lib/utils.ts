import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const contactInfo = {
    phone: '+372 357 9233',
    email: 'info@idaoptika.ee',
    address: 'Tallinna mnt 30b, Narva',
    hours: {
        weekdays: '10:00-18:00',
        saturday: '10:00-15:00',
        sunday: 'Выходной'
    }
};

export const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};
