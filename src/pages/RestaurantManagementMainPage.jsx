import React, {useContext, useEffect, useState} from "react";
import {AppstoreOutlined} from '@ant-design/icons';
import {Row, Tabs} from 'antd';
import Logo from "../assets/reserveit-logo.svg";
import Orders from "../components/Orders";
import TableConfiguration from "../components/TableConfiguration";
import {MenuContext} from "../context/MenuContext";
import {GENERIC_RESTAURANT_ID} from "../Constants";
import TablePlan from "../components/TablePlan";
import TablePage from "../components/TablePage";
import MenuConfiguration from "../components/MenuConfiguration";

const RestaurantManagementMainPage = () => {
  const [tablesData, setTablesData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [activeKey, setActiveKey] = useState('table-plan');
  const [tableInfoData, setTableInfoData] = useState({});
  const {addTableConfiguration, deleteTableConfiguration, getTableConfiguration, addFood, deleteFood, getFoodItem, getFood} = useContext(MenuContext);

  useEffect(() => {
    //get food data from db
    getFood().then((arr) => {setFoodData(arr);});

    //get tables data from db
    getTableConfiguration(GENERIC_RESTAURANT_ID).then((arr) => {
      arr = arr.sort((a, b) => a.tableConfiguration.index - b.tableConfiguration.index);
      setTablesData(arr);
    });
  }, []);

  const saveItem = (item, items) => {
    //items.filter(function(item) {return getFoodItem(item).isEmpty()}).map((item) => addFood(item));
    //items.map((item) => addFood(item));
    addFood(item);
    setFoodData(items);
  }

  const deleteItem = (items, itemId) => {
    items.filter((item) => deleteFood(itemId));
    setFoodData(items);
  }

  //update tables info in db
  const saveTablesConfiguration = (newTableConfiguration) => {
    newTableConfiguration.map((el) => {
      addTableConfiguration(el);
    });
    setTablesData(newTableConfiguration);
  };
  const deleteTablesConfiguration = () => {
    deleteTableConfiguration(GENERIC_RESTAURANT_ID);
    setTablesData([]);
  };

  //method to move to table page
  const moveToPageTab = (index) => {
    setActiveKey('table-info');
    setTableInfoData(tablesData[index - 1]);
  };

  const items = [
    {
      label: <span><AppstoreOutlined/>Configure Tables</span>,
      key: 'configure-tables',
      children: <TableConfiguration
        tablesData={tablesData}
        saveTablesConfiguration={saveTablesConfiguration}
        deleteTablesConfiguration={deleteTablesConfiguration}/>
    },
    {
      label: <span><AppstoreOutlined/>Configure Menu</span>,
      key: 'configure-menu',
      children: <MenuConfiguration
        foodData={foodData}
        saveItem={saveItem}
        deleteItem={deleteItem}/>
    },
    {
      label: <span><AppstoreOutlined/>Table Plan</span>,
      key: 'table-plan',
      children: <TablePlan
        tablesData={tablesData}
        accessTable={moveToPageTab}/>
    },
    {
      label: <span><AppstoreOutlined/>Active Orders</span>,
      key: 'active-orders',
      children: <Orders/>
    },
    {
      label: <span><AppstoreOutlined/>Table Info</span>,
      key: 'table-info',
      children: <TablePage table={tableInfoData}/>,
      disabled: true
    }
  ];

  const changeTab = (key) => {
    setActiveKey(key);
  };

  return (
    <>
      <Row>
        <img src={Logo} alt="burger-queen" className="menu-logo"/>
      </Row>
      <Tabs
        activeKey={activeKey}
        onChange={changeTab}
        tabPosition="left"
        items={items}
      />
    </>
  );
};

export default RestaurantManagementMainPage;
