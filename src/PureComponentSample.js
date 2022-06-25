import React, { PureComponent } from "react";

export default class PureComponentSample extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log("Hello render")
    return (
      <React.Fragment>
        <h5>Pure Component Sample {this.state.count}</h5>
        <button onClick={() => this.setState({ count: 1 })}>
          Increase Count
        </button>
      </React.Fragment>
    );
  }
}
