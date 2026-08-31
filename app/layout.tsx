import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'M&T Treecut | Professional Tree Felling in North West Province, South Africa',
  description: 'M&T Treecut offers professional tree felling, stump removal, tree pruning, plot clearing and garden services across North West Province. Call 079 064 2188 for a free quote.',
  keywords: ['tree felling', 'tree removal', 'stump removal', 'tree pruning', 'North West Province', 'Rustenburg', 'Mahikeng', 'Klerksdorp', 'Potchefstroom', 'tree services'],
  authors: [{ name: 'M&T Treecut' }],
  creator: 'M&T Treecut',
  publisher: 'M&T Treecut',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://mttreecut.co.za'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'M&T Treecut | Professional Tree Felling in North West Province',
    description: 'Professional tree felling, stump removal, tree pruning and garden services across North West Province, South Africa. Free quotations. Call now.',
    url: 'https://mttreecut.co.za',
    siteName: 'M&T Treecut',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: 'https://mttreecut.co.za/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'M&T Treecut - Professional Tree Felling Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M&T Treecut | Professional Tree Felling in North West Province',
    description: 'Professional tree felling, stump removal, tree pruning and garden services across North West Province. Free quotations. Call 079 064 2188 now.',
    images: ['https://mttreecut.co.za/og-image.jpg'],
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

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="font-sans font-light">
        {children}
      </body>
    </html>
  );
}
