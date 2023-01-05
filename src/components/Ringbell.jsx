import React, { useContext, useState, useEffect } from "react";
import { MenuContext } from "../context/MenuContext";
import bellImg from "../assets/bell.png"
import "./Menu.css";

const Ringbell = (table) => {
  const { notifyWaiter } = useContext(MenuContext);

  return <button variant="default"
                 style={{ color: "white", height: 55 }}
                 onClick={() => {
                   notifyWaiter(table, "Ring bell");
                 }}>
    <img src={bellImg} height={50} width={50}/>
  </button>

}

export default Ringbell;
