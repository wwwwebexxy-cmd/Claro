'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const [servicesExpanded, setServicesExpanded] = useState(false);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link href="/" className="logo">
                            <img src="/assets/claro-logo.png" alt="CLARO" className="footer-logo-img" />
                        </Link>
                        <p>CLARO provides painting works, technical services and cleaning services for residential and commercial properties in Umm Al Quwain, UAE.</p>
                    </div>

                    <div className="footer-top-grid">
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/products">Services</Link></li>
                                <li><a href="/#services">Services</a></li>
                                <li><a href="/#about">About Us</a></li>
                                <li><a href="/#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><Link href="/products">Painting & Texture Work</Link></li>
                                <li><Link href="/products">Gold Plating</Link></li>
                                <li><Link href="/products">Chrome Finishing</Link></li>
                                <li><Link href="/products">Dipping & Spray Painting</Link></li>
                                <li><Link href="/products">Bathtub Refinishing</Link></li>
                            </ul>

                            {/* Collapsible extra services */}
                            <div className={`services-extra ${servicesExpanded ? 'services-extra--open' : ''}`}>
                                <ul>
                                    <li><Link href="/products">Epoxy Floor Coating</Link></li>
                                    <li><Link href="/products">Building Cleaning</Link></li>
                                    <li><Link href="/products">Water Tank Cleaning</Link></li>
                                    <li><Link href="/products">Electrical & Plumbing</Link></li>
                                    <li><Link href="/products">Carpentry & Property Refurbishment</Link></li>
                                </ul>
                            </div>

                            <button
                                className="services-toggle"
                                onClick={() => setServicesExpanded(prev => !prev)}
                                aria-label={servicesExpanded ? 'Show fewer services' : 'Show more services'}
                            >
                                {servicesExpanded ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
                            </button>
                        </div>

                        <div className="footer-col">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="tel:+971545484873"><FaPhoneAlt size={14} /> +971 54 548 4873</a></li>
                                <li><a href="mailto:ajmalclaro@gmail.com"><FaEnvelope size={14} /> ajmalclaro@gmail.com</a></li>
                                <li><a href="https://www.google.com/maps?q=25.5039005,55.5543137"><FaMapMarkerAlt size={14} /> A8 Warehouse, Al Maqta 2, Umm Al Quwain</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; {new Date().getFullYear()} CLARO. All rights reserved.</p>
                        <p className="developer-credit">
                            Painting Works · Technical Services · Cleaning Services
                        </p>
                    </div>
                    <div className="social-links">
                        <a href="https://www.instagram.com/claroheadlight_uae?utm_source=qr" className="social-link" aria-label="Instagram"><FaInstagram /></a>
                        <a href="tel:+971545484873" className="social-link" aria-label="Call CLARO"><FaPhoneAlt /></a>
                        <a href="https://www.google.com/maps?q=25.5039005,55.5543137" className="social-link" aria-label="CLARO location"><FaMapMarkerAlt /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
