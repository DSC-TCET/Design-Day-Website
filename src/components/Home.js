import React from "react";
import img from "../undraw_experience_design_re_dmqq.svg";
import { useMediaQuery } from "react-responsive";
import Timer from "./Timer";

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
      <div class="sub">
        <a href="https://google.com">
          <button class="reg">Register</button>
          <Timer />
        </a>
      </div>
    </section>
  );
};

export default Home;
