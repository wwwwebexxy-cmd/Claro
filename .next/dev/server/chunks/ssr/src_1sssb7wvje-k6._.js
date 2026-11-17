module.exports = [
"[project]/src/hooks/useSeo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useSeo",
    ()=>useSeo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useSeo = ({ title, description, canonicalUrl, ogType = 'website', ogImage, schemas = [] })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 1. Update document title
        if (title) {
            document.title = title;
        }
        // 2. Update Meta Description
        let descMeta = document.querySelector('meta[name="description"]');
        if (descMeta) {
            descMeta.setAttribute('content', description || '');
        } else {
            descMeta = document.createElement('meta');
            descMeta.setAttribute('name', 'description');
            descMeta.setAttribute('content', description || '');
            document.head.appendChild(descMeta);
        }
        // 3. Update Canonical Link
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.setAttribute('href', canonicalUrl || '');
        } else if (canonicalUrl) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            canonicalLink.setAttribute('href', canonicalUrl);
            document.head.appendChild(canonicalLink);
        }
        // 4. Update Open Graph Tags
        const updateOgTag = (property, value)=>{
            if (!value) return;
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('property', property);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', value);
        };
        updateOgTag('og:title', title);
        updateOgTag('og:description', description);
        updateOgTag('og:url', canonicalUrl);
        updateOgTag('og:type', ogType);
        if (ogImage) {
            updateOgTag('og:image', ogImage);
        }
        // 5. Update Twitter Card Tags
        const updateTwitterTag = (name, value)=>{
            if (!value) return;
            let tag = document.querySelector(`meta[name="${name}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('name', name);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', value);
        };
        updateTwitterTag('twitter:card', 'summary_large_image');
        updateTwitterTag('twitter:title', title);
        updateTwitterTag('twitter:description', description);
        if (ogImage) {
            updateTwitterTag('twitter:image', ogImage);
        }
        // 6. Inject JSON-LD Schema Scripts
        // Remove any existing dynamic schemas first to prevent duplication
        const existingScripts = document.querySelectorAll('script[data-seo-schema]');
        existingScripts.forEach((script)=>script.remove());
        // Add new schemas
        const addedScripts = [];
        schemas.forEach((schema, index)=>{
            if (schema) {
                const script = document.createElement('script');
                script.type = 'application/ld+json';
                script.setAttribute('data-seo-schema', `schema-${index}`);
                script.text = JSON.stringify(schema);
                document.head.appendChild(script);
                addedScripts.push(script);
            }
        });
        // Cleanup function: remove the injected scripts when component unmounts
        return ()=>{
            addedScripts.forEach((script)=>script.remove());
        };
    }, [
        title,
        description,
        canonicalUrl,
        ogType,
        ogImage,
        schemas
    ]);
};
const __TURBOPACK__default__export__ = useSeo;
}),
"[project]/src/site-pages/ProductsPage/ProductsPage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSeo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSeo.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const useReveal = ()=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });
        const elements = ref.current?.querySelectorAll('.reveal');
        elements?.forEach((el)=>observer.observe(el));
        return ()=>elements?.forEach((el)=>observer.unobserve(el));
    }, []);
    return ref;
};
const products = [
    {
        img: '/assets/claro-painting-work.png',
        alt: 'Painter applying a finish to an interior wall',
        title: [
            'Painting & ',
            'Texture Work'
        ],
        desc: 'Interior and exterior painting, including decorative texture paint work for residential and commercial properties.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTint"], {}, void 0, false, {
            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
            lineNumber: 36,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        heading: 'Services Included',
        points: [
            'Painting works',
            'Texture paint work',
            'Residential and commercial projects'
        ]
    },
    {
        img: '/assets/claro-gold-plating.jpeg',
        alt: 'Claro gold-plating work on a decorative piece',
        title: [
            'Gold ',
            'Plating'
        ],
        desc: 'Gold plating services for decorative pieces and selected surfaces.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMagic"], {}, void 0, false, {
            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
            lineNumber: 45,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        heading: 'Service Details',
        points: [
            'Gold plating',
            'Decorative surface finishing',
            'Part of the Claro painting works division'
        ],
        reverse: true
    },
    {
        img: '/assets/claro-service-gallery.jpg',
        alt: 'Claro service collage featuring chrome-finished wheels and fixtures',
        title: [
            'Chrome ',
            'Finishing'
        ],
        desc: 'Chrome finishing for plastic, fiber, steel, metal, wood, stainless steel, mild steel and ceramic surfaces.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStar"], {}, void 0, false, {
            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
            lineNumber: 55,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        heading: 'Finishing Surfaces',
        points: [
            'Plastic and fiber',
            'Steel, metal and wood',
            'Stainless steel, mild steel and ceramic'
        ]
    },
    {
        img: '/assets/claro-spray-painting.png',
        alt: 'Technician spray-painting a surface',
        title: [
            'Dipping & ',
            'Spray Painting'
        ],
        desc: 'Dipping and spray painting works for a range of shapes and surfaces.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMagic"], {}, void 0, false, {
            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
            lineNumber: 64,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        heading: 'Painting Works',
        points: [
            'Dipping',
            'Spray painting',
            'Surface finishing for different shapes'
        ],
        reverse: true
    },
    {
        img: '/assets/claro-bathtub-refinishing.png',
        alt: 'Refinished bathtub in a modern bathroom',
        title: [
            'Bathtub ',
            'Refinishing'
        ],
        desc: 'Bathtub refinishing to restore worn or stained surfaces.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTint"], {}, void 0, false, {
            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
            lineNumber: 74,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        heading: 'Painting Works',
        points: [
            'Bathtub refinishing',
            'Surface restoration',
            'A listed Claro painting service'
        ]
    },
    {
        img: '/assets/claro-epoxy-floor-coating.png',
        alt: 'Epoxy floor coating being applied in a commercial interior',
        title: [
            'Epoxy Floor ',
            'Coating'
        ],
        desc: 'Epoxy floor coating for residential and commercial properties.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBolt"], {}, void 0, false, {
            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
            lineNumber: 83,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        heading: 'Painting Works',
        points: [
            'Epoxy floor coating',
            'Floor finishing',
            'Residential and commercial projects'
        ],
        reverse: true
    },
    {
        img: '/assets/claro-building-cleaning.png',
        alt: 'Building cleaning in progress',
        title: [
            'Building Cleaning & ',
            'Disinfection'
        ],
        desc: 'Cleaning, disinfection and sterilization services for properties.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaShieldAlt"], {}, void 0, false, {
            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
            lineNumber: 93,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        heading: 'Cleaning Services',
        points: [
            'Building cleaning',
            'Disinfection and sterilization',
            'Cleaning for residential and commercial properties'
        ]
    },
    {
        img: '/assets/claro-water-tank-cleaning.png',
        alt: 'Water tank cleaning work',
        title: [
            'Water Tank & Pipeline ',
            'Disinfection'
        ],
        desc: 'Water tank cleaning and pipeline disinfection services.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTint"], {}, void 0, false, {
            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
            lineNumber: 102,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        heading: 'Cleaning Services',
        points: [
            'Water tank cleaning',
            'Pipeline disinfection',
            'Part of the Claro cleaning services division'
        ],
        reverse: true
    },
    {
        img: '/assets/claro-electrical-maintenance.png',
        alt: 'Technician carrying out electrical maintenance',
        title: [
            'Electrical & Plumbing ',
            'Maintenance'
        ],
        desc: 'Electrical and plumbing maintenance for residential and commercial properties.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBolt"], {}, void 0, false, {
            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
            lineNumber: 112,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        heading: 'Technical Services',
        points: [
            'Electrical maintenance',
            'Plumbing maintenance',
            'Property maintenance services'
        ]
    },
    {
        img: '/assets/claro-carpentry-services.png',
        alt: 'Carpentry work taking place in an interior',
        title: [
            'Carpentry, Flooring & ',
            'Ceiling Works'
        ],
        desc: 'Carpentry services, flooring installation with tile works, ceiling works and property refurbishment.',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMagic"], {}, void 0, false, {
            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
            lineNumber: 121,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        heading: 'Technical Services',
        points: [
            'Carpentry services',
            'Flooring installation and tile works',
            'Ceiling works and property refurbishment'
        ],
        reverse: true
    }
];
const textVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ],
            delay: 0.2
        }
    }
};
const ProductsPage = ()=>{
    const pageRef = useReveal();
    const [openFaq, setOpenFaq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.scrollTo(0, 0);
    }, []);
    // Service and FAQ structured data from the Claro company profile.
    const serviceProvider = {
        "@type": "LocalBusiness",
        "name": "CLARO",
        "telephone": "+971545484873",
        "email": "ajmalclaro@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "A8 Warehouse, Al Maqta 2",
            "addressLocality": "Umm Al Quwain",
            "addressRegion": "Umm Al Quwain",
            "addressCountry": "AE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.5039005,
            "longitude": 55.5543137
        }
    };
    const serviceSchemas = products.map((service)=>({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `CLARO ${service.title.join('').replace(/\s+/g, ' ').trim()}`,
            "serviceType": service.title.join('').replace(/\s+/g, ' ').trim(),
            "description": service.desc,
            "provider": serviceProvider
        }));
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What painting services does CLARO provide?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CLARO lists painting, texture paint work, gold plating, chrome finishing, dipping, spray painting, bathtub refinishing and epoxy floor coating."
                }
            },
            {
                "@type": "Question",
                "name": "What cleaning services does CLARO provide?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CLARO provides building cleaning, disinfection and sterilization, water tank cleaning and pipeline disinfection."
                }
            },
            {
                "@type": "Question",
                "name": "What technical services are available?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Technical services listed in the company profile include electrical maintenance, plumbing maintenance, carpentry, flooring installation with tile works, property refurbishment and ceiling works."
                }
            },
            {
                "@type": "Question",
                "name": "Where is CLARO located?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CLARO is located at A8 Warehouse, Al Maqta 2, Umm Al Quwain, UAE."
                }
            }
        ]
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSeo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        title: "CLARO Services | Umm Al Quwain, UAE",
        description: "Explore CLARO painting works, gold plating, chrome finishing, cleaning services and technical maintenance.",
        ogType: "website",
        ogImage: "/assets/claro-logo.png",
        schemas: [
            ...serviceSchemas,
            faqSchema
        ]
    });
    const faqQuestions = faqSchema.mainEntity.map((item)=>({
            q: item.name,
            a: item.acceptedAnswer.text
        }));
    const toggleFaq = (index)=>{
        setOpenFaq((prev)=>prev === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: pageRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "page-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            variants: textVariants,
                            children: [
                                "Our ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                    lineNumber: 245,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                            lineNumber: 239,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8,
                                ease: [
                                    0.25,
                                    0.46,
                                    0.45,
                                    0.94
                                ],
                                delay: 0.3
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            children: "Explore the painting, cleaning and technical services available from CLARO in Umm Al Quwain."
                        }, void 0, false, {
                            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                            lineNumber: 247,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                    lineNumber: 238,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                lineNumber: 237,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            products.map((product, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "product-section",
                    style: product.reverse ? {
                        background: 'var(--bg-secondary)'
                    } : {},
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `product-layout ${product.reverse ? 'reverse' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "product-image",
                                    initial: "hidden",
                                    whileInView: "visible",
                                    viewport: {
                                        once: true,
                                        amount: 0.2
                                    },
                                    variants: {
                                        hidden: {
                                            opacity: 0,
                                            scale: 0.9
                                        },
                                        visible: {
                                            opacity: 1,
                                            scale: 1,
                                            transition: {
                                                duration: 0.8,
                                                ease: [
                                                    0.25,
                                                    0.46,
                                                    0.45,
                                                    0.94
                                                ]
                                            }
                                        }
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: product.img,
                                        alt: product.alt
                                    }, void 0, false, {
                                        fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                        lineNumber: 277,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                    lineNumber: 267,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "product-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                                            initial: "hidden",
                                            whileInView: "visible",
                                            viewport: {
                                                once: true,
                                                amount: 0.2
                                            },
                                            variants: textVariants,
                                            children: [
                                                product.title[0],
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: product.title[1]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                                    lineNumber: 286,
                                                    columnNumber: 55
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                            lineNumber: 280,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                            initial: {
                                                opacity: 0,
                                                y: 30
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.8,
                                                ease: [
                                                    0.25,
                                                    0.46,
                                                    0.45,
                                                    0.94
                                                ],
                                                delay: 0.3
                                            },
                                            viewport: {
                                                once: true,
                                                amount: 0.2
                                            },
                                            children: product.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                            lineNumber: 288,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "importance-box",
                                            initial: {
                                                opacity: 0,
                                                y: 30
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.8,
                                                ease: [
                                                    0.25,
                                                    0.46,
                                                    0.45,
                                                    0.94
                                                ],
                                                delay: 0.4
                                            },
                                            viewport: {
                                                once: true,
                                                amount: 0.2
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: [
                                                        product.icon,
                                                        " ",
                                                        product.heading
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                                    lineNumber: 303,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    children: product.points.map((point, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].li, {
                                                            initial: {
                                                                opacity: 0,
                                                                x: -10
                                                            },
                                                            whileInView: {
                                                                opacity: 1,
                                                                x: 0
                                                            },
                                                            transition: {
                                                                duration: 0.5,
                                                                ease: [
                                                                    0.25,
                                                                    0.46,
                                                                    0.45,
                                                                    0.94
                                                                ],
                                                                delay: 0.5 + j * 0.1
                                                            },
                                                            viewport: {
                                                                once: true,
                                                                amount: 0.2
                                                            },
                                                            children: point
                                                        }, j, false, {
                                                            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                                            lineNumber: 306,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                                    lineNumber: 304,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                            lineNumber: 296,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                    lineNumber: 279,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                            lineNumber: 266,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                        lineNumber: 265,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, i, false, {
                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                    lineNumber: 260,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "products-faq-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "products-faq-eyebrow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "faq-eyebrow-line"
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                    lineNumber: 328,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "faq-eyebrow-text",
                                    children: "FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                    lineNumber: 329,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "faq-eyebrow-line"
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                    lineNumber: 330,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                            lineNumber: 327,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "products-faq-heading",
                            children: [
                                "Frequently Asked ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Questions"
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                    lineNumber: 332,
                                    columnNumber: 75
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                            lineNumber: 332,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "products-faq-list",
                            children: faqQuestions.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `products-faq-item ${openFaq === i ? 'active' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "products-faq-question",
                                            onClick: ()=>toggleFaq(i),
                                            "aria-expanded": openFaq === i,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.q
                                                }, void 0, false, {
                                                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                                    lineNumber: 340,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                    className: "products-faq-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                                    lineNumber: 341,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                            lineNumber: 339,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "products-faq-answer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "products-faq-answer-content",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: item.a
                                                }, void 0, false, {
                                                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                                    lineNumber: 345,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                                lineNumber: 344,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                            lineNumber: 343,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                    lineNumber: 335,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                            lineNumber: 333,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                    lineNumber: 326,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                lineNumber: 325,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "cta-banner",
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            ease: [
                                0.25,
                                0.46,
                                0.45,
                                0.94
                            ],
                            delay: 0.2
                        },
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Need Painting, Cleaning or Technical Services?"
                            }, void 0, false, {
                                fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                lineNumber: 364,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Contact CLARO to discuss your residential or commercial service requirements."
                            }, void 0, false, {
                                fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                lineNumber: 365,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "tel:+971545484873",
                                className: "btn-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPhoneAlt"], {}, void 0, false, {
                                        fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                        lineNumber: 366,
                                        columnNumber: 75
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Call +971 54 548 4873"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                                lineNumber: 366,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                        lineNumber: 357,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                    lineNumber: 356,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
                lineNumber: 355,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/site-pages/ProductsPage/ProductsPage.jsx",
        lineNumber: 235,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProductsPage;
}),
];

//# sourceMappingURL=src_1sssb7wvje-k6._.js.map