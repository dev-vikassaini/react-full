import React, { useState } from "react";

export default function SampleUseStateComponent() {
  const [state, setState] = useState({ vikasAge: 32, VishakhaSaini: 29 });
  const handleAgeClick = (val) =>
    setState({
      ...state,
      [val]: state[val] + 1,
    });
    const { vikasAge, VishakhaSaini } = state

  return (
    <React.Fragment>
      <h5>Sample UseState Component</h5>{" "}

      <p>Today I am {vikasAge} Years of Age</p>
      <p>My Wife {VishakhaSaini}</p>

      <div>
        <button onClick={handleAgeClick.bind(null, 'vikasAge')}>Get older!</button>
        <button onClick={handleAgeClick.bind(null, 'VishakhaSaini')}>
          More siblings!
        </button>
      </div>

    </React.Fragment>
  );
}
