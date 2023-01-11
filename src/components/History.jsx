import React, {useContext, useEffect, useState} from "react";
import {Checkbox} from "antd";
import {MenuContext} from "../context/MenuContext";

const History = ({ table, tick }) => {

  const { getOrdersForHistory } = useContext(MenuContext);


  const [items, setItems] = useState([]);
  useEffect(() => {
    getOrdersForHistory(table).then((orders) => {
      let arr = [];
      orders.forEach(order => arr = arr.concat(order.items))
      setItems(arr)
    });
  }, [table, tick]);

  return (
    <div className="history-items">
      {items.map((item, index) => {
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

