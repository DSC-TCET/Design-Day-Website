import React from "react";
import { useMediaQuery } from "react-responsive";

const Rules = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <section className="my-20">
      <div id="rules">
        <h2 className="m-6" style={{ fontSize: isMobile ? "2rem" : "4rem" }}>
          Rules
        </h2>
        <ul
          className="mb-10 tracking-wider"
          style={{
            marginLeft: isMobile ? "2rem" : "4rem",
            marginRight: isMobile ? "2rem" : "4rem",
            fontSize: isMobile ? ".90rem" : "1.25rem",
          }}
        >
          <li className="list-disc  p-2">
            Each team will be given a designated time to present their prototype
            to their assigned mentor. Any team that exceeds the allotted time
            will be asked to conclude their presentation.
          </li>
          <li className="list-disc  p-2">
            Teams are required to demonstrate their prototypes to their assigned
            mentor and answer any questions they may have.{" "}
          </li>

          <li className="list-disc  p-2">
            Any form of cheating or plagiarism will result in immediate
            disqualification.{" "}
          </li>

          <li className="list-disc  p-2">All teams must have a maximum of 4 members. </li>

          <li className="list-disc  p-2">
            Teams are required to submit their project in advance, at least 24
            hours before the event.{" "}
          </li>

          <li className="list-disc  p-2">
            Teams must bring their own equipment, including laptops, chargers,
            and any other necessary tools.{" "}
          </li>

          <li className="list-disc  p-2">
            Teams must follow the instructions and guidelines provided by the
            event organizers.{" "}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Rules;