import React, {useContext, useEffect, useState} from "react";
import "./Menu.css";
import {Button, Col, Row, Select} from "antd";
import TableIcon from "./TableIcon";
import {CONFIG_TABLE, FREE_TABLE, GENERIC_RESTAURANT_ID, MAX_TABLE_NUM} from "../Constants";
import {MenuContext} from "../context/MenuContext";

const createTable = (index) => {
  return {
    index: index,
    status: CONFIG_TABLE,
    isDisabled: false,
    x: 0,
    y: 0
  };
}
const createTableArray = (numberOfTables) => {
  return Array.from({length: numberOfTables}, (_, i) => i + 1).map((element, index) => {
    return createTable(index + 1);
  });
}

const updateCoordinateVisualValue = (coordValue, mapCorner, type) => {
  if (type === '+') {
    return coordValue + mapCorner.x / 4 + 20;
  } else {
    return coordValue - mapCorner.y / 4 - 20;
  }
}

const TableConfiguration = () => {
  const height = '500px';
  const {addTableConfiguration, deleteTableConfiguration, getTableConfiguration} = useContext(MenuContext);
  const [numberOfTables, setNumberOfTables] = useState(1);
  const [tableArray, setTableArray] = useState(createTableArray(1));
  const [canUpdateNumberOfTables, setCanUpdateNumberOfTables] = useState(true);
  const tableSelectArray = Array.from({length: MAX_TABLE_NUM}, (_, i) => {
    return {value: i + 1, label: i + 1};
  });

  useEffect(() => {
    getTableConfiguration(GENERIC_RESTAURANT_ID).then((arr) => {
      const mapCorner = document.getElementById('drop-container').getBoundingClientRect();
      if (arr.length > 0) {
        const dataArray = [];
        arr.forEach((el) => {
          el.tableConfiguration.x = updateCoordinateVisualValue(el.tableConfiguration.x, mapCorner, '+');
          el.tableConfiguration.y = updateCoordinateVisualValue(el.tableConfiguration.y, mapCorner, '-');
          dataArray.push(el.tableConfiguration)
        });
        setTableArray(dataArray);
        setNumberOfTables(arr.length);
        setCanUpdateNumberOfTables(false);
      }
    });
  }, []);

  const updateNumberOfTables = (tableNumValue) => {
    setNumberOfTables(tableNumValue);
    setTableArray(createTableArray(tableNumValue));
  };

  const updateCoordinates = (index, x, y) => {
    const elem = tableArray[index - 1];
    elem.x = x;
    elem.y = y;
    const newArray = [...tableArray];
    setTableArray(newArray);
  };

  const saveConfiguration = () => {
    //now all the tables become free to use
    const mapCorner = document.getElementById('drop-container').getBoundingClientRect();
    tableArray.map((el) => {
      el.status = FREE_TABLE
      //save the configuration in db
      addTableConfiguration(GENERIC_RESTAURANT_ID, el);
      el.x = updateCoordinateVisualValue(el.x, mapCorner, '+');
      el.y = updateCoordinateVisualValue(el.y, mapCorner, '-');
    });
    setCanUpdateNumberOfTables(false);
  }

  const deleteConfiguration = () => {
    deleteTableConfiguration(GENERIC_RESTAURANT_ID);
    setNumberOfTables(1);
    setTableArray(createTableArray(1));
    setCanUpdateNumberOfTables(true);
  }

  return (
    <>
      <Row>
        <Col>
          <Row>Select a number of tables</Row>
          <Row>
            <Select
              disabled={!canUpdateNumberOfTables}
              value={numberOfTables}
              onChange={(value => updateNumberOfTables(value))}
              options={tableSelectArray}
              style={{width: '150px'}}
            />
          </Row>
          <>
            {
              tableArray.map((element) => {
                return <Row key={"row-table" + element.index}><TableIcon
                  index={element.index}
                  status={element.status}
                  isDisabled={element.isDisabled}
                  updateCoordinates={updateCoordinates}
                  x={element.x}
                  y={element.y}
                /></Row>
              })
            }
          </>
        </Col>
        <Col flex="auto">
          <div id="drop-container"
               style={{border: '2px solid', height: height, width: "auto", marginRight: '50px', marginLeft: '50px'}}/>
        </Col>
      </Row>
      <Row style={{display: 'flex', justifyContent: 'right', marginRight: '50px', marginTop: '10px'}}>
        <Button type="primary" onClick={saveConfiguration} disabled={!canUpdateNumberOfTables}>SUBMIT
          CONFIGURATION</Button>
        <Button type="primary" danger onClick={deleteConfiguration} disabled={canUpdateNumberOfTables}>RESET</Button>
      </Row>
    </>
  );
};

export default TableConfiguration;
