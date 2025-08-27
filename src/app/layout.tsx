import { Inter, Lora } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-inter',
});

const lora = Lora({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-lora',
});

export const metadata = {
    title: 'Ida Optika - Премиальная оптика в Нарве',
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
        other: [
            { url: '/favicon/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/favicon/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
    },
    manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={`${inter.variable} ${lora.variable}`}>
            <body className="font-inter antialiased" data-theme="alabaster">
                {children}
            </body>
        </html>
    );
}
