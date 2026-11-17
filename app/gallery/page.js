import GalleryPage from '../../src/site-pages/GalleryPage/GalleryPage';
import { claroSocialImage } from '../../src/siteMetadata';

const title = 'CLARO Gallery | Painting, Texture & Finishing Projects';
const description = 'Browse CLARO painting and texture work, decorative finishes, automotive projects and videos.';

export const metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        type: 'website',
        images: [{ url: claroSocialImage, width: 1200, height: 630, alt: 'CLARO logo on a black background' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [claroSocialImage] },
};

export default function GalleryRoute() {
    return <GalleryPage />;
}
