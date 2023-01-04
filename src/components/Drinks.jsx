import React from "react";
import "./Menu.css";

const Drinks = ({ drinks, getItem }) => {
  return (
    <div className="item-container">
      {drinks.map((item) => {
        return (
          <button
            key={item.id}
            className="menu-item"
            onClick={() => {
              getItem(item);
            }}
          >
            <h2>{item.item}</h2>
            {item.protein}
            <h1>{`${item.price} $`}</h1>
          </button>
        );
      })}
    </div>
  );
};

export default Drinks;
