import { useState } from "react";
import "./component.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function EditDelete({ contact }) {
  let deleteContact = async () => {
    const id = contact.id;
    let r = await fetch(`http://localhost:8080/contact/${id}`, {
      method: "DELETE",
    });
    let res=await r.text();
    alert(res);
  };

  let [editing, setEditing] = useState(false);
  let closeEdit = () => {
    setEditing(false);
  };

  let [formData, setFormData] = useState({
    fullname: contact.fullname,
    email: contact.email,
    contact: contact.contact,
  });

  let handleFormData = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let editContact = () => {
    setEditing(true);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    let data = JSON.stringify(formData);

    const id = contact.id;
    let r = await fetch(`http://localhost:8080/contact/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: data,
    });

    let res = await r.text();
    alert(res);

    setEditing(false)
  };

  return (
    <div className="EditDelete">
      <DeleteIcon onClick={deleteContact} />
      <EditIcon onClick={editContact} />
      {editing && (
          <div className="AddNew">
            <p>Edit Contact</p>
            <hr />
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Full Name"
                type="text"
                value={formData.fullname}
                onChange={handleFormData}
                name="fullname"
                required
              />{" "}
              <br />
              <input
                placeholder="Email Adress"
                type="text"
                value={formData.email}
                onChange={handleFormData}
                name="email"
              />{" "}
              <br />
              <input
                placeholder="Phone Number"
                type="text"
                value={formData.contact}
                onChange={handleFormData}
                name="contact"
                required
              />{" "}
              <br />
              <button type="submit">Edit</button>
              <button onClick={closeEdit}>Cancel</button>
            </form>
          </div>
      )}
    </div>
  );
}
