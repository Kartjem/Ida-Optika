'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BrandsMarquee from '@/components/BrandsMarquee';
import Team from '@/components/Team';
import GalleryCTA from '@/components/GalleryCTA';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
    useEffect(() => {
        // Добавим плавный скролл через CSS
        document.documentElement.style.scrollBehavior = 'smooth';

        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <main className="overflow-x-hidden">
            <Navigation />
            <Hero />
            <Services />
            <BrandsMarquee />
            <Team />
            <GalleryCTA />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    );
}
