import React, { useState, useContext } from "react";
import { MenuContext } from "../context/MenuContext.js";
import Menu from "../components/Menu.jsx";
import BackBtn from "../components/utilities/BackBtn.jsx";
import "../App.css";

const RestaurantClientMainPage = () => {
  const { snacks, principal, sideDish, drinks } = useContext(MenuContext);

  return (
    <div>
      <h1 className="title">Tables</h1>
      <Menu
        snacks={snacks}
        principal={principal}
        sideDish={sideDish}
        drinks={drinks}
      />
    </div>
  );
};

export default RestaurantClientMainPage;
