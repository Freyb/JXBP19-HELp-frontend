import React from "react";
import Prefvalue from "./Prefvalue";

import "./listitem.css";

function ListItem(props) {
  return (
    <div className={"prefListContainer"}>
      <div
        className={"prefXmark"}
        onClick={e => props.onDelete(props.data.name)}
      ></div>
      <div className={"prefListName"}>{props.data.name}</div>
      <div className={"prefListPrefcontainer"}>
        <Prefvalue data={props.data} onChange={props.onChange} />
      </div>
    </div>
  );
}

export default ListItem;
