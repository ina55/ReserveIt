import React from "react";
import History from "./History";

const TablePage = ({table}) => {
  //!! in data we have a table object
  return (<>
    Info about table {table.tableConfiguration.index}
    <History table={table.tableConfiguration.index}/>
  </>);
};

export default TablePage;
