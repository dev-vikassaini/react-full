import React, { useState } from "react";
import "./App.css";
import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";
import PropsFunctionComponent from "./PropsFunctionComponent";
import PropsClassComponent from "./PropsClassComponent";
import GetValueFromInput from "./GetValueFromInput";
import HideShowComponent from "./HideShowComponent";
import HandleReactFormComponent from "./HandleReactFormComponent";
import PassFunctionAsProps from "./PassFunctionAsProps";
import ClassComponentLifeCycle from "./ClassComponentLifeCycle";
import ComponentUseEffect from "./ComponentUseEffect";
import StyleComponent from "./StyleComponent";
import HandleArrayListComponent from "./HandleArrayListComponent";
import LiftingStateUpOrSendDataChildToParent from "./LiftingStateUpOrSendDataChildToParent";
import PureComponentSample from "./PureComponentSample";
import MemoUseMemoComponent from "./MemoUseMemoComponent";
import RefComponent from "./RefComponent";
import RefFunctionComponent from "./RefFunctionComponent";
import ForwardRefComponentParent from "./ForwardRefComponentParent";
import ControlledComponentSample from "./ControlledComponentSample";
import UnControlledComponentSample from "./UnControlledComponentSample";
import SimpleHOCComponent from "./SimpleHOCComponent";
import RoutingComponent from "./RoutingComponent";
import SampleUseStateComponent from "./UseState/SampleUseStateComponent";
import SampleUseReducerComponent from "./UseReducer/SampleUseReducerComponent";
import SampleUseEffectComponent from "./UseEffect/SampleUseEffectComponent";
import SampleRefComponent from "./UseRef/SampleRefComponent";
import SampleUseLayoutEffect from "./UseLayoutEffect/SampleUseLayoutEffect";
import SampleUseImperativeHandle from './UseImperativeHandle/SampleUseImperativeHandle';
import SampleUseMemoComponent from './UseMemo/SampleUseMemoComponent';
import SampleUseCallbackComponent from './UseCallback/SampleUseCallbackComponent';

import { useGlobalContext } from "./UseContext/context";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [name, setName] = useState("Viom Saini");
  const [sex, setSex] = useState("Male");
  const [age, setAge] = useState("2");

  const [name2, setName2] = useState("Vini Saini");
  const [sex2, setSex2] = useState("Female");
  const [age2, setAge2] = useState("2");

  function updateFromParentValue() {
    setName("Viom Saini %S Vikas Kumar");
    setSex("Male");
    setAge("2.5 Year Old");

    setName2("Vini Saini %S Vikas Kumar");
    setSex2("Female");
    setAge2("2.5 Year Old");
  }

  function passFunctionAsProps() {
    alert("Hello Parent from Child.");
  }

  const contextData = useGlobalContext();
  return (
    <div className="App">
      <div className="row">
        <div className="col col-md-3">
          <FunctionComponent />
          <ClassComponent />
          <PropsFunctionComponent name="Vikas" sex="Male" age="32" />
          <button onClick={() => updateFromParentValue()}>Send Props</button>
          <PropsFunctionComponent name={name} sex={sex} age={age} />
          <PropsClassComponent name={name2} sex={sex2} age={age2} />
          <GetValueFromInput />
          <HideShowComponent />
          <HandleReactFormComponent />
        </div>
        <div className="col col-md-3">
          <PassFunctionAsProps callParentFunction={passFunctionAsProps} />
          <ClassComponentLifeCycle />
          <ComponentUseEffect />
          <StyleComponent />
          <HandleArrayListComponent />
        </div>
        <div className="col col-md-3">
          <LiftingStateUpOrSendDataChildToParent />
          <PureComponentSample />
          <MemoUseMemoComponent />
          <RefComponent />
          <RefFunctionComponent />
          <ForwardRefComponentParent />
          <ControlledComponentSample />
          <UnControlledComponentSample />
        </div>
        <div className="col col-md-3">
          {/* <SimpleHOCComponent /> */}
          <RoutingComponent />
          <SampleUseStateComponent />
          <SampleUseReducerComponent />
          <SampleUseEffectComponent />
          <SampleRefComponent />
          <SampleUseLayoutEffect />
          <SampleUseImperativeHandle />
          <br/>
          <h4>THIS IS CONTEXT DATA ------- {contextData}</h4>
          <br/>
          <SampleUseMemoComponent />
          <SampleUseCallbackComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
