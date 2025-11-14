/**
 * @file WhyChoose.jsx
 * @description Responsive card grid to showcase "Why Choose Us" features.
 */

import Image from 'next/image';
import PropTypes from 'prop-types';

const WhyChoose = ({ arr = [] }) => {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  return (
    <div className="row gy-10 gx-10 justify-content-around">
      {arr.map(({ id, title, description, icon, bgImg, color }) => (
        <div className="col-md-6 col-xxl-4 col-10" key={id}>
          <div
            className="shadow-lg rounded-xl cards m-5 m-xl-0 position-relative"
            style={{ backgroundColor: color }}
          >
            <div className="card-body d-flex flex-column flex-lg-row align-items-center position-relative">
              {/* Text Content */}
              <div
                className="d-flex flex-column align-items-center align-items-lg-start order-2 order-lg-1 p-3"
                style={{ flex: 1 }}
              >
                <h3 className="fs-24 text-white">{title}</h3>
                <p className="text-justify text-white m-0">{description}</p>
              </div>

              {/* Image Section */}
              <div
                className="order-1 position-relative br-radius wd-100"
                style={{
                  backgroundImage: `url(${bgImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  flex: 1,
                  zIndex: 1,
                }}
                aria-hidden="true"
              >
                {/* Overlay */}
                <div
                  className="overlay position-absolute br-radius"
                  style={{
                    backgroundColor: color,
                    opacity: 0.5,
                    zIndex: 2,
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                  }}
                ></div>

                {/* Icon */}
                <div className="position-relative w-100 h-100 z-3">
                  <Image
                    src={icon}
                    alt={`${title} | FoodStuff Food Service`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="p-md-10 p-10 position-relative"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

WhyChoose.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      bgImg: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
};

export default WhyChoose;
