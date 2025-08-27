'use client';

import Image from 'next/image';
import VantaWaves from './VantaWavesUniversal';

const brands = [
    { name: 'Ray-Ban', logo: '/assets/images/brand-logos/ray-ban.svg' },
    { name: 'Gucci', logo: '/assets/images/brand-logos/gucci.svg' },
    { name: 'Prada', logo: '/assets/images/brand-logos/prada.svg' },
    { name: 'Oakley', logo: '/assets/images/brand-logos/oakley.svg' },
    { name: 'Tom Ford', logo: '/assets/images/brand-logos/tom-ford.svg' },
    { name: 'Persol', logo: '/assets/images/brand-logos/persol.svg' },
];

export default function BrandsMarquee() {
    return (
        <VantaWaves variant="subtle">
            <section className="relative py-16 bg-primary-bg overflow-hidden">
                <div className="flex whitespace-nowrap">
                    {/* Первый набор логотипов */}
                    <div className="flex items-center animate-marquee">
                        {brands.map((brand, index) => (
                            <div
                                key={`first-${index}`}
                                className="flex items-center justify-center mx-12 grayscale hover:grayscale-0 transition-all duration-300"
                            >
                                <div className="w-32 h-16 flex items-center justify-center">
                                    <span className="text-primary-text text-2xl font-semibold opacity-60 hover:opacity-100 transition-opacity duration-300">
                                        {brand.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Дублированный набор для бесшовной анимации */}
                    <div className="flex items-center animate-marquee">
                        {brands.map((brand, index) => (
                            <div
                                key={`second-${index}`}
                                className="flex items-center justify-center mx-12 grayscale hover:grayscale-0 transition-all duration-300"
                            >
                                <div className="w-32 h-16 flex items-center justify-center">
                                    <span className="text-primary-text text-2xl font-semibold opacity-60 hover:opacity-100 transition-opacity duration-300">
                                        {brand.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </VantaWaves>
    );
}
