import React from "react";
import {AppstoreOutlined} from '@ant-design/icons';
import {Row, Tabs} from 'antd';
import Logo from "../assets/reserveit-logo.svg";
import Orders from "../components/Orders";

const RestaurantManagementMainPage = () => {
  const items = [
    {
      label: <span><AppstoreOutlined/>Configure Tables</span>,
      key: 'configure-tables',
      children: null
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
        defaultActiveKey="active-orders"
        tabPosition="left"
        items={items}
      />
    </>
  );
};

export default RestaurantManagementMainPage;
