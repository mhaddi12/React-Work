import React from "react";
import { Link } from "react-router-dom";
import "../HomePage.css";

const HomePage = () => {
  return (
    <div className="container-fluid homepage-container d-flex justify-content-center align-items-center">
      <div className="text-center content-box p-5 shadow-lg">
        <h1 className="mb-4 display-4">Welcome to the Store</h1>
        <p className="lead mb-5">
          Discover the best products at amazing prices
        </p>
        <Link to="/store" className="btn btn-outline-light btn-lg custom-link">
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
