import { Component } from "react";
class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: "pogo",
    };
  }
  updateData() {
    this.setState({ data: "bhuti" });
  }
  render() {
    return (
      <>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.updateData()}>click me</button>
      </>
    );
  }
}
export default ClassComponent;
