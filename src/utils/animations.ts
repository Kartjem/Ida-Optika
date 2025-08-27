'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Регистрируем плагин один раз
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Базовые настройки анимаций
export const ANIMATION_CONFIG = {
    duration: {
        fast: 0.3,
        normal: 0.6,
        slow: 1.0,
    },
    ease: {
        smooth: 'power2.out',
        bounce: 'back.out(1.7)',
        elastic: 'elastic.out(1, 0.3)',
    },
    stagger: {
        fast: 0.1,
        normal: 0.15,
        slow: 0.2,
    }
};

// Переиспользуемые анимации (ОТКЛЮЧЕНЫ)
export const createFadeInUp = (elements: Element[] | Element | null, options = {}) => {
    // Анимации отключены - элементы сразу видимы
    return null;
};

export const createScrollAnimation = (trigger: Element, elements: Element[] | Element, options = {}) => {
    // Анимации отключены - элементы сразу видимы
    return null;
}; export const createHoverAnimation = (element: Element, options = {}) => {
    if (!element) return null;

    const defaults = {
        scale: 1.05,
        y: -5,
        duration: ANIMATION_CONFIG.duration.fast,
        ease: ANIMATION_CONFIG.ease.smooth,
    };

    const config = { ...defaults, ...options };

    element.addEventListener('mouseenter', () => {
        gsap.to(element, {
            scale: config.scale,
            y: config.y,
            duration: config.duration,
            ease: config.ease,
        });
    });

    element.addEventListener('mouseleave', () => {
        gsap.to(element, {
            scale: 1,
            y: 0,
            duration: config.duration,
            ease: config.ease,
        });
    });
};

// Кастомный хук для анимаций
export const useAnimations = () => {
    return {
        fadeInUp: createFadeInUp,
        scrollAnimation: createScrollAnimation,
        hoverAnimation: createHoverAnimation,
        ANIMATION_CONFIG,
    };
};
