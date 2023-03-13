import React from "react";
import '../App.css'
import Timer from "./Timer";

const Conduct = () => {
  return (
    <section id='conduct' className="my-20">
      <div>
        <h2 className="m-6 text-5xl ">Code of Conduct</h2>
        <Timer />
        <div className="mx-16 m-10 text-xl tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
      </div>
    </section>
  );
};

export default Conduct;
