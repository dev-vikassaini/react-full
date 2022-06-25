import React, { useState } from "react";

export default function ControlledComponentSample() {
  let [val, setVal] = useState("000");
  return (
    <React.Fragment>
      <h5> Controlled Component Sample</h5>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
    </React.Fragment>
  );
}
