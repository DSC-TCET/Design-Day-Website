import React from "react";
import img from "../undraw_experience_design_re_dmqq.svg";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="mt-16">
      <div className="flex">
        <div className="w-[50%]">
          <div className="text-[6rem] ml-10 flex justify-center items-center h-full capitalize">design day </div>
          {/* <div className="flex h-full capitalize"> */}
          <a href="https://google.com"><button class="reg">Register</button></a>
        </div>
        <div className="w-[50%]">
          <img src={img} alt="img" />

          
        </div>
      </div>
    </section>
  );
};

export default Home;
