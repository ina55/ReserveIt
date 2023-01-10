import React from "react";
import "./Menu.css";

const Snacks = ({ snacks, getItem, data }) => {
  return (
    <div className="item-container">
      <h1>{data}</h1>
      {snacks.map((item) => {
        return (
          <button
            key={item.id}
            className="menu-item"
            onClick={() => {
              getItem(item);
            }}
            value={item.item}
          >
            <h2>{item.item}</h2>
            <h1>{`${item.price} $`}</h1>
          </button>
        );
      })}
    </div>
  );
};

export default Snacks;
