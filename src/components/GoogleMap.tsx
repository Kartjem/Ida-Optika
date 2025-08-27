'use client';


import { useEffect, useRef } from 'react';
import { Map } from 'lucide-react';

interface GoogleMapProps {
    className?: string;
}

export default function GoogleMap({ className = '' }: GoogleMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapRef.current) {
            // Получаем ключ из переменной окружения
            const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY;
            // Координаты Ida Optika (Narva, Tallinna mnt 30b)
            const lat = 59.3780;
            const lng = 28.1921;
            // Формируем src для iframe с ключом
            const src = apiKey
                ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Tallinna+mnt+30b,+Narva,+Estonia&zoom=16&language=ru`
                : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2011.8474738165043!2d28.19077261606439!3d59.37799978166815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36fce6e4dbd7%3A0x1e6a6b6c8a8c8c8c!2sTallinna%20mnt%2030b%2C%2020309%20Narva%2C%20Estonia!5e0!3m2!1sen!2s!4v1699876543210!5m2!1sen!2s';
            const iframe = document.createElement('iframe');
            iframe.src = src;
            iframe.width = '100%';
            iframe.height = '400';
            iframe.style.border = '0';
            iframe.allowFullscreen = true;
            iframe.loading = 'lazy';
            iframe.referrerPolicy = 'no-referrer-when-downgrade';
            iframe.className = 'rounded-custom';
            mapRef.current.innerHTML = '';
            mapRef.current.appendChild(iframe);
        }
    }, []);

    return (
        <div className={`relative ${className}`}>
            <div ref={mapRef} className="w-full h-96 rounded-custom overflow-hidden shadow-lg">
                {/* Fallback while loading */}
                <div className="w-full h-full bg-primary-secondary flex items-center justify-center">
                    <div className="text-primary-text text-center">
                        <Map className="w-8 h-8 mx-auto mb-2 text-primary-accent" />
                        <div>Загрузка карты...</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
