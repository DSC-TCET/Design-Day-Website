import React from "react";
import "../App.css";
import { useMediaQuery } from "react-responsive";

const Conduct = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <section id='conduct' className='pt-5'>
      <div>
        <div
          style={{ backgroundColor: "rgba(177, 205, 236, 0.1)" }}
          className='p-9 rounded-xl'
        >
          <h2
            className='text-6xl mb-6 font-semibold'
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Code of conduct
          </h2>
          <ul className='tracking-wider text-lg text-justify'>
            <li className='list-disc p-2'>
              All participants must respect their assigned mentor, event
              organizers, and other teams at all times.
            </li>
            <li className='list-disc p-2'>
              Any form of discriminatory or inappropriate behavior will not be
              tolerated.
            </li>
            <li className='list-disc p-2'>
              Participants must maintain a professional attitude throughout the
              event.
            </li>
            <li className='list-disc p-2'>
              Participants must maintain a clean and safe workspace.
            </li>
            <li className='list-disc p-2'>
              Any damage caused to the venue or equipment will be the
              responsibility of the team or individual responsible.
            </li>
            <li className='list-disc p-2'>
              Participants are required to follow all local and national laws
              and regulations.
            </li>
            <li className='list-disc p-2'>
              Any violation of the rules or code of conduct may result in
              disqualification or other consequences, as determined by the event
              organizers.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Conduct;
