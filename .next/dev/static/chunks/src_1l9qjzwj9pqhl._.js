(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/HeroSlider/HeroSlider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$parallax$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Parallax$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/parallax.mjs [app-client] (ecmascript) <export default as Parallax>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const slides = [
    {
        image: '/assets/claro-generated-painting-hero.webp',
        subtitle: 'CLARO · Umm Al Quwain, UAE',
        title: 'Painting <span>Works</span>',
        description: 'Painting, texture finishes and specialist surface treatments for homes and businesses.',
        btnText: 'Explore Services'
    },
    {
        video: '/assets/claro-gold-finishing.webm',
        subtitle: 'Decorative Surface Finishes',
        title: 'Gold <span>Plating</span>',
        description: 'Gold plating and chrome finishing for a range of materials and decorative pieces.',
        btnText: 'See Our Services'
    },
    {
        video: '/assets/claro-workshop-finishing.webm',
        subtitle: 'Painting Works · Umm Al Quwain',
        title: 'Dipping &amp; <span>Chrome Finishing</span>',
        description: 'Explore Claro painting, cleaning and technical service divisions.',
        btnText: 'View Services'
    }
];
/* ── Animation Variants ────────────────────────────── */ // Background image: cinematic zoom-out (scale 1.15 → 1)
const bgVariants = {
    initial: {
        scale: 1.2
    },
    animate: {
        scale: 1,
        transition: {
            duration: 6,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        }
    }
};
// Subtitle: fade-in + slide-up (first text to appear)
const subtitleVariants = {
    initial: {
        opacity: 0,
        y: 30
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ],
            delay: 0.4
        }
    }
};
// Title: fade-in + slide-up (slightly later, more dramatic)
const titleVariants = {
    initial: {
        opacity: 0,
        y: 40
    },
    animate: {
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
            delay: 0.65
        }
    }
};
// CTA Button: fade-in + slide-up (last element, cinematic delay)
const btnVariants = {
    initial: {
        opacity: 0,
        y: 35
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ],
            delay: 0.9
        }
    }
};
/* ── Slide Content Component ─────────────────────── */ const SlideContent = ({ slide, isActive })=>{
    // Re-trigger animations using the key prop when slide becomes active
    if (!isActive) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "slide-subtitle",
                variants: subtitleVariants,
                initial: "initial",
                animate: "animate",
                children: slide.subtitle
            }, `sub-${slide.subtitle}`, false, {
                fileName: "[project]/src/components/HeroSlider/HeroSlider.jsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                className: "slide-title",
                variants: titleVariants,
                initial: "initial",
                animate: "animate",
                dangerouslySetInnerHTML: {
                    __html: slide.title
                }
            }, `title-${slide.title}`, false, {
                fileName: "[project]/src/components/HeroSlider/HeroSlider.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: btnVariants,
                initial: "initial",
                animate: "animate",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#services",
                    className: "slide-btn",
                    children: [
                        slide.btnText,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSlider/HeroSlider.jsx",
                            lineNumber: 125,
                            columnNumber: 27
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSlider/HeroSlider.jsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, `btn-${slide.btnText}`, false, {
                fileName: "[project]/src/components/HeroSlider/HeroSlider.jsx",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroSlider/HeroSlider.jsx",
        lineNumber: 98,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SlideContent;
const HeroSlider = ()=>{
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleSlideChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSlider.useCallback[handleSlideChange]": (swiper)=>{
            setActiveIndex(swiper.realIndex);
        }
    }["HeroSlider.useCallback[handleSlideChange]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "artistic-parallax-slider",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
            speed: 1200,
            parallax: true,
            pagination: {
                clickable: true
            },
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            loop: true,
            modules: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$parallax$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Parallax$3e$__["Parallax"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
            ],
            className: "mySwiper",
            onSlideChange: handleSlideChange,
            children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "parallax-bg",
                            style: slide.image ? {
                                backgroundImage: `url(${slide.image})`
                            } : undefined,
                            variants: bgVariants,
                            initial: "initial",
                            animate: activeIndex === index ? 'animate' : 'initial',
                            children: slide.video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: slide.video,
                                autoPlay: true,
                                muted: true,
                                loop: true,
                                playsInline: true,
                                preload: "metadata",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSlider/HeroSlider.jsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, `bg-${index}-${activeIndex === index ? 'active' : 'idle'}`, false, {
                            fileName: "[project]/src/components/HeroSlider/HeroSlider.jsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "slide-overlay"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSlider/HeroSlider.jsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "slide-content",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlideContent, {
                                slide: slide,
                                isActive: activeIndex === index
                            }, `content-${index}-${activeIndex === index ? 'active' : 'idle'}`, false, {
                                fileName: "[project]/src/components/HeroSlider/HeroSlider.jsx",
                                lineNumber: 176,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSlider/HeroSlider.jsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/HeroSlider/HeroSlider.jsx",
                    lineNumber: 157,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSlider/HeroSlider.jsx",
            lineNumber: 141,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/HeroSlider/HeroSlider.jsx",
        lineNumber: 140,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeroSlider, "ocVZqquA3n9DnG5d3r9ByDteYLA=");
_c1 = HeroSlider;
const __TURBOPACK__default__export__ = HeroSlider;
var _c, _c1;
__turbopack_context__.k.register(_c, "SlideContent");
__turbopack_context__.k.register(_c1, "HeroSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MarqueeBar/Marqueebar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
;
;
;
const LOGO = '/assets/claro-logo.webp';
const items = [
    {
        icon: 'diamond',
        text: 'Painting Works'
    },
    {
        icon: 'star',
        text: 'Texture Paint'
    },
    {
        icon: 'diamond',
        text: 'Gold Plating'
    },
    {
        icon: 'star',
        text: 'Chrome Finishing'
    },
    {
        icon: 'diamond',
        text: 'Dipping & Spray Painting'
    },
    {
        icon: 'star',
        text: 'Bathtub Refinishing'
    },
    {
        icon: 'diamond',
        text: 'Epoxy Floor Coating'
    },
    {
        icon: 'star',
        text: 'Water Tank Cleaning'
    },
    {
        icon: 'diamond',
        text: 'Technical Services'
    },
    {
        icon: 'star',
        text: 'Building Cleaning'
    }
];
function MarqueeLap({ suffix = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "marquee-logo-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: LOGO,
                    alt: "CLARO Umm Al Quwain",
                    className: "marquee-logo"
                }, void 0, false, {
                    fileName: "[project]/src/components/MarqueeBar/Marqueebar.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MarqueeBar/Marqueebar.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            items.map(({ icon, text }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "marquee-item",
                    children: [
                        icon === 'star' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {
                            className: "marquee-icon"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MarqueeBar/Marqueebar.jsx",
                            lineNumber: 29,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDiamond"], {
                            className: "marquee-icon"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MarqueeBar/Marqueebar.jsx",
                            lineNumber: 30,
                            columnNumber: 15
                        }, this),
                        text
                    ]
                }, `${suffix}-${i}`, true, {
                    fileName: "[project]/src/components/MarqueeBar/Marqueebar.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MarqueeBar/Marqueebar.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = MarqueeLap;
function MarqueeBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "marquee-bar",
        "aria-label": "Promotions ticker",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "marquee-track",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeLap, {
                    suffix: "a"
                }, void 0, false, {
                    fileName: "[project]/src/components/MarqueeBar/Marqueebar.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeLap, {
                    suffix: "b"
                }, void 0, false, {
                    fileName: "[project]/src/components/MarqueeBar/Marqueebar.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MarqueeBar/Marqueebar.jsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MarqueeBar/Marqueebar.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c1 = MarqueeBar;
const __TURBOPACK__default__export__ = MarqueeBar;
var _c, _c1;
__turbopack_context__.k.register(_c, "MarqueeLap");
__turbopack_context__.k.register(_c1, "MarqueeBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSeo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useSeo",
    ()=>useSeo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useSeo = ({ title, description, canonicalUrl, ogType = 'website', ogImage, schemas = [] })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSeo.useEffect": ()=>{
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
            const updateOgTag = {
                "useSeo.useEffect.updateOgTag": (property, value)=>{
                    if (!value) return;
                    let tag = document.querySelector(`meta[property="${property}"]`);
                    if (!tag) {
                        tag = document.createElement('meta');
                        tag.setAttribute('property', property);
                        document.head.appendChild(tag);
                    }
                    tag.setAttribute('content', value);
                }
            }["useSeo.useEffect.updateOgTag"];
            updateOgTag('og:title', title);
            updateOgTag('og:description', description);
            updateOgTag('og:url', canonicalUrl);
            updateOgTag('og:type', ogType);
            if (ogImage) {
                updateOgTag('og:image', ogImage);
            }
            // 5. Update Twitter Card Tags
            const updateTwitterTag = {
                "useSeo.useEffect.updateTwitterTag": (name, value)=>{
                    if (!value) return;
                    let tag = document.querySelector(`meta[name="${name}"]`);
                    if (!tag) {
                        tag = document.createElement('meta');
                        tag.setAttribute('name', name);
                        document.head.appendChild(tag);
                    }
                    tag.setAttribute('content', value);
                }
            }["useSeo.useEffect.updateTwitterTag"];
            updateTwitterTag('twitter:card', 'summary_large_image');
            updateTwitterTag('twitter:title', title);
            updateTwitterTag('twitter:description', description);
            if (ogImage) {
                updateTwitterTag('twitter:image', ogImage);
            }
            // 6. Inject JSON-LD Schema Scripts
            // Remove any existing dynamic schemas first to prevent duplication
            const existingScripts = document.querySelectorAll('script[data-seo-schema]');
            existingScripts.forEach({
                "useSeo.useEffect": (script)=>script.remove()
            }["useSeo.useEffect"]);
            // Add new schemas
            const addedScripts = [];
            schemas.forEach({
                "useSeo.useEffect": (schema, index)=>{
                    if (schema) {
                        const script = document.createElement('script');
                        script.type = 'application/ld+json';
                        script.setAttribute('data-seo-schema', `schema-${index}`);
                        script.text = JSON.stringify(schema);
                        document.head.appendChild(script);
                        addedScripts.push(script);
                    }
                }
            }["useSeo.useEffect"]);
            // Cleanup function: remove the injected scripts when component unmounts
            return ({
                "useSeo.useEffect": ()=>{
                    addedScripts.forEach({
                        "useSeo.useEffect": (script)=>script.remove()
                    }["useSeo.useEffect"]);
                }
            })["useSeo.useEffect"];
        }
    }["useSeo.useEffect"], [
        title,
        description,
        canonicalUrl,
        ogType,
        ogImage,
        schemas
    ]);
};
_s(useSeo, "OD7bBpZva5O2jO+Puf00hKivP7c=");
const __TURBOPACK__default__export__ = useSeo;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/site-pages/HomePage/HomePage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSlider$2f$HeroSlider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroSlider/HeroSlider.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarqueeBar$2f$Marqueebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MarqueeBar/Marqueebar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSeo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSeo.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const locationUrl = 'https://www.google.com/maps?q=25.5039005,55.5543137';
const useReveal = ()=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReveal.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "useReveal.useEffect": (entries)=>{
                    entries.forEach({
                        "useReveal.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add('visible');
                                observer.unobserve(entry.target);
                            }
                        }
                    }["useReveal.useEffect"]);
                }
            }["useReveal.useEffect"], {
                threshold: 0.06
            });
            const elements = ref.current?.querySelectorAll('.reveal');
            elements?.forEach({
                "useReveal.useEffect": (el)=>observer.observe(el)
            }["useReveal.useEffect"]);
            return ({
                "useReveal.useEffect": ()=>elements?.forEach({
                        "useReveal.useEffect": (el)=>observer.unobserve(el)
                    }["useReveal.useEffect"])
            })["useReveal.useEffect"];
        }
    }["useReveal.useEffect"], []);
    return ref;
};
_s(useReveal, "8uVE59eA/r6b92xF80p7sH8rXLk=");
const CountUp = ({ target, suffix })=>{
    _s1();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const started = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUp.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "CountUp.useEffect": ([entry])=>{
                    if (entry.isIntersecting && !started.current) {
                        started.current = true;
                        const steps = 60;
                        const increment = target / steps;
                        let current = 0;
                        const interval = setInterval({
                            "CountUp.useEffect.interval": ()=>{
                                current += increment;
                                if (current >= target) {
                                    setCount(target);
                                    clearInterval(interval);
                                } else setCount(Math.floor(current));
                            }
                        }["CountUp.useEffect.interval"], 1800 / steps);
                    }
                }
            }["CountUp.useEffect"], {
                threshold: 0.3
            });
            if (ref.current) observer.observe(ref.current);
            return ({
                "CountUp.useEffect": ()=>observer.disconnect()
            })["CountUp.useEffect"];
        }
    }["CountUp.useEffect"], [
        target
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: [
            count.toLocaleString(),
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
        lineNumber: 61,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(CountUp, "QL8NxtztIlUT20kvEWsT9uImKoE=");
_c = CountUp;
/* tag field removed — badges no longer rendered */ const services = [
    {
        img: '/assets/claro-painting-work.webp',
        title: 'Painting & Texture Work',
        desc: 'Interior and exterior painting with decorative texture finishes.'
    },
    {
        img: '/assets/claro-gold-plating.webp',
        title: 'Gold Plating',
        desc: 'Gold plating for decorative pieces and selected surfaces.'
    },
    {
        img: '/assets/claro-service-gallery.webp',
        title: 'Chrome Finishing',
        desc: 'Chrome finishing for plastic, fiber, steel, metal, wood, stainless steel, mild steel and ceramic.'
    },
    {
        img: '/assets/claro-dipping-work.webp',
        title: 'Dipping & Spray Painting',
        desc: 'Surface finishing options for a range of shapes, parts and materials.'
    },
    {
        img: '/assets/claro-bathtub-refinishing.webp',
        title: 'Bathtub Refinishing',
        desc: 'Refinishing work for worn or stained bathtubs.'
    },
    {
        img: '/assets/claro-epoxy-floor-coating.webp',
        title: 'Epoxy Floor Coating',
        desc: 'Epoxy coating for floors in residential and commercial spaces.'
    },
    {
        img: '/assets/claro-building-cleaning.webp',
        title: 'Building Cleaning',
        desc: 'Cleaning services for residential and commercial properties.'
    },
    {
        img: '/assets/claro-water-tank-cleaning.webp',
        title: 'Tank & Pipeline Cleaning',
        desc: 'Water tank cleaning and pipeline disinfection.'
    },
    {
        img: '/assets/claro-electrical-maintenance.webp',
        title: 'Electrical & Plumbing',
        desc: 'Electrical and plumbing maintenance services.'
    },
    {
        img: '/assets/claro-carpentry-services.webp',
        title: 'Carpentry & Refurbishment',
        desc: 'Carpentry, flooring installation, ceiling works and property refurbishment.'
    }
];
const stats = [
    {
        num: 3,
        suffix: '',
        label: 'Service Divisions'
    },
    {
        num: 8,
        suffix: '',
        label: 'Painting Services'
    },
    {
        num: 4,
        suffix: '',
        label: 'Cleaning Services'
    },
    {
        num: 6,
        suffix: '',
        label: 'Technical Services'
    }
];
const features = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAward"], {}, void 0, false, {
            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
            lineNumber: 86,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        label: 'Professionalism',
        sub: 'A core company value'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaShieldAlt"], {}, void 0, false, {
            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
            lineNumber: 87,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        label: 'Expertise',
        sub: 'Painting, cleaning and technical services'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBolt"], {}, void 0, false, {
            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
            lineNumber: 88,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        label: 'Client-Centric',
        sub: 'Focused on each project'
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {}, void 0, false, {
            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
            lineNumber: 89,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
        label: 'Residential & Commercial',
        sub: 'Services for both property types'
    }
];
const HomePage = ()=>{
    _s2();
    const pageRef = useReveal();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (window.location.hash) {
                const el = document.querySelector(window.location.hash);
                if (el) setTimeout({
                    "HomePage.useEffect": ()=>el.scrollIntoView({
                            behavior: 'smooth'
                        })
                }["HomePage.useEffect"], 100);
            }
        }
    }["HomePage.useEffect"], []);
    // LocalBusiness / Organization Schema for GEO & Search
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "CLARO",
        "description": "A customer-focused service provider in Umm Al Quwain specializing in painting works, technical services and cleaning services.",
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSeo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        title: "CLARO | Painting, Cleaning & Technical Services in Umm Al Quwain",
        description: "CLARO provides painting works, cleaning services and technical maintenance for residential and commercial properties in Umm Al Quwain, UAE.",
        ogType: "website",
        ogImage: "/assets/claro-logo.webp",
        schemas: [
            localBusinessSchema
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: pageRef,
        className: "hp-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSlider$2f$HeroSlider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                lineNumber: 135,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarqueeBar$2f$Marqueebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                lineNumber: 136,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hp-stats",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hp-stats-inner container",
                    children: stats.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hp-stat reveal",
                            style: {
                                '--delay': `${i * 0.1}s`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hp-stat-num",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountUp, {
                                        target: s.num,
                                        suffix: s.suffix
                                    }, void 0, false, {
                                        fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                        lineNumber: 142,
                                        columnNumber: 58
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 142,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hp-stat-bar"
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 143,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hp-stat-label",
                                    children: s.label
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 144,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                            lineNumber: 141,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                    lineNumber: 139,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                lineNumber: 138,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hp-services section",
                id: "services",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hp-section-eyebrow reveal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hp-eyebrow-line"
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 153,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hp-eyebrow-text",
                                    children: "What We Offer"
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 154,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hp-eyebrow-line"
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 155,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                            lineNumber: 152,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "hp-section-heading reveal",
                            children: [
                                "Our ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 157,
                                    columnNumber: 67
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hp-services-grid",
                            children: services.map((svc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hp-svc-card reveal",
                                    style: {
                                        '--delay': `${i % 5 * 0.07}s`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hp-svc-img-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: svc.img,
                                                    alt: svc.title,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                    lineNumber: 168,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hp-svc-overlay"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                    lineNumber: 169,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                            lineNumber: 167,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hp-svc-body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "hp-svc-title",
                                                    children: svc.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "hp-svc-desc",
                                                    children: svc.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                    lineNumber: 173,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                            lineNumber: 171,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 161,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                            lineNumber: 159,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                    lineNumber: 151,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                lineNumber: 150,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hp-about section",
                id: "about",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hp-about-slash",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container hp-about-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hp-about-visual reveal",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hp-about-img-frame",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/assets/claro-storefront.webp",
                                        alt: "Claro storefront in Umm Al Quwain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                        lineNumber: 186,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 185,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                lineNumber: 184,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hp-about-text reveal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hp-section-eyebrow hp-eyebrow-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hp-eyebrow-line"
                                            }, void 0, false, {
                                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                lineNumber: 191,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hp-eyebrow-text",
                                                children: "About CLARO"
                                            }, void 0, false, {
                                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                lineNumber: 192,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                        lineNumber: 190,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "hp-section-heading",
                                        children: [
                                            "Your Trusted",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                lineNumber: 195,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: "Service"
                                            }, void 0, false, {
                                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                lineNumber: 195,
                                                columnNumber: 47
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                lineNumber: 195,
                                                columnNumber: 63
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Provider"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                        lineNumber: 194,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "CLARO is a trusted, customer-focused service provider in Umm Al Quwain, specializing in high-quality painting works, reliable technical services and hygienic water tank cleaning for residential and commercial properties."
                                    }, void 0, false, {
                                        fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                        lineNumber: 197,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Professionalism, expertise and a client-centric approach guide our work across every service division."
                                    }, void 0, false, {
                                        fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                        lineNumber: 202,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hp-features-grid",
                                        children: features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hp-feature reveal",
                                                style: {
                                                    '--delay': `${i * 0.08}s`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "hp-feature-icon",
                                                        children: f.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                        lineNumber: 209,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: f.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                                lineNumber: 211,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: f.sub
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                                lineNumber: 212,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                        lineNumber: 210,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                lineNumber: 208,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                        lineNumber: 206,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                lineNumber: 189,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                        lineNumber: 183,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                lineNumber: 181,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hp-contact section",
                id: "contact",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hp-section-eyebrow reveal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hp-eyebrow-line"
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 224,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hp-eyebrow-text",
                                    children: "Get In Touch"
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 225,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hp-eyebrow-line"
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 226,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                            lineNumber: 223,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "hp-section-heading reveal",
                            children: [
                                "Visit ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Our Showroom"
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 228,
                                    columnNumber: 69
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                            lineNumber: 228,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hp-contact-layout",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hp-contact-cards reveal",
                                    children: [
                                        {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMapMarkerAlt"], {}, void 0, false, {
                                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                lineNumber: 233,
                                                columnNumber: 43
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            title: 'Find Us',
                                            lines: [
                                                'A8 Warehouse, Al Maqta 2',
                                                'Umm Al Quwain, UAE'
                                            ],
                                            links: [
                                                {
                                                    href: locationUrl,
                                                    label: 'Open in Google Maps'
                                                }
                                            ]
                                        },
                                        {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhoneAlt"], {}, void 0, false, {
                                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                lineNumber: 238,
                                                columnNumber: 43
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            title: 'Call Us',
                                            links: [
                                                {
                                                    href: 'tel:+971545484873',
                                                    label: '+971 54 548 4873'
                                                }
                                            ]
                                        },
                                        {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {}, void 0, false, {
                                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                lineNumber: 242,
                                                columnNumber: 43
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            title: 'Service Divisions',
                                            lines: [
                                                'Painting Works',
                                                'Cleaning Services',
                                                'Technical Services'
                                            ]
                                        },
                                        {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {}, void 0, false, {
                                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                lineNumber: 246,
                                                columnNumber: 43
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            title: 'Email',
                                            links: [
                                                {
                                                    href: 'mailto:ajmalclaro@gmail.com',
                                                    label: 'ajmalclaro@gmail.com'
                                                }
                                            ]
                                        }
                                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hp-contact-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hp-contact-card-icon",
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                    lineNumber: 251,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hp-contact-card-body",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                            lineNumber: 253,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        item.lines?.map((l, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: l
                                                            }, j, false, {
                                                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                                lineNumber: 254,
                                                                columnNumber: 68
                                                            }, ("TURBOPACK compile-time value", void 0))),
                                                        item.links?.map((l, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: l.href,
                                                                    children: l.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 79
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, j, false, {
                                                                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                                lineNumber: 255,
                                                                columnNumber: 68
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                                    lineNumber: 252,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                            lineNumber: 250,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 230,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hp-map reveal",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        src: "https://www.google.com/maps?q=25.5039005,55.5543137&output=embed",
                                        allowFullScreen: "",
                                        loading: "lazy",
                                        referrerPolicy: "no-referrer-when-downgrade",
                                        title: "CLARO location in Umm Al Quwain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                        lineNumber: 261,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                                    lineNumber: 260,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                            lineNumber: 229,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                    lineNumber: 222,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
                lineNumber: 221,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/site-pages/HomePage/HomePage.jsx",
        lineNumber: 133,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(HomePage, "H5yVe72BmtG+eNcYoau6XoBdobo=", false, function() {
    return [
        useReveal,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSeo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c1 = HomePage;
const __TURBOPACK__default__export__ = HomePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "CountUp");
__turbopack_context__.k.register(_c1, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1l9qjzwj9pqhl._.js.map