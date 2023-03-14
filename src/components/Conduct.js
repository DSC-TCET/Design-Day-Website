import React from "react";
import "../App.css";
import Timer from "./Timer";
import { useMediaQuery } from "react-responsive";

const Conduct = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <section id="conduct" className="my-20">
      <div>
        <h2 className="m-6" style={{fontSize : isMobile ? '2rem' : '4rem'}}>Code of Conduct</h2>
        <Timer />
        <div
          className=" m-10 tracking-wider"

        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </div>
      </div>
    </section>
  );
};

export default Conduct;
