import React, { Component } from "react";

export default class ChildComponent extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return <div>Child Component</div>;
  }
}
