import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBody
} from "reactstrap";
import ListItem from "./ListItem";
import "./prefdropdown.css";
import data from "../tags_list";

function Prefdropdown(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  const [selectedItems, changeSelection] = useState([]);
  const addEvent = event => {
    const newData = [
      ...selectedItems,
      { name: event.currentTarget.value, pref: 2 }
    ];
    changeSelection(newData);
    props.onChange(newData);
  };

  const changePref = (name, pref) => {
    const newData = selectedItems.map(d =>
      d.name === name ? { name, pref } : d
    );
    changeSelection(newData);
    props.onChange(newData);
  };

  const deletePref = name => {
    const newData = selectedItems.filter(d => d.name !== name);
    changeSelection(newData);
    props.onChange(newData);
  };

  return (
    <div className="d-flex h-100 flex-column">
      <h1 class="title">HELp</h1>
      <h2 class="subtitle mb-4">Helsinki Enterprise Location Planner</h2>

      <Card className="shadow-lg flex-grow-1 mb-4">
        <CardBody>
          <Dropdown isOpen={dropdownOpen} toggle={toggle} className="mx-auto w-75">
            <DropdownToggle caret className="w-100 mb-5">Tags</DropdownToggle>
            <DropdownMenu className={"mydropdown w-100"}>
              {[...data].sort().map(d => (
                <DropdownItem key={d} value={d} onClick={addEvent}>
                  {d}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          {selectedItems.map(d => (
            <ListItem
              key={d.name}
              data={d}
              onChange={changePref}
              onDelete={deletePref}
            />
          ))}
        </CardBody>
      </Card>
    </div>
  );
}

export default Prefdropdown;
