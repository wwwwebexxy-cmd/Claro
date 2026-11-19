import SiteShell from '../src/components/SiteShell/SiteShell';
import { claroMetaDescription } from '../src/siteMetadata';
import '../src/index.css';

export const metadata = {
  title: 'REAL CLARO | Coating &Testing, Dipping & Painting, Sliver Plate & Gold Plate, Headlight Restoration & Cleaning, Technical Services in Umm Al Quwain & Omassery & Kozhikode Malaparamb',
  description: claroMetaDescription,
  icons: {
    icon: '/claro-favicon.png',
    shortcut: '/claro-favicon.png',
    apple: '/claro-favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'REAL CLARO | Coating &Testing, Dipping & Painting, Sliver Plate & Gold Plate, Headlight Restoration & Cleaning, Technical Services in Umm Al Quwain & Omassery & Kozhikode Malaparamb',
    description: claroMetaDescription,
    images: [
      {
        url: '/claro-social.png',
        width: 1200,
        height: 630,
        alt: 'CLARO logo on a black background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REAL CLARO | Coating &Testing, Dipping & Painting, Sliver Plate & Gold Plate, Headlight Restoration & Cleaning, Technical Services in Umm Al Quwain & Omassery & Kozhikode Malaparamb',
    images: ['/claro-social.png'],
  },
};

export const viewport = {
  themeColor: '#0a0a0a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
