import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CookieBanner } from '@/components/ui/CookieBanner';
import { PWAInstallPrompt } from '@/components/ui/PWAInstallPrompt';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { CONTACT_INFO } from '@/lib/config/contact';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://elpeluperro.com'),
  title: {
    default: 'El Peluperro - Peluquería Canina Móvil en Sevilla',
    template: '%s | El Peluperro',
  },
  description:
    'Peluquería canina móvil en Alcalá de Guadaíra y Sevilla. Servicios profesionales de baño, peluquería y antiparasitarios para tu mascota. Nos desplazamos a tu domicilio.',
  keywords: [
    'peluquería canina',
    'peluquería móvil',
    'Sevilla',
    'Alcalá de Guadaíra',
    'baño perros',
    'grooming',
    'cuidado mascotas',
  ],
  authors: [{ name: 'José Antonio Camacho' }],
  creator: 'José Antonio Camacho',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://elpeluperro.com',
    siteName: 'El Peluperro',
    title: 'El Peluperro - Peluquería Canina Móvil en Sevilla',
    description:
      'Peluquería canina móvil en Alcalá de Guadaíra y Sevilla. Servicios profesionales de baño, peluquería y antiparasitarios para tu mascota.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'El Peluperro - Peluquería Canina Móvil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Peluperro - Peluquería Canina Móvil en Sevilla',
    description:
      'Peluquería canina móvil en Alcalá de Guadaíra y Sevilla. Servicios profesionales para tu mascota.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://elpeluperro.com',
    name: 'El Peluperro',
    description:
      'Peluquería canina móvil en Alcalá de Guadaíra y Sevilla. Servicios profesionales de baño, peluquería y antiparasitarios para tu mascota.',
    url: 'https://elpeluperro.com',
    telephone: CONTACT_INFO.phoneInternational,
    email: CONTACT_INFO.email,
    image: 'https://elpeluperro.com/og-image.jpg',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.region,
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.3347,
      longitude: -5.8447,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Alcalá de Guadaíra',
      },
      {
        '@type': 'City',
        name: 'Sevilla',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      CONTACT_INFO.facebook,
      CONTACT_INFO.instagram,
    ],
    founder: {
      '@type': 'Person',
      name: 'José Antonio Camacho',
    },
  };

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF6B35" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="El Peluperro" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <GoogleAnalytics />
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <PWAInstallPrompt />
        <WhatsAppButton />
      </body>
    </html>
  );
}
