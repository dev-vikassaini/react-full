import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: "Vikas This is class component",
    };
  }

  updateValue() {
    this.setState({ data: "Vikas This is class component updated" });
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h4>Class Component</h4>
          <h5>{this.state.data}</h5>
          <button onClick={() => this.updateValue()}>
            Click me Class Component
          </button>
        </div>
      </React.Fragment>
    );
  }
}
