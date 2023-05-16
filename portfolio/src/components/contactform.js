import React, { useState } from "react";

const ContactForm = () => {
const [formData, setFormData] = useState({
  to_name: "Carisse",
  from_name: "",
  email: "",
  message: "",
});

const handleChange = (event) => {
  if (event.target.name === "name") {
    setFormData({ ...formData, from_name: event.target.value });
  } else {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
};

  return (
    <div className="contact-form-container">
      <h2 className="contactMeTitle">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Please Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Please Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Please Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p className="emailMe">Please feel free to email me at carissebarr.swe@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactForm;