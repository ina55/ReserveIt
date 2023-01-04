import React, { useContext } from "react";
import styles from "./Orders.module.css";
import { MenuContext } from "../context/MenuContext";
import CancelBtn from "./utilities/CancelBtn";

const OrdersReady = ({ orders }) => {
  const { deleteOrder } = useContext(MenuContext);
  return (
    <div className={styles.orderContainer}>
      {orders.length > 0 ? (
        orders.map((order) => {
          return (
            <div
              className={
                order.status === "Pendiente"
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
                  order.status === "Pendiente"
                    ? styles.orderStatus
                    : styles.orderStatusFalse
                }
              >
                {order.status}
              </h2>
              <div className={styles.orderInfoContainer}>
                <p className={styles.orderClientInfo}>Cliente</p>
                <p className={styles.orderClientInfoValue}>{order.client}</p>
                <h4 className={styles.orderClientInfo}>Table </h4>
                <h4 className={styles.orderClientInfoValue}>{order.table}</h4>
              </div>
              <div className={styles.orderItemsContainer}>
                <p className={styles.itemsTitle}>Artículos</p>
                {order.items.map((pedido, index) => {
                  return (
                    <div key={index}>
                      <div className={styles.orderItemsName}>
                        <p>{pedido.count}</p>
                        <p>{pedido.item}</p>
                        <p>{pedido.protein}</p>
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
          <h2>No hay ordenes pendientes!</h2>
        </>
      )}
    </div>
  );
};

export default OrdersReady;
