import React, { useState } from "react";

export default function HideShowComponent() {
  const [status, setStatus] = useState(false);

  return (
    <React.Fragment>
        <h4>Hide Show Component</h4>
        {status ? <h5>Good Job Vini Viom</h5> : null}
        <button onClick={() => setStatus(false)}>Show</button>
        <button onClick={() => setStatus(true)}>Hide</button>
    </React.Fragment>
  );
}
