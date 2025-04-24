import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactMeSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    // Add logic to handle form submission, like sending an email or saving data.
    alert('Message Sent!');
  };

  return (
    <section
      id="contact"
      className="py-5"
      style={{
        background: 'linear-gradient(145deg, #f0f4f8, #ffffff)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4" data-aos="fade-up">
          Contact <span style={{ color: '#003366' }}>Me</span>
        </h2>
        <p className="text-muted mb-5" data-aos="fade-up" data-aos-delay="100">
          Feel free to reach out for collaborations, queries, or feedback. I would love to hear from you!
        </p>

        <div className="row justify-content-center">
          {/* Left side: Contact Form */}
          <div className="col-12 col-md-6">
            <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '1rem', borderColor: '#003366' }}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '1rem', borderColor: '#003366' }}
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '1rem', borderColor: '#003366' }}
                ></textarea>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 rounded-pill"
                  style={{ backgroundColor: '#003366', color: '#fff' }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right side: Contact Details */}
          <div className="col-12 col-md-6">
            <div
              className="card shadow-lg border-0 rounded-4 p-4"
              style={{ background: 'linear-gradient(145deg, #ffffff, #e6eef6)' }}
            >
              <h5 className="fw-bold" style={{ color: '#003366' }}>
                My Contact Details
              </h5>
              <p className="mb-3 text-muted">
                <strong>Name:</strong> Himanshu Kumar Thakur
              </p>
              <p className="mb-3 text-muted">
                <strong>Email:</strong> thakurhk660@gmail.com
              </p>
              <p className="mb-3 text-muted">
                <strong>Phone:</strong> +91 9693927130
              </p>
              <p className="text-muted">
                <strong>Address:</strong> Madhubani, Bihar, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMeSection;
