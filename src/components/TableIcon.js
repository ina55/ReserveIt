import React from "react";
import freeTable from "../assets/free-table.png";
import busyTable from "../assets/busy-table.png";
import configTable from "../assets/config-table.png";
import Draggable from "react-draggable";
import {CONFIG_TABLE, FREE_TABLE} from "../Constants";

const TableIcon = (props) => {
  const imgSrc = props.status === CONFIG_TABLE ? configTable : (props.status === FREE_TABLE ? freeTable : busyTable);

  if (props.status === CONFIG_TABLE) {
    return (
      <Draggable
        disabled={props.isDisabled}
        onStop={(e) => {
          const el = document.getElementById('drop-container').getBoundingClientRect();
          const x = e.x - el.x + 45;
          const y = e.y - el.y - 45;
          props.updateCoordinates(props.index, x, y);
        }}
      >
        <div style={{position: "relative"}}>
          <img src={imgSrc} height={100} width={100}/>
          <span style={{display: 'flex', justifyContent: 'center'}}>{props.index}</span>
        </div>
      </Draggable>
    );
  } else {
    return (
      <button style={{position: 'absolute', left: props.x, top: props.y}}
              className="table-button"
              onClick={() => props.accessTable(props.index)}
      >
        <img src={imgSrc} height={100} width={100}/>
        <span style={{display: 'flex', justifyContent: 'center'}}>{props.index}</span>
      </button>
    );
  }
};

export default TableIcon;
