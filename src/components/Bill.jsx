import React, { useContext, useState, useEffect } from "react";
import { MenuContext } from "../context/MenuContext";
import billImg from "../assets/bill.png"
import "./Menu.css";

const Bill = (table) => {
  const { notifyWaiter } = useContext(MenuContext);

  return <button variant="default"
                 style={{ color: "white", height: 55 }}
                 onClick={() => {
                   notifyWaiter(table, "Bill");
                 }}>
    <img src={billImg} height={50} width={50}/>
  </button>

}

export default Bill;
