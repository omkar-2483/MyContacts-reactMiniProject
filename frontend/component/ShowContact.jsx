import React, { useState } from "react";
import "./component.css";
import Contact from "./Contact.jsx";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddNew from "./AddNew.jsx";

function ShowContact({ allContact }) {

  let [adding, setAdding]= useState(false);

  let handleAdd=(event)=>{
    event.preventDefault();
    setAdding(true);
  }

  let close=()=>{
    setAdding(false);
  }

  return (
    <>
      <div onClick={close} className="ShowContact">
        <Stack className="Stack" spacing={1}>
          {allContact.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </Stack>
        <form onSubmit={handleAdd}>
          <Button type="submit" id="addNew" variant="contained">
            +
          </Button>
        </form>
      </div>
      {adding && <AddNew onClose={close}/>}
    </>
  );
}

export default ShowContact;
