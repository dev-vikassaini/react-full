import React, { useRef } from "react";
import Button from "./Button";

export default function SampleUseImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <React.Fragment>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </React.Fragment>
  );
}
