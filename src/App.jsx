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
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
// import Footer from "./components/Footer.jsx";

// create jsx files within the components folder with the component name. Then import them into App file.
// For the demo I've only completed one. Header.

class App extends Component {
  render() {
    return (
      <div>
        {"hello "}
        <Header />
        ``
        <Main />
        <Footer />
      </div>
    );
  }
}

// Each component should only do one thing

// There are Stateless and Stateful components
