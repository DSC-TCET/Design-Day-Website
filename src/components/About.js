import React from "react";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <section className="my-20">
      <div className="mt-20" id="about">
        <h2 className="m-6 text-5xl text-center">About</h2>
        <div
          className="mb-10 tracking-wider"
          style={{
            marginLeft: isMobile ? "1rem" : "4rem",
            marginRight: isMobile ? "1rem" : "4rem",
            fontSize: isMobile ? ".75rem" : "1.25rem",
          }}
        >
          Design Day is a program organized by Google as part of its Solution
          Challenge initiative. The Solution Challenge is an annual competition
          that encourages students and young professionals to use technology to
          solve real-world problems. The competition is open to individuals and
          teams of up to four members, and participants are required to submit a
          solution that addresses one of Google's designated global problems.
          Design Day is a one-day event that takes place as part of the Solution
          Challenge. During the event, participants are invited to collaborate
          with each other and with Google mentors to develop their proposed
          solutions. The event provides an opportunity for participants to
          refine their ideas, receive feedback from experts, and learn more
          about Google's technologies and design principles. Design Day
          typically involves a series of workshops and activities focused on
          design thinking and problem-solving. Participants have the opportunity
          to work with Google's Design Sprint methodology, which involves a
          five-day process for solving complex problems and creating new
          products or services. At the end of Design Day, participants present
          their solutions to a panel of judges, who evaluate the proposals based
          on criteria such as innovation, impact, and feasibility. The winning
          teams receive prizes and may also have the opportunity to work with
          Google to further develop and implement their solutions. Overall,
          Design Day is a valuable opportunity for young professionals to gain
          experience in design thinking and problem-solving, collaborate with
          others, and work on solutions to real-world problems.
        </div>
      </div>
    </section>
  );
};

export default About;
