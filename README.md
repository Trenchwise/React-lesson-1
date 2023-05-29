# React-lesson-1

React Lesson 1 | simple counter demo

short cuts cc

Props

Passing bits of data around from one component to another. It goes from parent to child and only flows in one direction.

Write the component
Import the component
Display the component

Button is an example of a prop. Check app for how it is configured..

The syntax is like a html attribute.

console.log(this.props) are the properties that are sent in from the parent to the child. So from App to Button

Button.jsx
Contains how you would set up a configurable button. You use JavaScript to insert the data, but using the same component. It takes the props its sent, which is configerable based on inward data. You can send any data type into the prop.

This is how you move data around. You pass it from parent to child,. So from App to Button (in this case). This is called prop drilling.

Props can send values - like changing the name of the button. OR - expressions, computed values

Can think of the component as an object that takes 'things'. You pass arguments using the props syntax. Which is the way you do it in React. The data cannot be changed in the child. It is changed in the parent.

Breaking things down.

In a class based component. You:

    - Always import react like below and Component with a Capital C. Which comes from the libray know as React. Without this line it would not be a react component

import React, { Component } from "react";

- Then you make a class, can be named anything, but name it the same thing as the file it is in.
- Extends component gives all the component based goodies from React
- Every classed based component has atleast one function living inside it. That function is called a render method.
- The rule of the render method is that is must return some HTML.
- The HTML ends up being inserted into the DOM
- Then you need to export it. Otherwise it wont work!

class Button extends Component {
render() {
console.log(this.props);
// return <button>I am a button</button>; this is hard coding the button
return <button>{this.props.name}</button>;
}
}

export default Button;

To re cap: 1.15.00

- We can pass information through props
- We can listen to events
- We can change the state inside the component

State is private to a component. The parent can send the data to a child, but this is the only way. State only works in a class based component

The difference between Props and State. 1.41

- Props are things I tell my children. I can recieve props and I can send props
- State are things I know and what I know is private to me. Unless I pass the information to a child

When the button is clicked (Which is set in the Button component)

        <button onClick={this.onToggle}>Toggle</button>
        <p onClick={this.onAdd}>{this.state.count}</p>

It adds one to the count, it reruns the render method, which roduced new HTML, which React then goes an puts inside the DOM

BUT if you add one inside the render method, it will update the state - this can cause an infinite loop.
