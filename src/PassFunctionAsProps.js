import React from "react";

export default function PassFunctionAsProps(props) {
  return (
    <React.Fragment>
      <p>Pass Function As Props</p>
      <button onClick={()=> props.callParentFunction()}>Click Me From Child</button>
    </React.Fragment>
  );
}
