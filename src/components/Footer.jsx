import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import { usefulLinks } from '../data.js';
import { Fragment } from 'react';

const widget = (list, title) => {
  return (
    <div className="widget">
      <h3 className="widget-title fs-24 mb-3">{title}</h3>
      <ul className="list-unstyled text-reset mb-0">
        {list.map(({ url, title, id }) => (
          <li key={id}>
            <NextLink href={url} title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Fragment>
      <footer
        className="footer-section overflow-hidden"
        style={{
          backgroundImage: 'url(/img/footer-bg.webp)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        aria-label="Footer"
      >
        <div className="container pt-10 pt-md-12 pb-24">
          <div className="row gx-10 justify-content-between">
            {/* Logo Section */}
            <div className="col-lg-3">
              <div className="widget d-flex flex-column align-items-start">
                {/* Placeholder for Logo */}
                <div className="logo-placeholder mb-4">
                  <NextLink
                    href="/"
                    title="Feastly"
                    className="fw-bold display-2 text-main "
                  />
                </div>
                <p className="lead mb-2 text-justify fs-18">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, unde.
                </p>
              </div>
            </div>

            {/* Other Sections */}
            <div className="col-sm-6 col-md-4 col-lg-3 mt-5 mt-lg-0  justify-content-md-center d-flex">
              {widget(usefulLinks, 'Useful Links')}
            </div>

            {/* Contact Section */}
            <div className="col-md-4 col-lg-3 mt-5 mt-lg-0 justify-content-md-center d-flex">
              <div className="widget">
                <h3 className="widget-title fs-24 mb-3">Contact Us</h3>
                <div className="d-flex align-items-start">
                  <i className="uil uil-location-pin-alt fs-30" aria-label="Location" />
                  <address className="ms-2 m-0 mt-1">
                    123 Tech Park, Ta. Richmond, Dist. Greater London, United Kingdom – SW1A 1AA
                  </address>
                </div>
                <div className="d-flex align-items-center">
                  <i className="uil uil-envelope fs-26" aria-label="Email" />
                  <a href="mailto:info@company.com" className="link-body ms-2" aria-label="Send an email">
                    info@company.com
                  </a>
                </div>
                <div className="d-flex">
                  <i className="uil uil-phone-volume fs-26" aria-label="Phone" />
                  <p className="mt-1 ms-2 fs-18">
                    <a href="tel:+919999999999" aria-label="Call phone number">
                      +91 99999 99999
                    </a>
                  </p>
                </div>
                <div className="d-flex align-items-start flex-column">
                  <SocialLinks className="nav social text-md-end" />
                </div>
              </div>
            </div>
            {/* Embedded Map */}
            <div className="col-md-3 col-lg-3 mt-md-5 mt-lg-0 mt-10 d-flex justify-content-md-center">
              <div className="widget">
                <iframe
                  title="FoodStuff Food Service Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.978014612501!2d-121.94509168469229!3d37.54826927980085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc7e3c3b7e7c1%3A0x6f8a645f82fa4b78!2s789%20Innovation%20Dr%2C%20Fremont%2C%20CA%2094538%2C%20USA!5e0!3m2!1sen!2sin!4v1718278912937!5m2!1sen!2sin"
                  width="350"
                  height="300"
                  className="border rounded w-100"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bg d-md-flex align-items-center justify-content-center">
        <p className="mb-0 py-1 text-white text-center">
          © {currentYear} FoodStuff Food Service. All rights reserved.
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
