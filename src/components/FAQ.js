import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "react-responsive";

export default function SimpleAccordion() {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <section className='my-20'>
      <div id='faq' className='pt-5'>
        <div
          style={{ backgroundColor: "rgba(177, 205, 236, 0.1)" }}
          className='lg:p-9 p-6 rounded-xl'
        >
          <h2
            className='md:text-6xl text-4xl mb-6 font-semibold'
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            FAQ
          </h2>
          <Accordion
            className='my-10 drop-shadow-xl '
            style={{
              margin: isMobile ? "0.2rem" : null,
              marginBottom: isMobile ? "1.4rem" : null,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls='panel1a-content'
              id='panel1a-header'
              sx={{
                backgroundColor: "#1b1e29",
                color: "rgba(252, 244, 244, 0.768)",
              }}
            >
              <Typography
                sx={{ margin: ".5rem" }}
                style={{
                  fontSize: isMobile ? "1rem" : "2rem",
                }}
              >
                What is it?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#1b1e29",
                color: "rgba(252, 244, 244, 0.768)",
              }}
            >
              <Typography variant='h6' style={{ paddingInline: "6px" }}>
                Design Day is an event where participants of Google Solution
                Challenge present their prototypes they have developed.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className='my-10 drop-shadow-xl '
            style={{
              margin: isMobile ? "0.2rem" : null,
              marginBottom: isMobile ? "1.4rem" : null,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls='panel2a-content'
              id='panel2a-header'
              sx={{
                backgroundColor: "#1b1e29",
                color: "rgba(252, 244, 244, 0.768)",
              }}
            >
              <Typography
                sx={{ margin: ".5rem" }}
                style={{
                  fontSize: isMobile ? "1rem" : "2rem",
                }}
              >
                Do we need to submit our project in advance?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#1b1e29",
                color: "rgba(252, 244, 244, 0.768)",
              }}
            >
              <Typography variant='h6' style={{ paddingInline: "6px" }}>
                Yes, teams are required to submit their projects at least 24
                hours before the event.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className='my-10 drop-shadow-xl '
            style={{
              margin: isMobile ? "0.2rem" : null,
              marginBottom: isMobile ? "1.4rem" : null,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls='panel2a-content'
              id='panel2a-header'
              sx={{
                backgroundColor: "#1b1e29",
                color: "rgba(252, 244, 244, 0.768)",
              }}
            >
              <Typography
                sx={{ margin: ".5rem" }}
                style={{
                  fontSize: isMobile ? "1rem" : "2rem",
                }}
              >
                How do I register my team for Design Day?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#1b1e29",
                color: "rgba(252, 244, 244, 0.768)",
              }}
            >
              <Typography variant='h6' style={{ paddingInline: "6px" }}>
                Register your team on the above register button on this website.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className='my-10 drop-shadow-xl '
            style={{
              margin: isMobile ? "0.2rem" : null,
              marginBottom: isMobile ? "1.4rem" : null,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls='panel2a-content'
              id='panel2a-header'
              sx={{
                backgroundColor: "#1b1e29",
                color: "rgba(252, 244, 244, 0.768)",
              }}
            >
              <Typography
                sx={{ margin: ".5rem" }}
                style={{
                  fontSize: isMobile ? "1rem" : "2rem",
                }}
              >
                Do we need to submit our project in advance?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#1b1e29",
                color: "rgba(252, 244, 244, 0.768)",
              }}
            >
              <Typography variant='h6' style={{ paddingInline: "6px" }}>
                Yes, teams are required to submit their projects at least 24
                hours before the event.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className='my-10 drop-shadow-xl '
            style={{
              margin: isMobile ? "0.2rem" : null,
              marginBottom: isMobile ? "1.4rem" : null,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls='panel2a-content'
              id='panel2a-header'
              sx={{
                backgroundColor: "#1b1e29",
                color: "rgba(252, 244, 244, 0.768)",
              }}
            >
              <Typography
                sx={{ margin: ".5rem" }}
                style={{
                  fontSize: isMobile ? "1rem" : "2rem",
                }}
              >
                What should we bring to the event?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#1b1e29",
                color: "rgba(252, 244, 244, 0.768)",
              }}
            >
              <Typography variant='h6' style={{ paddingInline: "6px" }}>
                Teams must bring their own equipment, including laptops,
                chargers, and any other necessary tools.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className='my-10 drop-shadow-xl '
            style={{
              margin: isMobile ? "0.2rem" : null,
              marginBottom: isMobile ? "1.4rem" : null,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls='panel2a-content'
              id='panel2a-header'
              sx={{
                backgroundColor: "#1b1e29",
                color: "rgba(252, 244, 244, 0.768)",
              }}
            >
              <Typography
                sx={{ margin: ".5rem" }}
                style={{
                  fontSize: isMobile ? "1rem" : "2rem",
                }}
              >
                Will there be judges?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#1b1e29",
                color: "rgba(252, 244, 244, 0.768)",
              }}
            >
              <Typography variant='h6' style={{ paddingInline: "6px" }}>
                No, mentors will be present instead of judges.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className='my-10 drop-shadow-xl '
            style={{
              margin: isMobile ? "0.2rem" : null,
              marginBottom: isMobile ? "1.4rem" : null,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls='panel2a-content'
              id='panel2a-header'
              sx={{
                backgroundColor: "#1b1e29",
                color: "rgba(252, 244, 244, 0.768)",
              }}
            >
              <Typography
                sx={{ margin: ".5rem" }}
                style={{
                  fontSize: isMobile ? "1rem" : "2rem",
                }}
              >
                Can we exceed our presentation time?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#1b1e29",
                color: "rgba(252, 244, 244, 0.768)",
              }}
            >
              <Typography variant='h6' style={{ paddingInline: "6px" }}>
                No, any team that exceeds the allotted time will be asked to
                conclude their presentation.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
