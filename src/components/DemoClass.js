import { Component } from "react";
class DemoClass extends Component {
  constructor() {
    super();
    this.state = {
      data: "class pogo",
    };
  }
  render() {
    return (
      <>
        <h1>hello {this.state.data} </h1>
      </>
    );
  }
}
export default DemoClass;
