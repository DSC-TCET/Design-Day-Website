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
  🎉 Design Day is an exciting program organized by Google as part of its Solution Challenge initiative! 🚀<br/><br/>

  The Solution Challenge is an annual competition that encourages students and young professionals to use technology to solve real-world problems. Participants can work alone or in teams of up to four members, and are required to submit a solution that addresses one of Google's designated global problems.<br/><br/>

  👥 Design Day is a one-day event that brings participants together to collaborate with each other and with Google mentors to develop their proposed solutions. It's an opportunity for participants to refine their ideas, receive feedback from experts, and learn more about Google's technologies and design principles.<br/><br/>

  💡 The event typically involves a series of workshops and activities focused on design thinking and problem-solving. Participants have the opportunity to work with Google's Design Sprint methodology, which involves a five-day process for solving complex problems and creating new products or services.<br/><br/>

  🏆 At the end of Design Day, participants present their solutions to a panel of judges/mentors, who evaluate the proposals based on criteria such as innovation, impact, and feasibility. Winning teams receive prizes and may also have the opportunity to work with Google to further develop and implement their solutions.<br/><br/>

</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
