'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { galleryCategories, galleryItems } from './galleryData';
import './GalleryPage.css';

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const filteredItems = activeCategory === 'all'
        ? galleryItems
        : activeCategory === 'videos'
            ? galleryItems.filter((item) => item.type === 'video')
            : galleryItems.filter((item) => item.category === activeCategory || item.finishCategory === activeCategory);

    return (
        <main className="gallery-page">
            <section className="gallery-hero">
                <div className="container gallery-hero-inner">
                    <div className="gallery-eyebrow">CLARO PROJECTS</div>
                    <h1>Our <span>Gallery</span></h1>
                    <p>Explore texture work, decorative finishes and automotive projects from CLARO.</p>
                    <div className="gallery-total">{galleryItems.length} photos and videos</div>
                </div>
            </section>

            <section className="gallery-content container" aria-label="CLARO project gallery">
                <div className="gallery-filter-list" role="group" aria-label="Filter gallery by category">
                    {galleryCategories.map((category) => (
                        <button
                            key={category.id}
                            type="button"
                            className={`gallery-filter${activeCategory === category.id ? ' active' : ''}`}
                            aria-pressed={activeCategory === category.id}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <p className="gallery-results" aria-live="polite">
                    Showing {filteredItems.length} {filteredItems.length === 1 ? 'project' : 'projects'}
                </p>

                {filteredItems.length > 0 ? (
                    <div className="gallery-grid">
                        {filteredItems.map((item) => (
                            <article className="gallery-card" key={item.id}>
                                <div className={`gallery-card-media${item.mediaShape ? ` gallery-card-media--${item.mediaShape}` : ''}`}>
                                    {item.type === 'video' ? (
                                        <video
                                            src={item.src}
                                            poster={item.poster}
                                            controls
                                            preload="none"
                                            playsInline
                                            aria-label={item.alt}
                                        />
                                    ) : (
                                        <img src={item.src} alt={item.alt} loading="lazy" />
                                    )}
                                    {item.type === 'video' && (
                                        <span className="gallery-video-label">
                                            <FaPlay aria-hidden="true" /> Video
                                        </span>
                                    )}
                                </div>
                                <div className="gallery-card-copy">
                                    <span>{item.categoryLabel}</span>
                                    <h2>{item.title}</h2>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <p className="gallery-empty">No projects are available in this category yet.</p>
                )}

                <div className="gallery-home-link-wrap">
                    <Link href="/#gallery" className="gallery-home-link">
                        Back to the home gallery <FaArrowRight aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
