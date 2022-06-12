import React, { useState } from "react";

function FunctionComponent() {
  const [data, setData] = useState("Vikas Kumar Saini");
  function updateValue() {
    setData("Vikas Kumar Saini Update Ho Gya");
  }

  return (
    <React.Fragment>
      <h4>Function Component</h4>
      <h5>{data}</h5>
      <button onClick={updateValue}>Click Me</button>
    </React.Fragment>
  );
}

export default FunctionComponent;
