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
    <section className="my-20">
      <div id="faq">
        <h2 className="m-6" style={{ fontSize: isMobile ? "2rem" : "4rem" }}>
          FAQ
        </h2>
        <Accordion
          className="m-10 drop-shadow-xl "
          style={{
            margin: isMobile ? "2rem" : null,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
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
            <Typography>
              Design Day is an event where participants of Google Solution
              Challenge present their prototypes they have developed.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="m-10 drop-shadow-xl "
          style={{
            margin: isMobile ? "2rem" : null,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
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
            <Typography>
              Yes, teams are required to submit their projects at least 24 hours
              before the event.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="m-10 drop-shadow-xl "
          style={{
            margin: isMobile ? "2rem" : null,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
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
            <Typography>
              Register your team on the above register button on this website.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="m-10 drop-shadow-xl "
          style={{
            margin: isMobile ? "2rem" : null,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
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
            <Typography>
              Yes, teams are required to submit their projects at least 24 hours
              before the event.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="m-10 drop-shadow-xl "
          style={{
            margin: isMobile ? "2rem" : null,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
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
            <Typography>
              Teams must bring their own equipment, including laptops, chargers,
              and any other necessary tools.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="m-10 drop-shadow-xl "
          style={{
            margin: isMobile ? "2rem" : null,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
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
            <Typography>
              No, mentors will be present instead of judges.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="m-10 drop-shadow-xl "
          style={{
            margin: isMobile ? "2rem" : null,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
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
            <Typography>
              No, any team that exceeds the allotted time will be asked to
              conclude their presentation.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}
