import React from "react";
import "./Person.css";

const person = props => {
  return (
    <p className="Person">
      I'm {props.name}
      <span>{props.children}</span>
      <input type="text" value={props.name} onChange={props.changed} />
    </p>
  );
};

export default person;
