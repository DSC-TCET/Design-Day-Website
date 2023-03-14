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
          className="m-10 drop-shadow-xl"
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
            <Typography sx={{ fontSize: "2rem", margin: ".5rem" }}>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="m-10"
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
            <Typography sx={{ fontSize: "2rem", margin: ".5rem" }}>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}
