import React from "react";
import { useMediaQuery } from "react-responsive";

const Rules = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <section className='my-20'>
      <div className='pt-5' id='rules'>
        <div
          style={{ backgroundColor: "rgba(177, 205, 236, 0.1)" }}


          className='lg:p-9 p-6 rounded-xl'
        >
          <h2
            className='md:text-6xl text-4xl mb-6 font-semibold'


            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Rules
          </h2>


          <ul className='tracking-wider md:text-lg text-base text-justify'>


            <li className='list-disc p-2'>
              Each team will be given a designated time to present their
              prototype to their assigned mentor. Any team that exceeds the
              allotted time will be asked to conclude their presentation.
            </li>
            <li className='list-disc  p-2'>
              Teams are required to demonstrate their prototypes to their
              assigned mentor and answer any questions they may have.{" "}
            </li>

            <li className='list-disc  p-2'>
              Any form of cheating or plagiarism will result in immediate
              disqualification.{" "}
            </li>

            <li className='list-disc  p-2'>
              All teams must have a maximum of 4 members.{" "}
            </li>

            <li className='list-disc  p-2'>
              Teams are required to submit their project in advance, at least 24
              hours before the event.{" "}
            </li>

            <li className='list-disc  p-2'>
              Teams must bring their own equipment, including laptops, chargers,
              and any other necessary tools.{" "}
            </li>

            <li className='list-disc  p-2'>
              Teams must follow the instructions and guidelines provided by the
              event organizers.{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};


export default Rules;


