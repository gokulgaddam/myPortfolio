import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To show success/error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with EmailJS Template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent!", response);
          setStatus("Message sent successfully! ");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.log("Failed to send email", error);
          setStatus("Failed to send message . Please try again.");
        }
      );
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-2 w-50 h-60" style={{  borderRadius: "10px" }}>
        <h2 className="text-center">Contact Me</h2>
        <form onSubmit={sendEmail} className="d-flex flex-column align-items-center">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-control mb-3"
            rows="4"
          />
          <button type="submit" className="align-items-center btn btn-primary w-50">Send Message</button>
        </form>
        {status && <p className="text-center mt-3 text-muted">{status}</p>}
      </div>
    </div>
  );
};

export default ContactMe;
