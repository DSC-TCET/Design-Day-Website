import React from "react";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <section className='my-20'>
      <div className='pt-5' id='about'>
        <div
          style={{ backgroundColor: "rgba(177, 205, 236, 0.1)" }}
          className='p-9 rounded-xl'
        >
          <h2
            className='text-6xl mb-6 font-semibold'
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            About
          </h2>
          <div className=' tracking-wider'>
            <p className='text-lg text-justify'>
              Design Day is a program organized by Google as part of its
              Solution Challenge initiative. The Solution Challenge is an annual
              competition that encourages students and young professionals to
              use technology to solve real-world problems. The competition is
              open to individuals and teams of up to four members, and
              participants are required to submit a solution that addresses one
              of Google's designated global problems. Design Day is a one-day
              event that takes place as part of the Solution Challenge. During
              the event, participants are invited to collaborate with each other
              and with Google mentors to develop their proposed solutions. The
              event provides an opportunity for participants to refine their
              ideas, receive feedback from experts, and learn more about
              Google's technologies and design principles. Design Day typically
              involves a series of workshops and activities focused on design
              thinking and problem-solving. Participants have the opportunity to
              work with Google's Design Sprint methodology, which involves a
              five-day process for solving complex problems and creating new
              products or services. At the end of Design Day, participants
              present their solutions to a panel of judges, who evaluate the
              proposals based on criteria such as innovation, impact, and
              feasibility. The winning teams receive prizes and may also have
              the opportunity to work with Google to further develop and
              implement their solutions. Overall, Design Day is a valuable
              opportunity for young professionals to gain experience in design
              thinking and problem-solving, collaborate with others, and work on
              solutions to real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
