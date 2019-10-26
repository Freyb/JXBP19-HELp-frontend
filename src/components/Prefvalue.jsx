import React from "react";
import "./prefvalue.css";

function Prefvalue(props) {
  return (
    <div className={"prefcirclecontainer"}>
      {[0, 1, 2, 3].map(v => (
        <div
          className={`prefcircle ${v === props.data.pref ? "activecircle" : ""}`}
          onClick={e => props.onChange(props.data.name, v)}
        ></div>
      ))}
    </div>
  );
}

export default Prefvalue;
