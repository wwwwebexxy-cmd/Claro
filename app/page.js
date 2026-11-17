import HomePage from '../src/site-pages/HomePage/HomePage';
import { claroMetaDescription, claroSocialImage } from '../src/siteMetadata';

const title = 'CLARO | Painting, Cleaning & Technical Services in Umm Al Quwain';
const description = claroMetaDescription;
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    images: [{ url: claroSocialImage, width: 1200, height: 630, alt: 'CLARO logo on a black background' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [claroSocialImage],
  },
};

export default function Page() {
  return <HomePage />;
}
