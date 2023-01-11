import React, {useContext} from "react";
import {MenuContext} from "../context/MenuContext.js";
import Menu from "../components/Menu.jsx";
import "../App.css";
import {useParams} from "react-router-dom";

const RestaurantClientMainPage = (props) => {
  const {snacks, principal, sideDish, drinks} = useContext(MenuContext);
  const {tableId} = useParams();

  if (tableId > props.maxTableNumber) {
    return <div>This page does not exist</div>;
  }
  return (
    <div>
      <h1 className="title">Table {tableId}</h1>
      <Menu
        snacks={snacks}
        principal={principal}
        sideDish={sideDish}
        drinks={drinks}
        tableId={tableId}
      />
    </div>
  );
};

export default RestaurantClientMainPage;
