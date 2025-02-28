import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {
  return (
    <div>
      <h1>Material-UI Accordion Example</h1>

      {/* Accordion Component */}
      <Accordion slotProps={{ heading: { component: 'h4' } }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          This is the second accordion. It contains different content.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default App;
