import React, { useState } from "react";
import "./App.css";
import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";
import PropsFunctionComponent from "./PropsFunctionComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [name, setName] = useState("Viom Saini");
  const [sex, setSex] = useState("Male");
  const [age, setAge] = useState("2");

  function updateFromParentValue() {
    setName("Viom Saini %S Vikas Kumar");
    setSex("Male");
    setAge("2.5 Year Old");
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-3">
            <FunctionComponent />
            <ClassComponent />
            <PropsFunctionComponent name="Vikas" sex="Male" age="32" />
            <br />
            <button onClick={() => updateFromParentValue()}>Send Props</button>
            <PropsFunctionComponent name={name} sex={sex} age={age} />
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
