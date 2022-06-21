import React, { useState } from "react";

export default function GetValueFromInput() {
  const [data, setData] = useState(null);
  function getData(val) {
    setData(val.target.value);
  }

  return (
    <React.Fragment>
      <h4>Get Input Box Value data: </h4>
      <h5>{data}</h5>
      <input type="text" onChange={getData} />
    </React.Fragment>
  );
}
