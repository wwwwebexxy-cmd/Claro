import React, { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroSlider.css';

const slides = [
  {
    image: '/assets/claro-generated-painting-hero.webp',
    subtitle: 'CLARO · Umm Al Quwain, UAE & India',
    title: 'Coating <span>Works</span>',
    description: 'Coating, texture finishes and specialist surface treatments for homes and businesses.',
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
    subtitle: 'Coating Works · Umm Al Quwain',
    title: 'Dipping &amp; <span>Chrome Finishing</span>',
    description: 'Explore Claro Coating, cleaning and technical service divisions.',
    btnText: 'View Services'
  }
];

/* ── Animation Variants ────────────────────────────── */

// Background image: cinematic zoom-out (scale 1.15 → 1)
const bgVariants = {
  initial: { scale: 1.2 },
  animate: {
    scale: 1,
    transition: {
      duration: 6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Subtitle: fade-in + slide-up (first text to appear)
const subtitleVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.4,
    },
  },
};

// Title: fade-in + slide-up (slightly later, more dramatic)
const titleVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.65,
    },
  },
};

// CTA Button: fade-in + slide-up (last element, cinematic delay)
const btnVariants = {
  initial: { opacity: 0, y: 35 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.9,
    },
  },
};

/* ── Slide Content Component ─────────────────────── */
const SlideContent = ({ slide, isActive }) => {
  // Re-trigger animations using the key prop when slide becomes active
  if (!isActive) return null;

  return (
    <>
      <motion.div
        className="slide-subtitle"
        variants={subtitleVariants}
        initial="initial"
        animate="animate"
        key={`sub-${slide.subtitle}`}
      >
        {slide.subtitle}
      </motion.div>

      <motion.h1
        className="slide-title"
        variants={titleVariants}
        initial="initial"
        animate="animate"
        key={`title-${slide.title}`}
        dangerouslySetInnerHTML={{ __html: slide.title }}
      />

      <motion.div
        variants={btnVariants}
        initial="initial"
        animate="animate"
        key={`btn-${slide.btnText}`}
      >
        <a href="#services" className="slide-btn">
          {slide.btnText} <ArrowRight size={20} />
        </a>
      </motion.div>
    </>
  );
};

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  return (
    <div className="artistic-parallax-slider">
      <Swiper
        speed={1200}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Parallax, Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* ── Animated Background Image (zoom-out) ── */}
            <motion.div
              className="parallax-bg"
              style={slide.image ? { backgroundImage: `url(${slide.image})` } : undefined}
              variants={bgVariants}
              initial="initial"
              animate={activeIndex === index ? 'animate' : 'initial'}
              key={`bg-${index}-${activeIndex === index ? 'active' : 'idle'}`}
            >
              {slide.video && (
                <video src={slide.video} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
              )}
            </motion.div>

            <div className="slide-overlay"></div>

            {/* ── Animated Text Content ── */}
            <div className="slide-content">
              <SlideContent
                slide={slide}
                isActive={activeIndex === index}
                key={`content-${index}-${activeIndex === index ? 'active' : 'idle'}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
