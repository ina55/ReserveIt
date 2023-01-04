import React from "react";
import "./Menu.css";

const SideDish = ({ sideDish, getItem }) => {
  return (
    <div className="item-container">
      {sideDish.map((item) => {
        return (
          <button
            key={item.id}
            className="menu-item"
            onClick={() => {
              getItem(item);
            }}
          >
            <h2>{item.item}</h2>
            <h1>{`${item.price} $`}</h1>
          </button>
        );
      })}
    </div>
  );
};

export default SideDish;
