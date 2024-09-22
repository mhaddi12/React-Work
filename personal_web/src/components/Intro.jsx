import React from "react";

export default function Intro({name, profes, imageUrl}) {
  return (
    
    <div className="container my-5">
        
      {
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
            src={imageUrl}
              className="img-thumbnail rounded-circle mb-4"
              alt="Profile"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-primary">Hello, I'm {name}</h2>
            <p className="lead text-muted">
              I'm a passionate {profes} with a love for creating
              beautiful and functional web applications. Let's work together!
            </p>
            <a href="#" className="btn btn-primary btn-lg">
              Learn More
            </a>
          </div>
        </div>
      }
      <hr />
    </div>
  );
}
