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
            className='p-9 rounded-xl'
          >
            <h2
              className='text-6xl mb-6 font-semibold'
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Venue
            </h2>
            <div className='text-xl tracking-wider'>
              Thakur College of Engineering and Technology.{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Venue;
