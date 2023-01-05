import React from "react";
import Logo from "../assets/reserveit-logo.svg";
import RegistrationForm from "../components/RegistrationForm";
import {Row} from "antd";

const LandingPage = () => {
  return (
    <div>
      <Row>
        <img src={Logo} alt="burger-queen" className="logo"/>
      </Row>
      <Row className="registration-form">
        <RegistrationForm/>
      </Row>
    </div>
  );
};

export default LandingPage;
