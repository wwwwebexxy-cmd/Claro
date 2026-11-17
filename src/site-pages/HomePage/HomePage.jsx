'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    FaAward, FaShieldAlt,
    FaBolt, FaStar, FaMapMarkerAlt, FaPhoneAlt,
    FaEnvelope, FaArrowRight,
} from 'react-icons/fa';
import Link from 'next/link';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import MarqueeBar from '../../components/MarqueeBar/Marqueebar';
import { galleryPreviewItems } from '../GalleryPage/galleryData';
import { branchLocations, branchLocationSchemas } from '../../branchLocations';
import useSeo from '../../hooks/useSeo';
import { claroMetaDescription, claroSocialImage } from '../../siteMetadata';
import './HomePage.css';

const locationUrl = 'https://www.google.com/maps?q=25.5039005,55.5543137';

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
            { threshold: 0.06 }
        );
        const elements = ref.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));
        return () => elements?.forEach((el) => observer.unobserve(el));
    }, []);
    return ref;
};

const CountUp = ({ target, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const steps = 60;
                    const increment = target / steps;
                    let current = 0;
                    const interval = setInterval(() => {
                        current += increment;
                        if (current >= target) { setCount(target); clearInterval(interval); }
                        else setCount(Math.floor(current));
                    }, 1800 / steps);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);
    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

/* tag field removed — badges no longer rendered */
const services = [
    { img: '/assets/claro-painting-work.webp', title: 'Painting & Texture Work', desc: 'Interior and exterior painting with decorative texture finishes.' },
    { img: '/assets/claro-gold-plating.webp', title: 'Gold Plating', desc: 'Gold plating for decorative pieces and selected surfaces.' },
    { img: '/assets/claro-service-gallery.webp', title: 'Chrome Finishing', desc: 'Chrome finishing for plastic, fiber, steel, metal, wood, stainless steel, mild steel and ceramic.' },
    { img: '/assets/claro-dipping-work.webp', title: 'Dipping & Spray Painting', desc: 'Surface finishing options for a range of shapes, parts and materials.' },
    { img: '/assets/claro-bathtub-refinishing.webp', title: 'Bathtub Refinishing', desc: 'Refinishing work for worn or stained bathtubs.' },
    { img: '/assets/claro-epoxy-floor-coating.webp', title: 'Epoxy Floor Coating', desc: 'Epoxy coating for floors in residential and commercial spaces.' },
    { img: '/assets/claro-building-cleaning.webp', title: 'Building Cleaning', desc: 'Cleaning services for residential and commercial properties.' },
    { img: '/assets/claro-water-tank-cleaning.webp', title: 'Tank & Pipeline Cleaning', desc: 'Water tank cleaning and pipeline disinfection.' },
    { img: '/assets/claro-electrical-maintenance.webp', title: 'Electrical & Plumbing', desc: 'Electrical and plumbing maintenance services.' },
    { img: '/assets/claro-carpentry-services.webp', title: 'Carpentry & Refurbishment', desc: 'Carpentry, flooring installation, ceiling works and property refurbishment.' },
];

const stats = [
    { num: 3, suffix: '', label: 'Service Divisions' },
    { num: 8, suffix: '', label: 'Painting Services' },
    { num: 4, suffix: '', label: 'Cleaning Services' },
    { num: 6, suffix: '', label: 'Technical Services' },
];

const features = [
    { icon: <FaAward />, label: 'Professionalism', sub: 'A core company value' },
    { icon: <FaShieldAlt />, label: 'Expertise', sub: 'Painting, cleaning and technical services' },
    { icon: <FaBolt />, label: 'Client-Centric', sub: 'Focused on each project' },
    { icon: <FaStar />, label: 'Residential & Commercial', sub: 'Services for both property types' },
];

const HomePage = () => {
    const pageRef = useReveal();

    useEffect(() => {
        if (window.location.hash) {
            const el = document.querySelector(window.location.hash);
            if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    }, []);

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
        },
        "subOrganization": branchLocationSchemas
    };

    useSeo({
        title: "CLARO | Painting, Cleaning & Technical Services in Umm Al Quwain",
        description: claroMetaDescription,
        ogType: "website",
        ogImage: claroSocialImage,
        schemas: [localBusinessSchema]
    });

    return (
        <div ref={pageRef} className="hp-root">

            <HeroSlider />
            <MarqueeBar />

            <section className="hp-stats">
                <div className="hp-stats-inner container">
                    {stats.map((s, i) => (
                        <div className="hp-stat reveal" key={i} style={{ '--delay': `${i * 0.1}s` }}>
                            <div className="hp-stat-num"><CountUp target={s.num} suffix={s.suffix} /></div>
                            <div className="hp-stat-bar" />
                            <div className="hp-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="hp-services section" id="services">
                <div className="container">
                    <div className="hp-section-eyebrow reveal">
                        <span className="hp-eyebrow-line" />
                        <span className="hp-eyebrow-text">What We Offer</span>
                        <span className="hp-eyebrow-line" />
                    </div>
                    <h2 className="hp-section-heading reveal">Our <em>Services</em></h2>

                    <div className="hp-services-grid">
                        {services.map((svc, i) => (
                            <div
                                className="hp-svc-card reveal"
                                key={i}
                                style={{ '--delay': `${(i % 5) * 0.07}s` }}
                            >
                                {/* No tag badge */}
                                <div className="hp-svc-img-wrap">
                                    <img src={svc.img} alt={svc.title} loading="lazy" />
                                    <div className="hp-svc-overlay" />
                                </div>
                                <div className="hp-svc-body">
                                    <h3 className="hp-svc-title">{svc.title}</h3>
                                    <p className="hp-svc-desc">{svc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="hp-about section" id="about">
                <div className="hp-about-slash" aria-hidden="true" />
                <div className="container hp-about-grid">
                    <div className="hp-about-visual reveal">
                        <div className="hp-about-img-frame">
                            <img src="/assets/claro-storefront.webp" alt="Claro storefront in Umm Al Quwain" />
                        </div>
                    </div>
                    <div className="hp-about-text reveal">
                        <div className="hp-section-eyebrow hp-eyebrow-left">
                            <span className="hp-eyebrow-line" />
                            <span className="hp-eyebrow-text">About CLARO</span>
                        </div>
                        <h2 className="hp-section-heading">
                            Your Trusted<br /><em>Service</em><br />Provider
                        </h2>
                        <p>
                            CLARO is a trusted, customer-focused service provider in Umm Al Quwain,
                            specializing in high-quality painting works, reliable technical services
                            and hygienic water tank cleaning for residential and commercial properties.
                        </p>
                        <p>
                            Professionalism, expertise and a client-centric approach guide our work
                            across every service division.
                        </p>
                        <div className="hp-features-grid">
                            {features.map((f, i) => (
                                <div className="hp-feature reveal" key={i} style={{ '--delay': `${i * 0.08}s` }}>
                                    <div className="hp-feature-icon">{f.icon}</div>
                                    <div>
                                        <strong>{f.label}</strong>
                                        <span>{f.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="hp-gallery section" id="gallery">
                <div className="container">
                    <div className="hp-section-eyebrow reveal">
                        <span className="hp-eyebrow-line" />
                        <span className="hp-eyebrow-text">Selected Projects</span>
                        <span className="hp-eyebrow-line" />
                    </div>
                    <h2 className="hp-section-heading reveal">Our <em>Gallery</em></h2>
                    <p className="hp-gallery-intro reveal">
                        A look at CLARO texture work, decorative finishes and automotive projects.
                    </p>

                    <div className="hp-gallery-grid">
                        {galleryPreviewItems.map((item, i) => (
                            <Link
                                href="/gallery"
                                className="hp-gallery-card reveal"
                                key={item.id}
                                style={{ '--delay': `${i * 0.08}s` }}
                                aria-label={`View gallery: ${item.title}`}
                            >
                                <div className="hp-gallery-image-wrap">
                                    <img src={item.src} alt={item.alt} loading="lazy" />
                                    <span>{item.categoryLabel}</span>
                                </div>
                                <div className="hp-gallery-card-copy">
                                    <h3>{item.title}</h3>
                                    <FaArrowRight aria-hidden="true" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="hp-gallery-action reveal">
                        <Link href="/gallery" className="hp-gallery-more">
                            View More <FaArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="hp-contact section" id="contact">
                <div className="container">
                    <div className="hp-section-eyebrow reveal">
                        <span className="hp-eyebrow-line" />
                        <span className="hp-eyebrow-text">Get In Touch</span>
                        <span className="hp-eyebrow-line" />
                    </div>
                    <h2 className="hp-section-heading reveal">Visit <em>Our Showroom</em></h2>
                    <div className="hp-contact-layout">
                        <div className="hp-contact-cards reveal">
                            {[
                                {
                                    icon: <FaMapMarkerAlt />, title: 'Find Us',
                                    lines: ['A8 Warehouse, Al Maqta 2', 'Umm Al Quwain, UAE'],
                                    links: [{ href: locationUrl, label: 'Open in Google Maps' }],
                                },
                                {
                                    icon: <FaPhoneAlt />, title: 'Call Us',
                                    links: [{ href: 'tel:+971545484873', label: '+971 54 548 4873' }],
                                },
                                {
                                    icon: <FaStar />, title: 'Service Divisions',
                                    lines: ['Painting Works', 'Cleaning Services', 'Technical Services'],
                                },
                                {
                                    icon: <FaEnvelope />, title: 'Email',
                                    links: [{ href: 'mailto:ajmalclaro@gmail.com', label: 'ajmalclaro@gmail.com' }],
                                },
                            ].map((item, i) => (
                                <div className="hp-contact-card" key={i}>
                                    <div className="hp-contact-card-icon">{item.icon}</div>
                                    <div className="hp-contact-card-body">
                                        <h4>{item.title}</h4>
                                        {item.lines?.map((l, j) => <p key={j}>{l}</p>)}
                                        {item.links?.map((l, j) => <p key={j}><a href={l.href}>{l.label}</a></p>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="hp-map reveal">
                            <iframe
                                src="https://www.google.com/maps?q=25.5039005,55.5543137&output=embed"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="CLARO location in Umm Al Quwain"
                            />
                        </div>
                    </div>
                    <div className="hp-local-branches reveal">
                        <h3>Kerala Branches</h3>
                        <div className="hp-branch-grid">
                            {branchLocations.map((location) => (
                                <article className="hp-branch-card" key={location.id}>
                                    <div className="hp-branch-details">
                                        <div>
                                            <h4>{location.title}</h4>
                                            <p>{location.address}</p>
                                            <div className="hp-branch-phones">
                                                {location.phones.map((phone) => (
                                                    <a href={phone.href} key={phone.href}>{phone.label}</a>
                                                ))}
                                            </div>
                                        </div>
                                        <a className="hp-branch-directions" href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                                            Open map
                                        </a>
                                    </div>
                                    <div className="hp-branch-map">
                                        <iframe
                                            src={location.mapEmbedUrl}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title={`${location.title} location map`}
                                        />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
