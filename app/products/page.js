import ProductsPage from '../../src/site-pages/ProductsPage/ProductsPage';

const title = 'CLARO Services | Umm Al Quwain, UAE';
const description = 'Explore CLARO painting works, gold plating, chrome finishing, cleaning services and technical maintenance.';
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

export default function ProductsRoute() {
  return <ProductsPage />;
}
