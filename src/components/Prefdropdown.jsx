import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./prefdropdown.css";
import data from "../tags_list";

function Prefdropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const select = event => console.log(event.currentTarget.value);

  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu className={"mydropdown"}>
          {[...data].sort().map(d => (
            <DropdownItem key={d} value={d} onClick={select}>
              {d}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Prefdropdown;
