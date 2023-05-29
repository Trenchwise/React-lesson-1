import React, { Component } from "react";

class Button extends Component {
  // each class has its own scope so no const needed
  // Below an event listener is being added. It is best to put it in its own box
  // onClick = () => {
  //     console.log("I was Clicked")
  // }

  onInput = (e) => {
    console.log(e.target.value);
  };

  // return <button>I am a button</button>; this is hard coding the button

  // This how you could set up a reusable button where the data inside can be changed

  //  - Below is using the props syntax to change the name/data of the button
  //  - return <button>{this.props.name}</button>;

  // Below is adding an event listener by calling the above function
  // return <h1 onClick={this.onClick}>Hello World</h1>;

  render() {
    return <input type="text" onInput={this.onInput} />;
  }
}

export default Button;
