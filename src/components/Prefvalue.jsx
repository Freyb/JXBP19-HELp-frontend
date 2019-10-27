import React from "react";
import "./prefvalue.css";

function Prefvalue(props) {
  const max = (v1, v2) => (v1 > v2 ? v1 : v2);
  const min = (v1, v2) => (v1 < v2 ? v1 : v2);

  return (
    <div className={"prefcontainer"}>
      <div
        className={"prefMinusmark"}
        onClick={e =>
          props.onChange(props.data.name, max(props.data.pref - 1, 0))
        }
      ></div>
      <div className={"prefcirclecontainer"}>
        {[0, 1, 2, 3].map(v => (
          <div
            key={v}
            className={`prefcircle ${
              v === props.data.pref || v === Math.floor(props.data.pref / 2) + 1
                ? "activecircle"
                : ""
            }`}
            onClick={e => props.onChange(props.data.name, v)}
          ></div>
        ))}
      </div>
      <div
        className={"prefPlusmark"}
        onClick={e =>
          props.onChange(props.data.name, min(props.data.pref + 1, 3))
        }
      ></div>
    </div>
  );
}

export default Prefvalue;
