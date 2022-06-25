import React, { useRef } from "react";

export default function UnControlledComponentSample() {
  let unControlledRef = useRef(null);
  let unControlledRef2 = useRef(null);
  function submitForm(e) {
    e.preventDefault();
    console.log(`Input field both value ${unControlledRef.current.value} - ${unControlledRef2.current.value}`);
  }

  return (
    <React.Fragment>
      <h5> UnControlled Component Sample</h5>
      <form onSubmit={submitForm}>
        <input type="text" ref={unControlledRef} />
        <br />
        <input type="text" ref={unControlledRef2}/>
        <br />
        <button>Submit UnControlled</button>
      </form>
    </React.Fragment>
  );
}
