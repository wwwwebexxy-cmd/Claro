'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaBolt, FaShieldAlt, FaMagic, FaTint, FaPhoneAlt, FaStar, FaChevronDown } from 'react-icons/fa';
import './ProductsPage.css';
import { motion } from 'framer-motion';
import useSeo from '../../hooks/useSeo';
import { branchLocationSchemas } from '../../branchLocations';
import { claroSocialImage } from '../../siteMetadata';

const useReveal = () => {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        const elements = ref.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));
        return () => elements?.forEach((el) => observer.unobserve(el));
    }, []);
    return ref;
};

const products = [
    {
        img: '/assets/claro-painting-work.webp',
        alt: 'Painter applying a finish to an interior wall',
        title: ['Painting & ', 'Texture Work'],
        desc: 'Interior and exterior painting, including decorative texture paint work for residential and commercial properties.',
        icon: <FaTint />,
        heading: 'Services Included',
        points: ['Painting works', 'Texture paint work', 'Residential and commercial projects'],
    },
    {
        img: '/assets/claro-gold-plating-faucet.webp',
        alt: 'Claro gold-plating work on a decorative piece',
        title: ['Gold ', 'Plating'],
        desc: 'Gold plating services for decorative pieces and selected surfaces.',
        icon: <FaMagic />,
        heading: 'Service Details',
        points: ['Gold plating', 'Decorative surface finishing', 'Part of the Claro painting works division'],
        reverse: true,
    },
    {
        img: '/assets/claro-service-gallery.webp',
        alt: 'Claro service collage featuring chrome-finished wheels and fixtures',
        title: ['Chrome ', 'Finishing'],
        desc: 'Chrome finishing for plastic, fiber, steel, metal, wood, stainless steel, mild steel and ceramic surfaces.',
        icon: <FaStar />,
        heading: 'Finishing Surfaces',
        points: ['Plastic and fiber', 'Steel, metal and wood', 'Stainless steel, mild steel and ceramic'],
    },
    {
        img: '/assets/claro-spray-painting.webp',
        alt: 'Technician spray-painting a surface',
        title: ['Dipping & ', 'Spray Painting'],
        desc: 'Dipping and spray painting works for a range of shapes and surfaces.',
        icon: <FaMagic />,
        heading: 'Painting Works',
        points: ['Dipping', 'Spray painting', 'Surface finishing for different shapes'],
        reverse: true,
    },
    {
        img: '/assets/claro-bathtub-refinishing.webp',
        alt: 'Refinished bathtub in a modern bathroom',
        title: ['Bathtub ', 'Refinishing'],
        desc: 'Bathtub refinishing to restore worn or stained surfaces.',
        icon: <FaTint />,
        heading: 'Painting Works',
        points: ['Bathtub refinishing', 'Surface restoration', 'A listed Claro painting service'],
    },
    {
        img: '/assets/claro-epoxy-floor-coating.webp',
        alt: 'Epoxy floor coating being applied in a commercial interior',
        title: ['Epoxy Floor ', 'Coating'],
        desc: 'Epoxy floor coating for residential and commercial properties.',
        icon: <FaBolt />,
        heading: 'Painting Works',
        points: ['Epoxy floor coating', 'Floor finishing', 'Residential and commercial projects'],
        reverse: true,
    },
    {
        img: '/assets/claro-building-cleaning.webp',
        alt: 'Building cleaning in progress',
        title: ['Building Cleaning & ', 'Disinfection'],
        desc: 'Cleaning, disinfection and sterilization services for properties.',
        icon: <FaShieldAlt />,
        heading: 'Cleaning Services',
        points: ['Building cleaning', 'Disinfection and sterilization', 'Cleaning for residential and commercial properties'],
    },
    {
        img: '/assets/claro-water-tank-cleaning.webp',
        alt: 'Water tank cleaning work',
        title: ['Water Tank & Pipeline ', 'Disinfection'],
        desc: 'Water tank cleaning and pipeline disinfection services.',
        icon: <FaTint />,
        heading: 'Cleaning Services',
        points: ['Water tank cleaning', 'Pipeline disinfection', 'Part of the Claro cleaning services division'],
        reverse: true,
    },
    {
        img: '/assets/claro-electrical-maintenance.webp',
        alt: 'Technician carrying out electrical maintenance',
        title: ['Electrical & Plumbing ', 'Maintenance'],
        desc: 'Electrical and plumbing maintenance for residential and commercial properties.',
        icon: <FaBolt />,
        heading: 'Technical Services',
        points: ['Electrical maintenance', 'Plumbing maintenance', 'Property maintenance services'],
    },
    {
        img: '/assets/claro-carpentry-services.webp',
        alt: 'Carpentry work taking place in an interior',
        title: ['Carpentry, Flooring & ', 'Ceiling Works'],
        desc: 'Carpentry services, flooring installation with tile works, ceiling works and property refurbishment.',
        icon: <FaMagic />,
        heading: 'Technical Services',
        points: ['Carpentry services', 'Flooring installation and tile works', 'Ceiling works and property refurbishment'],
        reverse: true,
    }
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2
    }
  }
};

const ProductsPage = () => {
    const pageRef = useReveal();
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
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
        },
        "subOrganization": branchLocationSchemas
    };

    const serviceSchemas = products.map((service) => ({
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
                    "text": "CLARO is based at A8 Warehouse, Al Maqta 2, Umm Al Quwain, UAE, with a Kerala branch on Koduvally Road, Omassery."
                }
            }
        ]
    };

    useSeo({
        title: "CLARO Services | Umm Al Quwain, UAE",
        description: "Explore CLARO painting works, gold plating, chrome finishing, cleaning services and technical maintenance.",
        ogType: "website",
        ogImage: claroSocialImage,
        schemas: [...serviceSchemas, faqSchema]
    });

    const faqQuestions = faqSchema.mainEntity.map(item => ({
        q: item.name,
        a: item.acceptedAnswer.text
    }));

    const toggleFaq = (index) => {
        setOpenFaq(prev => (prev === index ? null : index));
    };

    return (
        <div ref={pageRef}>
            {/* ========== PAGE HERO ========== */}
            <section className="page-hero">
                <div className="container">
                    <motion.h1 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.2 }} 
                        variants={textVariants}
                    >
                        Our <span>Services</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Explore the painting, cleaning and technical services available from CLARO in Umm Al Quwain.
                    </motion.p>
                </div>
            </section>

            {/* ========== PRODUCT SECTIONS ========== */}
            {products.map((product, i) => (
                <section
                    className="product-section"
                    key={i}
                    style={product.reverse ? { background: 'var(--bg-secondary)' } : {}}
                >
                    <div className="container">
                        <div className={`product-layout ${product.reverse ? 'reverse' : ''}`}>
                            <motion.div 
                                className="product-image"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
                                }}
                            >
                                <img src={product.img} alt={product.alt} />
                            </motion.div>
                            <div className="product-content">
                                <motion.h2 
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={textVariants}
                                >
                                    {product.title[0]}<span>{product.title[1]}</span>
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 30 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    {product.desc}
                                </motion.p>
                                <motion.div 
                                    className="importance-box"
                                    initial={{ opacity: 0, y: 30 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <h4>{product.icon} {product.heading}</h4>
                                    <ul>
                                        {product.points.map((point, j) => (
                                            <motion.li 
                                                key={j}
                                                initial={{ opacity: 0, x: -10 }} 
                                                whileInView={{ opacity: 1, x: 0 }} 
                                                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 + (j * 0.1) }}
                                                viewport={{ once: true, amount: 0.2 }}
                                            >
                                                {point}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* ========== FAQ ACCORDION SECTION (AEO/SEO) ========== */}
            <section className="products-faq-section">
                <div className="container">
                    <div className="products-faq-eyebrow">
                        <span className="faq-eyebrow-line" />
                        <span className="faq-eyebrow-text">FAQ</span>
                        <span className="faq-eyebrow-line" />
                    </div>
                    <h2 className="products-faq-heading">Frequently Asked <em>Questions</em></h2>
                    <div className="products-faq-list">
                        {faqQuestions.map((item, i) => (
                            <div 
                                className={`products-faq-item ${openFaq === i ? 'active' : ''}`} 
                                key={i}
                            >
                                <button className="products-faq-question" onClick={() => toggleFaq(i)} aria-expanded={openFaq === i}>
                                    <span>{item.q}</span>
                                    <FaChevronDown className="products-faq-icon" />
                                </button>
                                <div className="products-faq-answer">
                                    <div className="products-faq-answer-content">
                                        <p>{item.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA BANNER ========== */}
            <section className="section">
                <div className="container">
                    <motion.div 
                        className="cta-banner"
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2>Need Painting, Cleaning or Technical Services?</h2>
                        <p>Contact CLARO to discuss your residential or commercial service requirements.</p>
                        <a href="tel:+971545484873" className="btn-white"><FaPhoneAlt /> Call +971 54 548 4873</a>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
