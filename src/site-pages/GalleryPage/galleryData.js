const categoryLabels = {
    texture: 'Painting & Texture',
    finishing: 'Decorative Finishes',
    automotive: 'Automotive Finishes',
    samples: 'Texture Samples',
    videos: 'Project Videos',
};

const image = (id, title, category, filename, alt) => ({
    id,
    title,
    category,
    categoryLabel: categoryLabels[category],
    type: 'image',
    src: `/assets/gallery/${filename}`,
    alt,
});

const video = (id, title, filename, poster, alt) => ({
    id,
    title,
    category: 'videos',
    categoryLabel: categoryLabels.videos,
    type: 'video',
    src: `/assets/gallery/${filename}`,
    poster: `/assets/gallery/${poster}`,
    alt,
});

export const galleryCategories = [
    { id: 'all', label: 'All Work' },
    { id: 'texture', label: categoryLabels.texture },
    { id: 'finishing', label: categoryLabels.finishing },
    { id: 'automotive', label: categoryLabels.automotive },
    { id: 'samples', label: categoryLabels.samples },
    { id: 'videos', label: 'Videos' },
];

export const galleryItems = [
    image('texture-bedroom-ct4', 'Charcoal Texture — CT.4', 'texture', 'texture-bedroom-ct4.webp', 'Charcoal textured feature wall in a finished bedroom'),
    image('texture-bedroom-ct7', 'Ivory Texture — CT.7', 'texture', 'texture-bedroom-ct7.webp', 'Ivory textured wall in a finished bedroom'),
    image('texture-bedroom-ct10-navy', 'Navy Texture — CT.10', 'texture', 'texture-bedroom-ct10-navy.webp', 'Navy textured bedroom wall with matching decor'),
    image('texture-bedroom-ct5-detail', 'Rose Texture — CT.5', 'texture', 'texture-bedroom-ct5-detail.webp', 'Rose colored textured feature wall in a bedroom'),
    image('texture-bedroom-ct9', 'Ivory Texture — CT.9', 'texture', 'texture-bedroom-ct9.webp', 'Ivory textured wall with a close view of its finish'),
    image('texture-brick-feature-wall', 'Brick Feature Wall', 'texture', 'texture-brick-feature-wall.webp', 'Red brick pattern feature wall in a living room'),
    image('texture-tv-wall-ct1', 'TV Feature Wall — CT.1', 'texture', 'texture-tv-wall-ct1.webp', 'Textured TV feature wall with a light gray finish'),
    image('texture-bedroom-ct8', 'Ribbed Texture — CT.8', 'texture', 'texture-bedroom-ct8.webp', 'Ribbed ivory texture behind a finished bed'),
    image('gold-plated-living-room', 'Gold Plated Decor', 'finishing', 'gold-plated-living-room.webp', 'Gold plated coffee table in a finished living room'),
    image('silver-chrome-living-room', 'Silver Chrome Decor', 'finishing', 'silver-chrome-living-room.webp', 'Silver chrome coffee table in a finished living room'),
    image('premium-dark-texture-wall', 'Premium Dark Texture', 'texture', 'premium-dark-texture-wall.webp', 'Dark decorative wall texture with gold accents'),
    image('texture-samples-ct1-9', 'Texture Range — CT.1–9', 'samples', 'texture-samples-ct1-9.webp', 'Claro texture samples labeled CT.1 through CT.9'),
    image('texture-samples-display', 'Showroom Texture Samples', 'samples', 'texture-samples-display.webp', 'A showroom display of decorative texture samples'),
    image('texture-bedroom-ct9-detail', 'Ivory Texture — CT.9 Detail', 'texture', 'texture-bedroom-ct9-detail.webp', 'Close view of an ivory texture bedroom project'),
    image('chrome-wheel', 'Chrome Wheel Finish', 'automotive', 'chrome-wheel.webp', 'A polished chrome finish on a vehicle wheel'),
    image('steering-wheel-finish', 'Steering Wheel Finish', 'automotive', 'steering-wheel-finish.webp', 'A custom black and yellow steering wheel finish'),
    image('marble-dipping-finish', 'Marble Design Dipping', 'finishing', 'marble-dipping-finish.webp', 'A marble design dipping finish displayed on a table'),
    image('custom-finished-parts', 'Custom Finished Parts', 'automotive', 'custom-finished-parts.webp', 'A set of custom finished vehicle interior parts'),
    image('texture-bedroom-ct4-project', 'Charcoal Texture — CT.4 Project', 'texture', 'texture-bedroom-ct4-project.webp', 'Charcoal CT.4 texture in a complete bedroom setting'),
    image('gold-finish-grille', 'Gold Finish Grille', 'automotive', 'gold-finish-grille.webp', 'A vehicle grille with a reflective gold finish'),
    image('texture-bedroom-ct10', 'Navy Texture — CT.10 Project', 'texture', 'texture-bedroom-ct10.webp', 'Navy CT.10 texture in a complete bedroom setting'),
    image('texture-samples-mixed', 'Mixed Texture Samples', 'samples', 'texture-samples-mixed.webp', 'A display board with mixed decorative texture samples'),
    image('gold-finish-emblem', 'Gold Finish Emblem', 'automotive', 'gold-finish-emblem.webp', 'A gold finished vehicle emblem held in hand'),
    image('texture-bedroom-ct5', 'Rose Texture — CT.5 Project', 'texture', 'texture-bedroom-ct5.webp', 'Rose CT.5 texture in a complete bedroom setting'),
    video('video-texture-samples', 'Texture Sample Showcase', 'project-video-01.webm', 'project-video-01-poster.webp', 'Video showing Claro texture samples in the showroom'),
    video('video-chrome-finish', 'Chrome Finish Showcase', 'project-video-02.webm', 'project-video-02-poster.webp', 'Video showing a reflective chrome finish on a decorative piece'),
    video('video-gold-grille', 'Gold Grille Finish', 'project-video-03.webm', 'project-video-03-poster.webp', 'Video showing a gold finished vehicle grille'),
];

const galleryPreviewIds = [
    'texture-bedroom-ct7',
    'gold-plated-living-room',
    'chrome-wheel',
    'texture-bedroom-ct4',
    'silver-chrome-living-room',
    'steering-wheel-finish',
    'texture-bedroom-ct10-navy',
    'texture-samples-ct1-9',
    'marble-dipping-finish',
    'gold-finish-grille',
    'texture-bedroom-ct5',
    'texture-samples-mixed',
];

export const galleryPreviewItems = galleryPreviewIds
    .map((id) => galleryItems.find((item) => item.id === id))
    .filter(Boolean);
