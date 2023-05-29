// import React, { Component } from "react"; // short cut: imrc - (import react component) this brings in all the react goodies and components

// class App extends Component {
//   // shortcut cc - class component.
//   state = { count: 1 }; // The state box is import in React. It holds all the information out programme is based upon.
//   // When you change the state box it re-render the interface. It updates the DOM for you

//   render() {
//     return (
//       <div>
//         <button
//           onClick={() => {`
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           Add
//         </button>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count - 1 });
//           }}
//         >
//           Remove
//         </button>
//         <p>{this.state.count}</p>
//       </div>
//     );
//   }
// }

// export default App;

// to run the application type npm run dev into the terminal

// JS can control the HTML

// Single Page Application SPA - is also referred to as a web app

// jsx - is html and js mixed together

// Components

// Break down your code into chunks that are reusable

// Always begin with a captial letter

import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import isHappy from "./components/IsHappy";
import IsHappy from "./components/IsHappy";

// create jsx files within the components folder with the component name. Then import them into App file.
// For the demo I've only completed one. Header.

////////

// class App extends Component {
//   render() {
//     return (
//       <div>
//         {"hello "}
//         <Header />
//         <Main />
//         <Footer />
//         <Button name={"Button 1"} />
//         {/* this name (data) is now being sent into the Button component */}
//         <Button name={"Button 2"} />
//       </div>
//     );
//   }
// }

// // Each component should only do one thing

// // There are Stateless and Stateful components

// export default App;

//////

class App extends Component {
  state = { count: 0, happy: false };

  onAdd = () => {
    this.setState({ count: this.state.count + 1 }); //This is async
  };

  onToggle = () => {
    this.setState({ happy: !this.setState.happy });
  };

  render() {
    return (
      <>
        <p onClick={this.onAdd}>{this.state.count}</p>
        <button onClick={this.onToggle}>Toggle</button>
        <IsHappy happy={this.state.happy} />
        <h1 style={{ backgroundColor: this.state.happy ? "blue" : "red" }}>
          Hello world!
        </h1>
      </>
    );
  }
}

export default App;
