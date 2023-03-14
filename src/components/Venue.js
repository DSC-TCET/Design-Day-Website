import React from "react";
import { useMediaQuery } from "react-responsive";

const Venue = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <div>
      <section className="my-20">
        <div id="venue">
          <h2 className="m-6" style={{ fontSize: isMobile ? "2rem" : "4rem" }}>
            Venue
          </h2>
          <div
            className="m-10 text-xl tracking-wider"
            style={{
              marginLeft: isMobile ? "2rem" : "4rem",
            }}
          >
            Thakur College of Engineering and Technology.{" "}
          </div>
          <p></p>
        </div>
      </section>
    </div>
  );
};

export default Venue;
