import React from "react";
import img from "../undraw_experience_design_re_dmqq.svg";

const Home = () => {
  return (
    <section id="home" className="mt-16">
      <div className="flex">
        <div className="w-[50%]">
          <div className="text-[4rem] ml-10 flex justify-center items-center h-full capitalize">design day</div>
        </div>
        <div className="w-[50%]">
          <img src={img} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
