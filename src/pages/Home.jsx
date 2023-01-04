import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Logo from "../assets/reserveit-logo.svg";

const Home = () => {
  return (
    <div className="welcome-menu">
      <div className="logo-container">
        <img src={Logo} alt="burger-queen" className="logo" />
      </div>
      <Link to="/tables" className="route">
        {" "}
        Tables{" "}
      </Link>
      <Link to="/kitchen" className="route">
        {" "}
        Kitchen{" "}
      </Link>
    </div>
  );
};

export default Home;
