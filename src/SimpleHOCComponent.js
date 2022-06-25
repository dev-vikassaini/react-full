import React, { useState } from "react";

function SimpleHOCComponent() {
  return (
    <React.Fragment>
      <h5> Simple HOC Component</h5>
      {/* <SimpleHOCComponent2 />
      <SimpleHOCComponent2 /> */}
      <HOCComponentRed hocComp={SimpleHOCComponent2} />
      <HOCComponentGreen hocComp={SimpleHOCComponent2} />
    </React.Fragment>
  );
}

function SimpleHOCComponent2() {
  const [hCount, hSetCount] = useState(0);
  return (
    <React.Fragment>
      <h5>{hCount}</h5>
      <button onClick={() => hSetCount(hCount + 1)}>Update</button>
    </React.Fragment>
  );
}

function HOCComponentRed(props) {
  return (
    <div style={{ backgroundColor: "red", width: 100 }}>
      Red <props.hocComp />
    </div>
  );
}
function HOCComponentGreen(props) {
  return (
    <div style={{ backgroundColor: "green", width: 100 }}>
      Green <props.hocComp />
    </div>
  );
}
export default SimpleHOCComponent;
