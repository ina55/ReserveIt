import React, { useState, useContext } from "react";
import { MenuContext } from "../context/MenuContext.js";
import Menu from "../components/Menu.jsx";
import BackBtn from "../components/utilities/BackBtn.jsx";
import "../App.css";

const Waiter = () => {
  const { breakfast, burgers, sideDish, drinks } = useContext(MenuContext);

  return (
    <div>
      <BackBtn />
      <h1 className="title">Tables</h1>
      <Menu
        breakfast={breakfast}
        burgers={burgers}
        sideDish={sideDish}
        drinks={drinks}
      />
    </div>
  );
};

export default Waiter;
