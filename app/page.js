import HomePage from '../src/site-pages/HomePage/HomePage';

const title = 'CLARO | Painting, Cleaning & Technical Services in Umm Al Quwain';
const description = 'Explore CLARO painting works, cleaning services and technical maintenance for residential and commercial properties in Umm Al Quwain, UAE.';
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function Page() {
  return <HomePage />;
}
