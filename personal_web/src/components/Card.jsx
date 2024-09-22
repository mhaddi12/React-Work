import React from "react";

function Card({ name, email, imageUrl }) {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow border-light" style={{ width: "18rem", borderRadius: "10px" }}>
        {/* <div className="card-header text-white bg-primary">
          User Profile
        </div> */}
        <img src={imageUrl} className="card-img-top" alt={name} style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
        <div className="card-body text-center">
          <h5 className="card-title text-primary">{name}</h5>
          <p className="card-text text-muted">{email}</p>
          <a href="#" className="btn btn-primary btn-block">View Profile</a>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated a few minutes ago</small>
        </div>
      </div>
    </div>
  );
}

export default Card;
