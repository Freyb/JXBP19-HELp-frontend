import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBody, CardTitle,
  Row, Col
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
    const filteredNewData = newData.filter((v, i, a) => a.indexOf(v) === i);
    if (newData.length === filteredNewData.length) {
      changeSelection(newData);
      props.onChange(newData);
    }
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
    <div className="h-100 prefdropdown">
      <Row className="align-items-center">
        <Col xs={3}>
          <img src="/logo192.png" className="w-100" />
        </Col>
        <Col xs={9}>
          <h1 className="title">HELp</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 9, offset: 3 }}>
          <h2 className="subtitle mb-4">Helsinki Enterprise Location Planner</h2>
        </Col>
      </Row>

      <Card className="shadow-lg mb-4 dropdowncard">
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

      {props.places && <Card className="shadow-lg flex-grow-1 mb-4 py-4 placescard">
        <CardTitle className="h4 text-center">Places nearby</CardTitle>
        <CardBody className="px-0">
          {props.places.map(place =>
            <a className="place-name" href="#" key={place.id}>{place.name}</a>
          )}
        </CardBody>
      </Card>
      }
    </div>
  );
}

export default Prefdropdown;
