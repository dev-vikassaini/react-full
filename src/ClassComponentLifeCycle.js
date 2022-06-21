import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ClassComponentLifeCycle extends Component {
  constructor() {
    super();
    // console.log("Constructor");
    this.state = {
      name: "VK",
      count: 0,
      show: true,
    };
  }
//   componentDidMount() {
//     console.log("componentDidMount");
//   }

//   componentDidUpdate(preProps, proState, snapshot) {
//     console.log(`componentDidUpdate ${proState.name}`);
//   }
//   shouldComponentUpdate() {
//     console.log("shouldComponentUpdate", this.state.count);
//     return true;
//   }

  render() {
    // console.log("Render");
    return (
      <React.Fragment>
        <h4>Class Component Life Cycle</h4>
        <button onClick={() => this.setState({ name: "Vini Saini" })}>
          Did Update
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update Count <b>{this.state.count}</b>
        </button>
        {this.state.show ? <ChildComponent /> : <h4>Child Component Removed.</h4>}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Child Component
        </button>
      </React.Fragment>
    );
  }
}

export default ClassComponentLifeCycle;
