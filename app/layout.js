import SiteShell from '../src/components/SiteShell/SiteShell';
import { claroMetaDescription } from '../src/siteMetadata';
import '../src/index.css';

export const metadata = {
  title: 'CLARO | Umm Al Quwain, UAE',
  description: claroMetaDescription,
  icons: {
    icon: '/icon',
    apple: '/icon',
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
