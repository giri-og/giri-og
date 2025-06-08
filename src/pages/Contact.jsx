import React, { useState } from "react";
import "../App.css"; // Make sure the new styles are included here

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSending(true);
    try {
      console.log("Form submitted:", formData);
      alert("Message sent! (This is a demo.)");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Background animated elements */}
      <div className="tech-lines-bg">
        <div className="glow-cube cube-1"></div>
        <div className="glow-cube cube-2"></div>
      </div>

      <div className="contact-page">
        <h2 className="section-title" style={{ fontFamily: "Orbitron, sans-serif" }}>
          Contact Me
        </h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name" style={{ display: "none" }}>Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email" style={{ display: "none" }}>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message" style={{ display: "none" }}>Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="contact-button" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
