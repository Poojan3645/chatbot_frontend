import React, { useEffect, useState } from "react";

import axiosConfig from "../../utils/axiosConfig";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
      color: "#2a5a89",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [accordion, setAccordion] = useState([]);

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const getAccordion = async () => {
    try {
      const res = await axiosConfig.get("FAQ");

      setAccordion(res.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    getAccordion();
  }, []);
  return (
    <div>
      {accordion.map((data, index) => (
        <Accordion
          key={index + 1}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{data.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{data.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
