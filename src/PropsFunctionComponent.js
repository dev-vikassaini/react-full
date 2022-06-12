import React from "react";

function PropsFunctionComponent(props) {
  return (
    <React.Fragment>
      <h4>Props in function component</h4>
      <p>
        Name: <b>{props.name}</b>
      </p>
      <p>
        Age: <b>{props.age}</b>
      </p>
      <p>
        Sex: <b>{props.sex}</b>
      </p>
    </React.Fragment>
  );
}

export default PropsFunctionComponent;
