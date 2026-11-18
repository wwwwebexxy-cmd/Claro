import SiteShell from '../src/components/SiteShell/SiteShell';
import { claroMetaDescription } from '../src/siteMetadata';
import '../src/index.css';

export const metadata = {
  title: 'CLARO | Umm Al Quwain, UAE',
  description: claroMetaDescription,
  icons: {
    icon: '/claro-favicon.png',
    shortcut: '/claro-favicon.png',
    apple: '/claro-favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'CLARO | Umm Al Quwain, UAE',
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
