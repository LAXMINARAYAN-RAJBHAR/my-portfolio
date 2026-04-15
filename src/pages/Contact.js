import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [fading, setFading] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setLoading(false);
        setFading(true);
        setTimeout(() => setSubmitted(true), 300);
      })
      .catch((error) => {
        setLoading(false);
        alert("Something went wrong. Please try again.");
        console.error(error);
      });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFading(false);
  };

  return (
    <div className="contact-container">
      <div className="form-wrapper">
        {!submitted ? (
          <form
            ref={form}
            className={`contact-form ${fading ? "fade-out" : ""}`}
            onSubmit={sendEmail}
          >
            <h2>Message Me</h2>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        ) : (
          <div className="success-overlay">
            <div className="checkmark-circle">
              <svg viewBox="0 0 32 32" fill="none">
                <path
                  className="check-path"
                  d="M7 16 L13 22 L25 10"
                  stroke="#1D9E75"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="success-title">Message sent!</p>
            <p className="success-sub">
              Thanks for reaching out. I'll get back to you soon.
            </p>
            <button className="reset-btn" onClick={handleReset}>
              Send another message
            </button>
          </div>
        )}
      </div>

      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p>
          Email:{" "}
          <a href="mailto:laxminarayan.rajbhar@gmail.com">
            laxminarayan.rajbhar@gmail.com
          </a>
        </p>
        <p>
          Mobile: <a href="tel:+918108408345">+91 8108408345</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
