'use client';

import { useEffect, useRef } from 'react';

interface GoogleMapProps {
    className?: string;
}

export default function GoogleMap({ className = '' }: GoogleMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Создаем iframe с Google Maps
        if (mapRef.current) {
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2011.8474738165043!2d28.19077261606439!3d59.37799978166815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36fce6e4dbd7%3A0x1e6a6b6c8a8c8c8c!2sTallinna%20mnt%2030b%2C%2020309%20Narva%2C%20Estonia!5e0!3m2!1sen!2s!4v1699876543210!5m2!1sen!2s';
            iframe.width = '100%';
            iframe.height = '400';
            iframe.style.border = '0';
            iframe.allowFullscreen = true;
            iframe.loading = 'lazy';
            iframe.referrerPolicy = 'no-referrer-when-downgrade';
            iframe.className = 'rounded-custom';

            mapRef.current.appendChild(iframe);
        }
    }, []);

    return (
        <div className={`relative ${className}`}>
            <div ref={mapRef} className="w-full h-96 rounded-custom overflow-hidden shadow-lg">
                {/* Fallback while loading */}
                <div className="w-full h-full bg-primary-secondary flex items-center justify-center">
                    <div className="text-primary-text text-center">
                        <div className="text-2xl mb-2">🗺️</div>
                        <div>Загрузка карты...</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
