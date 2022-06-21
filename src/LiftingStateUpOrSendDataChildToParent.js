import React from "react";
import LiftingStateUpOrSendDataChildToParentChildComponent from "./LiftingStateUpOrSendDataChildToParentChildComponent";

export default function LiftingStateUpOrSendDataChildToParent() {
  const name = "Lifting State Up";
  function alertParentComponent(childData) {
    alert(`Name ${childData.name} age ${childData.age}`);
  }
  return (
    <React.Fragment>
      <h5> Lifting State Up Parent Component</h5>
      <LiftingStateUpOrSendDataChildToParentChildComponent
        name={name}
        alert={alertParentComponent}
      />
    </React.Fragment>
  );
}
