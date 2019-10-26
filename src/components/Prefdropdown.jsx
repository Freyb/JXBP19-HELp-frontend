import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import ListItem from "./ListItem";
import "./prefdropdown.css";
import data from "../tags_list";

function Prefdropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  const [selectedItems, changeSelection] = useState([
    { name: "test", pref: 1 }
  ]);
  const addEvent = event =>
    changeSelection([
      ...selectedItems,
      { name: event.currentTarget.value, pref: 0 }
    ]);

  const changePref = (name, pref) =>
    changeSelection(
      selectedItems.map(d => (d.name === name ? { name, pref } : d))
    );

  const deletePref = name =>
    changeSelection(selectedItems.filter(d => d.name !== name));

  return (
    <div className={"sidebarcontainer"}>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu className={"mydropdown"}>
          {[...data].sort().map(d => (
            <DropdownItem key={d} value={d} onClick={addEvent}>
              {d}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <div className={"taglistcontainer"}>
        {selectedItems.map(d => (
          <ListItem
            key={d}
            data={d}
            onChange={changePref}
            onDelete={deletePref}
          />
        ))}
      </div>
    </div>
  );
}

export default Prefdropdown;
