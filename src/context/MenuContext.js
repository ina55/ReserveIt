import React, { createContext, useState, useEffect } from "react";
import menu from "../data/menu.json";
import { db } from "../firebase/firebase";
import {
  addDoc,
  collection,
  Timestamp,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const createOrder = async (client, items, table) => {
    const orders = await addDoc(collection(db, "orders"), {
      client: client,
      items: items,
      table: table,
      date: Timestamp.fromDate(new Date()),
      status: "Pending",
    });
    return orders;
  };

  const getOrders = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "orders")),
      orderBy("date", "desc")
    );
    const arr = [];
    querySnapshot.forEach((order) =>
      arr.push(Object.assign(order.data(), { id: order.id }))
    );
    return arr;
  };

  const deleteOrder = (id) => deleteDoc(doc(db, "orders", id));

  const updateOrder = async (id, status) => {
    const orderDoc = doc(db, "orders", id);
    const statusUpdate = { status: "To be delivered" };
    await updateDoc(orderDoc, statusUpdate);
  };

  const notifyWaiter = async (table, notificationType) => {
    const orders = await addDoc(collection(db, "orders"), {
      table: table,
      date: Timestamp.fromDate(new Date()),
      status: notificationType,
    });
    return orders;
  };

  const [breakfast, setBreakfast] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [sideDish, setSideDish] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    setBreakfast(menu.breakfast);
    setBurgers(menu.lunch[0]);
    setSideDish(menu.lunch[1]);
    setDrinks(menu.lunch[2]);
  }, []);

  return (
    <MenuContext.Provider
      value={{
        breakfast,
        burgers,
        sideDish,
        drinks,
        createOrder,
        getOrders,
        deleteOrder,
        updateOrder,
        notifyWaiter
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
