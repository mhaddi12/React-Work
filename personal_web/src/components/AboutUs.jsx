import React from "react";

function AboutUs() {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="display-4 text-primary">About Us</h2>
        <p className="lead text-muted">We are committed to excellence and innovation.</p>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow border-light h-100">
            <img
              src="your-image-url.jpg" // Replace with your image URL
              className="card-img-top"
              alt="Our Team"
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <div className="card-body">
              <h5 className="card-title text-primary">Our Mission</h5>
              <p className="card-text text-muted">
                To deliver the best products and services to our customers while fostering a culture of innovation and teamwork.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card shadow border-light h-100">
            <img
              src="your-image-url.jpg" // Replace with your image URL
              className="card-img-top"
              alt="Our Values"
              style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <div className="card-body">
              <h5 className="card-title text-primary">Our Values</h5>
              <p className="card-text text-muted">
                Integrity, excellence, and respect are the cornerstones of our company culture, driving us to achieve our goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <h3 className="text-primary">Meet Our Team</h3>
        <p className="text-muted">A dedicated group of professionals ready to serve you.</p>
        <button className="btn btn-outline-primary">Learn More</button>
      </div>
    </div>
  );
}

export default AboutUs;
