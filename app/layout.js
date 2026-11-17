import SiteShell from '../src/components/SiteShell/SiteShell';
import '../src/index.css';

export const metadata = {
  title: 'CLARO | Umm Al Quwain, UAE',
  description: 'Painting works, technical services and cleaning services for residential and commercial properties in Umm Al Quwain, UAE.',
  icons: {
    icon: '/assets/claro-logo.png',
    apple: '/assets/claro-logo.png',
  },
  manifest: '/manifest.json',
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
