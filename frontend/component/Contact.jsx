import './component.css';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EditDelete from './EditDelete';

export default function Contact({contact}) {
  return (
    <div className="Contact">
      <Accordion >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Avatar alt="Remy Sharp" src="/src/assets/profile.png" />
          <h5 style={{padding: "10px", paddingBottom:"0", fontSize:"18px"}}> {contact.fullname}</h5>
        </AccordionSummary>
        <AccordionDetails>
          {contact.email && <p ><EmailIcon /> {contact.email}</p>}
          {contact.contact && <p><LocalPhoneIcon/> {contact.contact}</p>}
          <EditDelete contact={contact}></EditDelete>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
