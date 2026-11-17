import ProductsPage from '../../src/site-pages/ProductsPage/ProductsPage';
import { claroSocialImage } from '../../src/siteMetadata';

const title = 'CLARO Services | Umm Al Quwain, UAE';
const description = 'Explore CLARO painting works, gold plating, chrome finishing, cleaning services and technical maintenance.';
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

export default function ProductsRoute() {
  return <ProductsPage />;
}
