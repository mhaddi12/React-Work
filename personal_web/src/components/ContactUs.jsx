import React from "react";

function ContactUs() {
  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Contact Us</h2>
      <p className="text-center text-muted mb-5">
        We'd love to hear from you! Please fill out the form below, and we'll get back to you shortly.
      </p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" className="form-control" id="subject" placeholder="Subject" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
