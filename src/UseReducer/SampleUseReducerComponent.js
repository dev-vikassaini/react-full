import React, { useReducer, useEffect, useRef } from "react";
import SampleLoginReducerComponent from './SampleLoginReducerComponent';

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true };
    case "stop":
      return { ...state, isRunning: false };
    case "reset":
      return { isRunning: false, time: 0 };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}

export default function SampleUseReducer() {
  const initialState = {
    isRunning: false,
    time: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(0);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <React.Fragment>
      <h5>SampleUseReducer</h5>
      <h4>{state.time} s</h4>
      <br/>
      <button onClick={() => dispatch({ type: "start" })}>Start</button>
      <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br/>
      <SampleLoginReducerComponent />
    </React.Fragment>
  );
}
