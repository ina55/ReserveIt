import React, {  useContext  } from "react";
import styles from "./Orders.module.css";
import bell from "../assets/bell.png"
import bill from "../assets/bill.png";
import { MenuContext } from "../context/MenuContext";

const Notifications  = ({notifications}) => {
  const { deleteOrder } = useContext(MenuContext);
  return (
    <div className={styles.orderContainer}>
      {notifications.length > 0 ? (
        notifications.map((n) => {
          return (
            <div className={styles.notificationItem}>
              {n.status === "Ring bell" && <img src={bell} height={50}/>}
              {n.status === "Bill" && <img src={bill} height={50}/>}
                <h4>You are called to table {n.table.table}.</h4>
                <button className={styles.notificationCheckBtn}
                  onClick={() => {
                    deleteOrder(n.id)
                  }}>Close</button>
              </div>
          )
        })) :
        (
        <>
          <h3>No notifications!</h3>
        </>
      )}
    </div>
  )
}

export default Notifications;
