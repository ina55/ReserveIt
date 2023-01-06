import React, {useContext, useEffect, useState} from "react";
import {AppstoreOutlined} from '@ant-design/icons';
import {Row, Tabs} from 'antd';
import Logo from "../assets/reserveit-logo.svg";
import Orders from "../components/Orders";
import TableConfiguration from "../components/TableConfiguration";
import {MenuContext} from "../context/MenuContext";
import {GENERIC_RESTAURANT_ID} from "../Constants";

const RestaurantManagementMainPage = () => {
  const [tablesData, setTablesData] = useState([]);
  const {addTableConfiguration, deleteTableConfiguration, getTableConfiguration} = useContext(MenuContext);

  useEffect(() => {
    //get tables data from db
    getTableConfiguration(GENERIC_RESTAURANT_ID).then((arr) => {
      setTablesData(arr);
      console.log(arr)
    });
  }, []);

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
      children: null
    },
    {
      label: <span><AppstoreOutlined/>Table Plan</span>,
      key: 'table-plan',
      children: null
    },
    {
      label: <span><AppstoreOutlined/>Active Orders</span>,
      key: 'active-orders',
      children: <Orders/>
    }
  ];

  return (
    <>
      <Row>
        <img src={Logo} alt="burger-queen" className="menu-logo"/>
      </Row>
      <Tabs
        defaultActiveKey="configure-tables"
        tabPosition="left"
        items={items}
      />
    </>
  );
};

export default RestaurantManagementMainPage;
