import React, { forwardRef } from "react";

function ForwardRefComponentChild(props, parentRef) {
  return (
    <React.Fragment>
      <input type="text" ref={parentRef} />
      <h5>Forward Ref Component Child</h5>
    </React.Fragment>
  );
}

export default forwardRef(ForwardRefComponentChild);
