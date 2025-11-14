// HeroSlider.jsx

import React from 'react';
import Image from 'next/image';
import Carousel from 'components/Carousel';
import NextLink from './NextLink';

/**
 * HeroSlider component displaying a fullscreen autoplaying carousel
 * of marketing messages, each with image background and CTA.
 *
 * @returns {JSX.Element}
 */
const Hero = () => {
  // Define the slides with content and animation configurations
  const slides = [
    {
      image: '/img/slide-img-1.webp',
      title: 'Trusted Wholesale Supplier of Fresh Fruits & Vegetables for Hotels',
      description: 'Delivering Premium-Quality Produce Straight to Your Kitchen Daily',
      btnTitle: 'Why Choose Us?',
      btnUrl: '/#whychoose',
      animation: 'slideInUp',
    },
    {
      image: '/img/slide-img-2.webp',
      title: 'Reliable Wholesale Source for Bakery Goods & Grocery Essentials',
      description: 'Supplying High-Quality Ingredients for Chefs and Culinary Experts',
      btnTitle: 'Explore Our Product',
      btnUrl: '/#',
      animation: 'zoomIn',
    },
    {
      image: '/img/slide-img-3.webp',
      title: 'Hotel Supply Experts for Non-Food Essentials Across Kutch',
      description: 'Streamlining Hotel Operations with Trusted Wholesale Solutions',
      btnTitle: 'Industries We Serve',
      btnUrl: '/#',
      animation: 'slideInDown',
    },
  ];

  return (
    <section className="hero">
      <div className="swiper-container swiper-hero dots-over" style={{ height: '100vh' }}>
        <Carousel
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`swiper-slide bg-overlay bg-dark position-relative animate__animated animate__${slide.animation}`}
              style={{ height: '100vh' }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1}: ${slide.title}`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="swiper-slide-bg"
                priority={index === 0}
              />

              <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center position-relative z-1">
                <h1 className={`display-1 fs-56 mb-4 text-white animate__animated animate__${slide.animation} animate__delay-1s`}>
                  {slide.title}
                </h1>
                <p className={`fs-24 lh-sm mb-7 text-white animate__animated animate__${slide.animation} animate__delay-2s`}>
                  {slide.description}
                </p>
                <div className={`animate__animated animate__${slide.animation} animate__delay-3s`}>
                  <NextLink
                    title={slide.btnTitle}
                    href={slide.btnUrl}
                    className="btn btn-md primary-bg rounded-pill text-white"
                    aria-label={`Read more: ${slide.btnTitle}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;

