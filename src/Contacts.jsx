import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const [formData, setFormData] = useState({
    issue: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_USER_ID
      )
      .then(
        (result) => {
          setAlert({
            show: true,
            message: "Message sent successfully!",
            type: "success",
          });
          setFormData({
            issue: "",
            email: "",
            contactNo: "",
            message: "",
          });
        },
        (error) => {
          setAlert({
            show: true,
            message: "Failed to send message. Please try again later.",
            type: "danger",
          });
        }
      );
  };

  return (
    <div className="min-vh-100 px-3 py-5" style={{ backgroundColor: "black", color: "red" }}>
      <h1 className="h3 fw-bold text-center mb-5">TEDxGPREC CONTACT PAGE</h1>

      {alert.show && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          {alert.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setAlert({ ...alert, show: false })}
          ></button>
        </div>
      )}

      <div className="row g-4 justify-content-center mb-5">
        <div className="col-md-5">
          <div className="bg-white shadow-lg rounded p-4 text-dark">
            <h2 className="h5 fw-semibold mb-3 text-center">Reach Us At</h2>
            <p>📞 +91-8919876247</p>
            <p><a href="mailto:tedexgprec@gprec.ac.in">📧 tedexgprec@gprec.ac.in</a></p>
            <p>📍G. Pulla Reddy Engineering College (Autonomous) G.Pulla Reddy Nagar, Nandyal Road, Kurnool – 518007, Andhra Pradesh, India.</p>
          </div>
        </div>

        <div className="col-md-5">
          <div className="bg-white shadow-lg rounded p-4 text-dark">
            <h2 className="h5 fw-semibold mb-3 text-center">Branding & Collaboration</h2>
            <p><a href="mailto:tedexgprec@gprec.ac.in">📧 tedexgprec@gprec.ac.in</a></p>
            <p>📍G. Pulla Reddy Engineering College (Autonomous) G.Pulla Reddy Nagar, Nandyal Road, Kurnool – 518007, Andhra Pradesh, India.</p>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="bg-white shadow-lg rounded p-4 text-dark">
            <h2 className="h5 fw-semibold mb-3">Feedback & Queries</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Select Issue*</label>
                <select
                  className="form-select"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select Your Query --</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address*</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="abc@example.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contact No</label>
                <input
                  type="text"
                  className="form-control"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-success w-100">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <div className="bg-white shadow-lg rounded p-4 text-dark">
            <h2 className="h5 fw-semibold mb-3 text-center">Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.5806874265936!2d78.05423827494855!3d15.774206584863313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5dc53d50b2e4d%3A0x4bb4d8f57bcaa3e3!2sG%20Pulla%20Reddy%20Engineering%20College!5e1!3m2!1sen!2sin!4v1746431405536!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TEDxGPREC Map"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="position-fixed top-50 start-0 translate-middle-y ps-1 d-flex flex-column gap-2">
        <a href="#" className="btn btn-primary rounded-end">WHATSAPP</a>
        <a href="https://www.instagram.com/tedxgprec_" className="btn btn-danger rounded-end">INSTAGRAM</a>
      </div>
    </div>
  );
};

export default Contacts;
