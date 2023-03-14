import React from "react";
import img from "../undraw_experience_design_re_dmqq.svg";
import { useMediaQuery } from "react-responsive";
import Timer from "./Timer";
import "./Home.css";

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <section id="home" className="mt-16">
      <div style={{ display: isMobile ? "grid" : "flex" }}>
        <div style={{ width: isMobile ? "100%" : "50%" }}>
          <div
            className="ml-10 flex justify-center items-center h-full capitalize"
            style={{
              fontSize: isMobile ? "2rem" : "4rem",
              marginTop: isMobile ? "2rem" : null,
            }}
          >
            design day
          </div>

        </div>
        <div
          style={{
            width: isMobile ? "100%" : "50%",
            margin: isMobile ? "5rem 2rem 0 .5rem" : null,
          }}
        >
          <img src={img} alt="img" />

          
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-10">
        <button
          style={{ fontFamily: "Raleway, sans-serif" }}
          className="w-fit m-10 bg-[#647ECB] hover:dropShadow-3xl hover:bg-[#D01498] text-white text-base hover:shadow-lg hover:drop-shadow-[0_8px_15px_#D01498] ease-in-out duration-500 font-bold py-2 px-4 rounded"
        >
          Register
        </button>
        <Timer />
      </div>
    </section>
  );
};

export default Home;
