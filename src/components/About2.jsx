// About2.jsx

import Image from 'next/image';

/**
 * About2 component displays a two-column layout with an image
 * and textual description of the company: "Who We Are" and "What We Do".
 *
 * @component
 * @returns {JSX.Element} About2 section
 */
const About2 = () => {
  return (
    <section className="row gx-lg-8 d-flex align-items-stretch" aria-labelledby="about2-title">
      {/* Left: Feastly Image */}
      <div className="col-lg-6 col-md-12 p-0 d-flex">
        <Image
          src="/img/fresh-reliable-hotel-supplies-across-kutch.webp"
          width={1000}
          height={1000}
          alt="Who We Are and What We Do | FoodStuff Food Service"
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Right: Feastly Information */}
      <div className="col-lg-6 col-md-12 text-md-end text-start d-flex flex-column justify-content-center px-4 py-10">
        <h2 id="about2-title" className="mb-3 fs-42">
          Who We Are
        </h2>
        <p className="mb-4 text-md-end text-start">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores alias dolorum cumque animi fuga exercitationem quis, incidunt consectetur tempore quisquam voluptatibus voluptates. Aspernatur provident delectus expedita? Aperiam labore tenetur, nisi voluptatibus ipsum commodi iure quidem. Aliquam, qui, sapiente labore quasi quae eveniet hic mollitia dolorum sit deleniti debitis? Voluptates ad incidunt, dolorem maxime, non rem hic, sapiente sint dolore autem ipsam laboriosam quod ratione qui alias facilis repellendus! Illo dolores dignissimos neque saepe est, quos aliquam quo sequi culpa blanditiis necessitatibus quisquam, quaerat nulla, consequuntur recusandae sunt velit veritatis accusantium animi beatae voluptatem aperiam enim! Recusandae earum deleniti porro.
        </p>

        <h2 className="mb-3 fs-42">What We Do</h2>
        <p className="text-md-end text-start">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores alias dolorum cumque animi fuga exercitationem quis, incidunt consectetur tempore quisquam voluptatibus voluptates. Aspernatur provident delectus expedita? Aperiam labore tenetur, nisi voluptatibus ipsum commodi iure quidem. Aliquam, qui, sapiente labore quasi quae eveniet hic mollitia dolorum sit deleniti debitis? Voluptates ad incidunt, dolorem maxime, non rem hic, sapiente sint dolore autem ipsam laboriosam quod ratione qui alias facilis repellendus! Illo dolores dignissimos neque saepe est, quos aliquam quo sequi culpa blanditiis necessitatibus quisquam, quaerat nulla, consequuntur recusandae sunt velit veritatis accusantium animi beatae voluptatem aperiam enim! Recusandae earum deleniti porro.
        </p>
      </div>
    </section>
  );
};

export default About2;
