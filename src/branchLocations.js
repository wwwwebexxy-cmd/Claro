export const branchLocations = [
    {
        id: 'kozhikode',
        title: 'Kozhikode - Malaparamba',
        address: 'Malaparamba, Kozhikode, Kerala, India',
        phones: [
            { label: '+91 80860 08740', href: 'tel:+918086008740' },
            { label: '+91 99473 83802', href: 'tel:+919947383802' },
        ],
        mapUrl: 'https://maps.google.com/?q=11.289016,75.808731',
        mapEmbedUrl: 'https://www.google.com/maps?q=11.289016,75.808731&output=embed',
        latitude: 11.289016,
        longitude: 75.808731,
        streetAddress: 'Malaparamba',
        addressLocality: 'Kozhikode',
    },
    {
        id: 'omassery',
        title: 'Omassery',
        address: 'Koduvally Road, Omassery, Kerala, India',
        phones: [
            { label: '+91 80860 08741', href: 'tel:+918086008741' },
        ],
        mapUrl: 'https://maps.app.goo.gl/SJ6wGcHbmDHwAQag7',
        mapEmbedUrl: 'https://www.google.com/maps?q=11.366379,75.960792&output=embed',
        latitude: 11.366379,
        longitude: 75.960792,
        streetAddress: 'Koduvally Road',
        addressLocality: 'Omassery',
    },
];

export const branchLocationSchemas = branchLocations.map((location) => ({
    '@type': 'LocalBusiness',
    name: `CLARO - ${location.title}`,
    telephone: location.phones.map((phone) => phone.href.replace('tel:', '')),
    address: {
        '@type': 'PostalAddress',
        streetAddress: location.streetAddress,
        addressLocality: location.addressLocality,
        addressRegion: 'Kerala',
        addressCountry: 'IN',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: location.latitude,
        longitude: location.longitude,
    },
    hasMap: location.mapUrl,
}));
