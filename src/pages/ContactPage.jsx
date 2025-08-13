import React, { useState } from "react";
import "../styles/ContactPage.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "Abebe",
    lastName: "Kebede",
    email: "Abebe@example.com",
    subject: "How can we help you?",
    message: "Tell us about your project or inquiry...",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    // Add your submit logic here (API call, etc.)
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          Have questions or want to discuss a project? We'd love to hear from
          you. Our team is ready to help bring your vision to life.
        </p>
      </header>

      <div className="contact-main">
        {/* Contact Form */}
        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <h2>Send us a message</h2>

          <div className="form-row">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <aside className="contact-info glass-card">
          <h2>Contact Information</h2>
          <div>
            <h3>Our Location</h3>
            <p>Piassa</p>
            <p>Addis Ababa, Ethiopia</p>
          </div>

          <div>
            <h3>Phone Number</h3>
            <p>+251 93 220 9141</p>
          </div>

          <div>
            <h3>Email Address</h3>
            <p>zemenaytechsolutions@gmail.com</p>
          </div>

          <div>
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
          </div>

          {/* Map Location */}
          <div className="contact-map">
            <h3>Our Location on Map</h3>
            <iframe
              title="Piazza Addis Ababa Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.7320178540224!2d38.75295471526956!3d9.037183794979775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f5efcffebd3%3A0xda821c73ef928f93!2sPiazza%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1691751114376!5m2!1sen!2set"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </aside>
      </div>
    </div>
  );
}
