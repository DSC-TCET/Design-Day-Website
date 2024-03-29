import React from "react";
import img from "../undraw_experience_design_re_dmqq.svg";
import { useMediaQuery } from "react-responsive";
import Timer from "./Timer";

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (


    <section id='home' className='mt-16 px-4'>
      <div className='flex flex-col lg:flex-row md:gap-8 gap-14 max-w-5xl mx-auto justify-between pt-16'>
        <div>
          <div
            className='flex flex-col basis-2/5 justify-center items-center h-full capitalize lg:gap-7 gap-3'
            style={{
              fontSize: isMobile ? "2.5rem" : "4rem",
              marginTop: isMobile ? "1rem" : null,


            }}
          >
            <h1 style={{ color: "#6C63FF" }} className='font-semibold '>
              design day
            </h1>


            <p className='md:text-2xl text-lg'>By GDSC-TCET</p>
            <a
              href='https://forms.gle/dbhn7pip9Kv6Ptvr9'
              target='_blank'
              rel='noopener noreferrer'
              className='h-min'
            >
              <button
                style={{ fontFamily: "Raleway, sans-serif" }}
                className='lg:mt-4 mt-0 w-44 bg-[#647ECB] hover:bg-[#D01498] text-white text-lg hover:shadow-lg hover:drop-shadow-[0_2px_4px_#D01498] ease-in-out duration-500 font-bold py-2 px-4 rounded'
              >
                Register
              </button>
            </a>
          </div>
        </div>
        <div className='basis-3/5 px-0 sm:px-10'>


          <img src={img} alt='img' className='object-cover w-full h-full' />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-14'>
        <Timer />
      </div>
    </section>
  );
};

export default Home;
