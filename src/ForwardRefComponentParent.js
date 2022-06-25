import React, { useRef } from "react";
import ForwardRefComponentChild from "./ForwardRefComponentChild";

export default function ForwardRefComponentParent() {
  let inputRef = useRef(null);
  function updateInput() {
    inputRef.current.value = "1000000";
  }
  return (
    <React.Fragment>
      <h5>Forward Ref Component Parent</h5>
      <ForwardRefComponentChild ref={inputRef} />
      <button onClick={updateInput}>Update Input Box</button>
    </React.Fragment>
  );
}
