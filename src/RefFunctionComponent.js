import React, { useRef } from "react";

export default function RefFunctionComponent() {
  let refValue = useRef(null);
  function handleInput() {
    refValue.current.value = "1000";
    refValue.current.focus();
  }
  return (
    <React.Fragment>
      <h5>useRef in function component</h5>
      <input type="text" ref={refValue} />
      <button onClick={handleInput}>GET REF VALUE Use useRef</button>
    </React.Fragment>
  );
}
