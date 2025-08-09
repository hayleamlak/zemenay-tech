import React from 'react';
import '../styles/contactpage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-form-wrapper">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <label>
            Full Name
            <input type="text" name="name" required placeholder="Your Name" />
          </label>

          <label>
            Email
            <input type="email" name="email" required placeholder="your@email.com" />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" required placeholder="Write your message..." />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
