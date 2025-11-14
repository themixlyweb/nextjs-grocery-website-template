// File Type: JSX - Next.js Homepage Component
// Description: Refactored Home Page with Intersection Observer, Semantic Layout, and Performance Enhancements

import { Fragment } from 'react';
import Hero from 'components/Hero';
import PageProgress from 'components/PageProgress';
import About2 from 'components/About2';
import WhyChoose from 'components/WhyChoose';
import { whyChoose } from '../src/data';

/**
 * AnimatedImage - A reusable animated image component with slide-in effect.
 * @param {Object} props
 * @param {string} props.src - Image source path.
 * @param {string} props.alt - Alternate text for accessibility.
 * @param {string} [props.position='right'] - Animation direction: 'right' or 'left'.
 * @param {object} props.refProp - Intersection observer reference.
 * @param {boolean} props.isVisible - Visibility state from observer.
 * @param {number} props.width - Width of the image.
 * @param {number} props.height - Height of the image.
 * @param {string} props.className - Additional classNames for the container.
 */

/**
 * Home - Main homepage component rendering all key sections
 */
const Home = () => {
  return (
    <Fragment>
      <PageProgress />

      <main className="content-wrapper overflow-x-hidden">
        <Hero />

        {/* About Section */}
        <section className="wrapper" id="about-us">
          <div className="container-fluid d-flex">
            <About2 />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="wrapper" id="whychoose">
          <div className="container py-10 py-md-12">
            <div className="row d-flex align-items-center mb-10 justify-content-center">
              <h2 className="fs-42 fw-bold text-center">Why Choose Us</h2>
            </div>
            <WhyChoose arr={whyChoose} />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;