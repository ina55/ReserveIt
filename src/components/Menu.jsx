import React, { useContext, useEffect, useState } from "react";
import Snacks from "./Snacks";
import Principal from "./Principal";
import SideDish from "./SideDish";
import Drinks from "./Drinks";
import Count from "./Count";
import Ringbell from "./Ringbell"
import coffe from "../assets/coffe.svg";
import egg from "../assets/egg.svg";
import plate from "../assets/fork-plate.svg";
import bread from "../assets/bread.svg";
import "./Menu.css";
import snacks from "./Snacks";

const Menu = ({ snacks, principal, sideDish, drinks, tableId }) => {
  const [data, setData] = useState();
  const [order, setOrder] = useState([]);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getItem = (item) => {
    setOrder((currentOrder) => {
      return [...currentOrder, {...item, count: 1}];
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
          <p className="side-menu-text">Snacks</p>
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
          <p className="side-menu-text">Side dishes</p>
        </button>
        <button
          onClick={() => toggleTab(4)}
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
        >
          <img src={coffe} className="side-menu-icon" />
          <p className="side-menu-text">Drinks</p>
        </button>
      </div>

      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
        <Snacks snacks={snacks} getItem={getItem} data={data} />
      </div>
      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <Principal principal={principal} getItem={getItem} />
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
      <Count order={order} setOrder={setOrder} tableId={tableId}/>
    </div>
  );
};

export default Menu;
