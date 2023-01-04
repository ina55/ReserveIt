import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import styles from "./Orders.module.css";
import OrdersReady from "./OrdersReady";
import OrdersPending from "./OrdersPending";
import chef from "../assets/chef-gorro.svg";
import waiter from "../assets/waiter.svg";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersCollection = collection(db, "orders");
    const q = query(ordersCollection, orderBy("date", "desc"));
    const getOrders = onSnapshot(q, (snapshot) =>
      setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return getOrders;
  }, []);

  const orderReady = orders.filter((order) => order.status === "Pendiente");
  const orderPendding = orders.filter(
    (order) => order.status === "Listo para servir"
  );

  const orderStatusHaddle = () => {
    if (orders.status === "Pendiente") {
      return orderPendding;
    } else {
      return orderReady;
    }
  };

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={styles.ordersContainer}>
      <h1 className={styles.ordersTitle}>Ordenes</h1>
      <div className={styles.ordersMenu}>
        <button
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? styles.activeTabs : styles.tabs}
        >
          <img src={chef} alt="gorro-chef" className={styles.icons} />
          <p className={styles.ordersMenuText}>Pendientes</p>
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? styles.activeTabs : styles.tabs}
        >
          <img src={waiter} alt="gorro-chef" className={styles.icons} />
          <p className={styles.ordersMenuText}>Listas</p>
        </button>
      </div>
      <div
        className={toggleState === 1 ? styles.activeContent : styles.content}
      >
        <OrdersPending orders={orderReady} />
      </div>
      <div
        className={toggleState === 2 ? styles.activeContent : styles.content}
      >
        <OrdersReady orders={orderPendding} />
      </div>
    </div>
  );
};

export default Orders;
