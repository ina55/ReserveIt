import React from "react";
import AddBtn from "./utilities/AddBtn";
import MinBtn from "./utilities/MinBtn";
import "./Menu.css";

const Quantity = ({ addItemQty, subsItemQty, id, qty, price }) => {
  return (
    <div className="quantity">
      <button onClick={() => subsItemQty(id)} className="count-order-btn">
        <MinBtn />
      </button>
      <span className="info"> {qty} </span>
      <button onClick={() => addItemQty(id)} className="count-order-btn">
        <AddBtn />
      </button>
      <span className="info">{qty * price}</span>
      <span className="info">$</span>
    </div>
  );
};

export default Quantity;
