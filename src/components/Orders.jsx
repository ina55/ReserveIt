import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import styles from "./Orders.module.css";
import OrdersReady from "./OrdersReady";
import OrdersPending from "./OrdersPending";
import chef from "../assets/chef-gorro.svg";
import waiter from "../assets/waiter.svg";
import notification from "../assets/notification.png";
import Notifications from "./Notifications";

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

  const orderReady = orders.filter((order) => order.status === "Pending");
  const orderPendding = orders.filter(
    (order) => order.status === "To be delivered"
  );
  const notifications = orders.filter((order) => order.status === "Ring bell" || order.status === "Bill");

  const orderStatusHaddle = () => {
    if (orders.status === "Pending") {
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
      <div className={styles.ordersMenu}>
        <button
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? styles.activeTabs : styles.tabs}
        >
          <img src={chef} alt="gorro-chef" className={styles.icons} />
          <p className={styles.ordersMenuText}>Pending</p>
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? styles.activeTabs : styles.tabs}
        >
          <img src={waiter} alt="gorro-chef" className={styles.icons} />
          <p className={styles.ordersMenuText}>Ready</p>
        </button>
        <button
          onClick={() => toggleTab(3)}
          className={toggleState === 3 ? styles.activeTabs : styles.tabs}
        >
          <img src={notification} alt="gorro-chef" className={styles.icons} />
          <p className={styles.ordersMenuText}>Notifications</p>
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
      <div
        className={toggleState === 3 ? styles.activeContent : styles.content}
      >
        <Notifications notifications={notifications}/>
      </div>
    </div>
  );
};

export default Orders;
