import React, { useLayoutEffect, useEffect, useRef } from "react";

export default function SampleUseLayoutEffect() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    console.log("useEffect in useLayoutEffect page");
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <React.Fragment>
      <div>
        <input
          ref={inputRef}
          defaultValue="PEDRO"
          style={{ width: 400, height: 60 }}
        />
      </div>
    </React.Fragment>
  );
}
