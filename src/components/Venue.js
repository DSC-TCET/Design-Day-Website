import React from "react";
import { useMediaQuery } from "react-responsive";

const Venue = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <div>
      <section className='my-20'>
        <div id='venue' className='pt-5'>
          <div
            style={{ backgroundColor: "rgba(177, 205, 236, 0.1)" }}
            className='lg:p-9 p-6 rounded-xl'
          >
            <h2
              className='md:text-6xl text-4xl mb-6 font-semibold'
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Venue
            </h2>
            <div className='md:text-xl text-lg tracking-wider'>
              Thakur College of Engineering and Technology.{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Venue;
