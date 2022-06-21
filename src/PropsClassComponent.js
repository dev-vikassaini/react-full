import React, { Component } from "react";

export default class PropsClassComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <h4>Props in class component</h4>
        <p>
          Name: <b> {this.props.name}</b>
          Age: <b> {this.props.age}</b>
          Sex: <b> {this.props.sex}</b>
        </p>
      </React.Fragment>
    );
  }
}
