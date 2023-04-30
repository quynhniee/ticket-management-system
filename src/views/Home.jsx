import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Home</h1>
      <Link to="/book-ticket" className="btn btn-primary">
        Book ticket
      </Link>
    </div>
  );
};

export default Home;
