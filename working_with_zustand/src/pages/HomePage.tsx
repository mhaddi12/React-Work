import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to={"/store"}>Go to Store</Link>
    </div>
  );
};

export default HomePage;
