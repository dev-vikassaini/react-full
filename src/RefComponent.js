import React, { Component, createRef } from "react";

export default class RefComponent extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  componentDidMount() {
    console.warn(this.inputRef.current.value = "1000");
  }
  getValue(){
    console.warn(this.inputRef.current.value);
    this.inputRef.current.style.color = "red";
    this.inputRef.current.style.backgroundColor = "orange";
  }
  render() {
    return (
      <React.Fragment>
        <h5> RefComponent</h5>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.getValue()}>GET REF VALUE</button>
      </React.Fragment>
    );
  }
}
