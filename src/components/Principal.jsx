import React from "react";
import "./Menu.css";

const Lunch = ({ burgers, getItem }) => {
  return (
    <div className="item-container">
      {burgers.map((item) => {
        return (
          <button
            key={item.id}
            className="menu-item"
            onClick={() => {
              getItem(item);
            }}
          >
            <h2>{item.item}</h2>
            <h3>{item.protein}</h3>
            <h1>{`${item.price} $`}</h1>
          </button>
        );
      })}
    </div>
  );
};

export default Lunch;
