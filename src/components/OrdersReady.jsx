import React, { useContext } from "react";
import styles from "./Orders.module.css";
import { MenuContext } from "../context/MenuContext";
import CancelBtn from "./utilities/CancelBtn";
import {Checkbox} from "antd";

const OrdersReady = ({ orders }) => {
  const { deleteOrder, markOrderAsDelivered } = useContext(MenuContext);
  return (
    <div className={styles.orderContainer}>
      {orders.length > 0 ? (
        orders.map((order) => {
          return (
            <div
              className={
                order.status === "Pending"
                  ? styles.orderItem
                  : styles.orderItemReady
              }
              key={order.id}
            >
              <button
                className={styles.orderRemoveBtn}
                value={order.id}
                onClick={() => deleteOrder(order.id)}
              >
                <CancelBtn />
              </button>
              <h2
                className={
                  order.status === "Pending"
                    ? styles.orderStatus
                    : styles.orderStatusFalse
                }
              >
                {order.status}
              </h2>
              <div className={styles.orderInfoContainer}>
                <p className={styles.orderClientInfo}>Clients number</p>
                <p className={styles.orderClientInfoValue}>{order.client}</p>
                <h4 className={styles.orderClientInfo}>Table </h4>
                <h4 className={styles.orderClientInfoValue}>{order.table}</h4>
              </div>
              <div className={styles.orderItemsContainer}>
                <p className={styles.itemsTitle}>Items</p>
                {order.items.map((pedido, index) => {
                  return (
                    <div key={index}>
                      <div className={styles.orderItemsName}>
                        <p>{pedido.count}</p>
                        <p>{pedido.item}</p>
                        {/*<p>{pedido.protein}</p>*/}
                        <Checkbox checked={pedido.status === "Delivered"} onChange={() => markOrderAsDelivered(order.id, pedido.id)}/>
                      </div>
                      <hr className={styles.separate} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      ) : (
        <>
          <h2>No orders pending!</h2>
        </>
      )}
    </div>
  );
};

export default OrdersReady;
