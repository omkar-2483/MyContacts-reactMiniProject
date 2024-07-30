import { useState } from "react";
import './component.css'

export default function AddNew({onClose}) {
  let [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contact: "",
  });

  let handleFormData = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    let data = JSON.stringify(formData);

    let res = await fetch("http://localhost:8080/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: data,
    });
    const result = await res.text();
    alert(result);
    setFormData({
      fullname: "",
      email: "",
      contact: "",
    });
    onClose();
  };

  return (
    <div className="AddNew">
      <p>Add new Contact</p>
      <hr />
      <form  onSubmit={handleSubmit}>
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
        <button type="submit">Add</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}
