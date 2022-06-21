import React from "react";

function PropsFunctionComponent(props) {
  return (
    <React.Fragment>
      <h4>Props in function component</h4>
      <p>
        Name:{" "}
        <b>
          {" "}
          <span> {props.name}</span>
        </b>
        Age:{" "}
        <b>
          {" "}
          <span> {props.age}</span>
        </b>
        Sex:{" "}
        <b>
          {" "}
          <span> {props.sex}</span>
        </b>
      </p>
    </React.Fragment>
  );
}

export default PropsFunctionComponent;
