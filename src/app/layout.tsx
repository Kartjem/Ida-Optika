import { Inter, Lora } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-inter',
});

const lora = Lora({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-bold',
});

export const metadata = {
    title: 'Ida Optika',
    description: 'Ida Optika - ваши эксперты по здоровью и стилю зрения в Нарве. Персональный подбор очков, диагностика зрения, контактные линзы.',
    icons: {
        icon: [
            { url: '/favicon/favicon.ico', sizes: 'any' },
            { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
        ],
        apple: [
            { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ],
        shortcut: '/favicon/favicon.ico'
    },
    manifest: '/favicon/site.webmanifest'
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#1a1a1a'
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={`${inter.variable} ${lora.variable}`}>
            <body className="font-inter antialiased" data-theme="graphite_dark">
                <SmoothScroll />
                {children}
            </body>
        </html>
    );
}
