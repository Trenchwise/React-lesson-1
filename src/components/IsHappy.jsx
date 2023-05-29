import React, { Component } from "react";

class IsHappy extends Component {
  render() {
    console.log(this.props);

    return <h1>{this.props.happy ? "Happy" : "Sad"}</h1>;
  }
}

export default IsHappy;
