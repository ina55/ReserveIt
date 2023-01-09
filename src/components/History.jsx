import React, {useContext, useState} from "react";
import {Checkbox} from "antd";

const History = ({ order, setOrder }) => {

  return (
    <div className="history-items">
      {order.map((item, index) => {
      return (
        <div className="count-item" id={index}>
          <h3 className="count-item-info info">{item.item}</h3>
          <h3 className="count-item-info info">{item.protein}</h3>
          <Checkbox disabled checked={item.status === "Delivered"}/>
        </div>
      );
    })}
    </div>
  );
};

export default History;

