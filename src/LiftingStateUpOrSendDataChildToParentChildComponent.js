import React from "react";

export default function LiftingStateUpOrSendDataChildToParentChildComponent(
  props
) {
  const childData = {
    name: 'vikas',
    age:32
  }
  return (
    <React.Fragment>
      <h5> Lifting State Up Child Component {props.name}</h5>
      <button onClick={()=>props.alert(childData)}>Click Me</button>
    </React.Fragment>
  );
}
