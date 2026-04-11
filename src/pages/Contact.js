import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <h2>Contact Me</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="4"></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Contact Info Section */}
      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p>Email: <a href="mailto:yourname@example.com">rajbhar.laxminarayan01@gmail.com</a></p>
        <p>Mobile: <a href="tel:+911234567890">+91 8108408345</a></p>
      </div>
    </div>
  );
}

export default Contact;
