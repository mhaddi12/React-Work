import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Empty dependency array means it runs once when the component mounts

  return (
    <div>
      <Link to={"/store"}>Go to Store</Link>
    </div>
  );
};

export default HomePage;
