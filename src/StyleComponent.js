import React from "react";
import './StyleComponent.css';
import custom from './Custom.module.css'

export default function StyleComponent() {
  return (
    <React.Fragment>
      <div className="primary">Style 1 in react js</div>
      <div style={{color: 'red', backgroundColor: 'blue'}}>Style 2 in react js</div>
      <div className={custom.success}>Style 3 in react js</div>
    </React.Fragment>
  );
}
