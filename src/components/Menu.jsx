import React, { useContext, useEffect, useState } from "react";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import SideDish from "./SideDish";
import Drinks from "./Drinks";
import Count from "./Count";
import coffe from "../assets/coffe.svg";
import egg from "../assets/egg.svg";
import plate from "../assets/fork-plate.svg";
import bread from "../assets/bread.svg";
import "./Menu.css";

const Menu = ({ breakfast, burgers, sideDish, drinks }) => {
  const [data, setData] = useState();
  const [order, setOrder] = useState([]);
  const [toggleState, setToggleState] = useState(1);
  
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getItem = (item) => {
    setOrder((currentOrder) => {
      return [...currentOrder, item];
    });
  };

  return (
    <div className="menu-container">
      <div className="side-menu">
        <button
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        >
          <img src={bread} className="side-menu-icon" />
          <p className="side-menu-text">Desayuno</p>
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        >
          <img src={plate} className="side-menu-icon" />
          <p className="side-menu-text">Principal</p>
        </button>
        <button
          onClick={() => toggleTab(3)}
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        >
          <img src={egg} className="side-menu-icon" />
          <p className="side-menu-text">Adicionales</p>
        </button>
        <button
          onClick={() => toggleTab(4)}
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
        >
          <img src={coffe} className="side-menu-icon" />
          <p className="side-menu-text">Bebestibles</p>
        </button>
      </div>

      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
        <Breakfast breakfast={breakfast} getItem={getItem} data={data} />
      </div>
      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <Lunch burgers={burgers} getItem={getItem} />
      </div>
      <div
        className={toggleState === 3 ? "content  active-content" : "content"}
      >
        <SideDish sideDish={sideDish} getItem={getItem} />
      </div>
      <div
        className={toggleState === 4 ? "content  active-content" : "content"}
      >
        <Drinks drinks={drinks} getItem={getItem} />
      </div>
      <Count order={order} setOrder={setOrder} />
    </div>
  );
};

export default Menu;
