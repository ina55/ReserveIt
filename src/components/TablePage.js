import React from "react";

const TablePage = ({table}) => {
  //!! in data we have a table object
  return (<>
    Info about table {table.tableConfiguration.index}
  </>);
};

export default TablePage;
