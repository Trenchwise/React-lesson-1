import React, { Component } from "react";

class Button extends Component {
  render() {
    console.log(this.props);
    // return <button>I am a button</button>; this is hard coding the button
    return <button>{this.props.name}</button>;
  }
}

export default Button;
