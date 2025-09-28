import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rgyf7nf", 
        "template_67wjiho", 
        formData,
        "twBs_eZ9nQJjKgyS_" 
      )
      .then(
        (response) => {
          console.log("Email sent!", response);
          setStatus("Message sent successfully! ");
          setFormData({ name: "", email: "", message: "" }); 
        },
        (error) => {
          console.log("Failed to send email", error);
          setStatus("Failed to send message . Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="container d-flex justify-content-center align-items-center my-4 " style={{ minHeight: "10vh" }}>
      
      <div className="card shadow-lg p-3 w-100 " style={{ 
        maxWidth: "500px"
      }}>
        <h2 className="text-center" style={{color: '#000000'}}>Lets Connect!</h2>
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
          <button type="submit" className="align-items-center btn btn-dark w-100 w-md-50">Send Message</button>
        </form>
        {status && <p className="text-center mt-3" style={{color: '#000000'}}>{status}</p>}
      </div>
    </div>
  );
};

export default ContactMe;
