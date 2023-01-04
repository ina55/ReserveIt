import React, { useContext, useState, useEffect } from "react";
import { MenuContext } from "../context/MenuContext";
import "./Menu.css";
import Quantity from "./Quantity";
import CancelBtn from "./utilities/CancelBtn";

const Count = ({ order, setOrder }) => {
  const { createOrder } = useContext(MenuContext);
  const [value, setValue] = useState();
  const [isToggleOn, setIsToggleOn] = useState(true);
  const [tables, setTables] = useState(0);
  const [errors, setErrors] = useState("");

  let subtotal;
  let tip;
  const tableArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  let orderDuplicates = new Set(order.map(JSON.stringify));
  order = Array.from(orderDuplicates).map(JSON.parse);

  const tablesSet = (table) => {
    setTables(table);
  };

  const removeItem = (id) => {
    const removedItem = order.filter((remove, i) => i !== id);
    setOrder(removedItem);
  };

  const handdleInput = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value === undefined) {
      setErrors("Ingresa Nombre del cliente");
      return;
    } else if (tables === 0) {
      setErrors("Select a table");
      return;
    } else if (order.length <= 0) {
      setErrors("Ingresa pedidos a la orden");
      return;
    } else {
      createOrder(value, order, tables);
    }
    setErrors("");
    setOrder([]);
    setValue("");
    setTables(0);
  };

  const addItemQty = (id) => {
    if (order.some((item) => item.id === id)) {
      const idproduct = order.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
      setOrder(idproduct);
    } else {
      setOrder([
        ...order,
        { id: id, item: order.item, price: order.price, count: 1 },
      ]);
    }
  };

  const subsItemQty = (id) => {
    const rest = order.map((item) => {
      if (item.count > 1) {
        return item.id === id ? { ...item, count: item.count - 1 } : item;
      } else {
        return item.id === id ? { ...item, count: 1 } : item;
      }
    });
    setOrder(rest);
  };

  return (
    <div className="count-container">
      <div className="count-client">
        <label htmlFor="client" className="count-client-label">
          Agregar Cliente
        </label>
        <input
          name="client"
          className="count-input-client"
          placeholder="Nombre del cliente"
          id="input"
          value={value}
          onChange={(e) => {
            handdleInput(e);
          }}
        />
        <select
          className="count-table"
          onChange={(e) => tablesSet(e.target.value)}
        >
          {tableArray.map((table) => (
            <option>{table}</option>
          ))}
        </select>
      </div>
      <div className="count-order">
        {order.length > 0 ? (
          order.map((item, index) => {
            return (
              <div key={index}>
                <div className="count-item" id={index}>
                  <Quantity
                    addItemQty={addItemQty}
                    subsItemQty={subsItemQty}
                    id={item.id}
                    qty={item.count}
                    price={item.price}
                  />
                  <h3 className="count-item-info info">{item.item}</h3>
                  <h3 className="count-item-info info">{item.protein}</h3>
                  <button
                    className="order-remove-button"
                    onClick={() => removeItem(index)}
                  >
                    <CancelBtn />
                  </button>
                </div>
                <hr className="separate" />
              </div>
            );
          })
        ) : (
          <div className="count-noitems">
            <p> Selecciona un producto del menú para agregarlo a la orden </p>
          </div>
        )}
      </div>
      <div className="count-total">
        <div className="count-total-info">
          <h4 className="count-errors">{errors}</h4>
          <span>Cliente: {value} </span>
          <span>Table: {tables <= 0 ? "" : tables} </span>
          <span>
            Propina: $
            {
              (tip =
                (order.reduce(
                  (previousValue, currentValue) =>
                    previousValue + currentValue.price * currentValue.count,
                  0
                ) *
                  10) /
                100)
            }
          </span>
        </div>
        <div className="count-total-sum">
          <h5>
            {" "}
            Subtotal ${" "}
            {
              (subtotal = order.reduce(
                (previousValue, currentValue) =>
                  previousValue + currentValue.price * currentValue.count,
                0
              ))
            }
          </h5>
          <h2>Total: $ {subtotal + tip}</h2>
        </div>
        <button
          className={
            isToggleOn
              ? "send-order-button"
              : "send-order-button send-order-button-active"
          }
          onClick={handleClick}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Count;
