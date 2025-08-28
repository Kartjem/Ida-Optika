'use client';

import { useEffect, useRef } from 'react';
import { VANTA_COLORS } from '@/constants';

interface VantaWavesProps {
    className?: string;
    children?: React.ReactNode;
}

declare global {
    interface Window {
        VANTA: any;
        THREE: any;
    }
}

export default function VantaWaves({ className = '', children }: VantaWavesProps) {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffect = useRef<any>(null);

    useEffect(() => {
        let isMounted = true;

        const loadScripts = () => {
            return new Promise<void>((resolve, reject) => {
                // Проверяем, загружены ли уже скрипты
                if (window.THREE && window.VANTA) {
                    resolve();
                    return;
                }

                // Загружаем Three.js
                if (!window.THREE) {
                    const threeScript = document.createElement('script');
                    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
                    threeScript.onload = () => {
                        console.log('Three.js loaded');
                        // Загружаем Vanta Waves
                        const vantaScript = document.createElement('script');
                        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js';
                        vantaScript.onload = () => {
                            console.log('Vanta Waves loaded');
                            resolve();
                        };
                        vantaScript.onerror = reject;
                        document.head.appendChild(vantaScript);
                    };
                    threeScript.onerror = reject;
                    document.head.appendChild(threeScript);
                } else if (!window.VANTA) {
                    const vantaScript = document.createElement('script');
                    vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js';
                    vantaScript.onload = () => {
                        console.log('Vanta Waves loaded');
                        resolve();
                    };
                    vantaScript.onerror = reject;
                    document.head.appendChild(vantaScript);
                } else {
                    resolve();
                }
            });
        };

        const getVariantConfig = () => {
            return {
                color: VANTA_COLORS.hero,
                shininess: 0.00,        // Полностью убираем блеск
                waveHeight: 10.00,      // Нормальная высота волн
                waveSpeed: 0.5,         // Медленное движение
            };
        };

        const initVanta = async () => {
            try {
                await loadScripts();

                if (!isMounted || !vantaRef.current || vantaEffect.current) return;

                console.log('Initializing VANTA effect...');

                if (window.VANTA && window.VANTA.WAVES) {
                    const config = getVariantConfig();

                    vantaEffect.current = window.VANTA.WAVES({
                        el: vantaRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        ...config
                    });

                    console.log('VANTA effect created:', vantaEffect.current);
                } else {
                    console.error('VANTA.WAVES not available');
                }
            } catch (error) {
                console.error('Error initializing Vanta:', error);
            }
        };

        // Небольшая задержка для рендеринга компонента
        const timer = setTimeout(initVanta);

        return () => {
            isMounted = false;
            clearTimeout(timer);
            if (vantaEffect.current) {
                try {
                    vantaEffect.current.destroy();
                } catch (error) {
                    console.error('Error destroying Vanta effect:', error);
                }
                vantaEffect.current = null;
            }
        };
    }, []);

    return (
        <div
            ref={vantaRef}
            className={`relative w-full h-full ${className}`}
            style={{
                minHeight: '100vh',
                width: '100%',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
