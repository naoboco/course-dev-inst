import { Component } from "react";
import ErrorBoundary from "./Components/ErrorBoundary";
import Lifecycle from "./Components/Lifecycle";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error("I crashed!");
    }

    return (
      <h1 onClick={this.handleClick}>
        {this.state.counter}
      </h1>
    );
  }
}


// ==============================
// EXERCISE 1 - SIMULATION 1
// ==============================

// function App() {
//   return (
//     <>
//       <h2>Simulation 1</h2>
//
//       <ErrorBoundary>
//         <BuggyCounter />
//         <BuggyCounter />
//       </ErrorBoundary>
//     </>
//   );
// }


// ==============================
// EXERCISE 1 - SIMULATION 2
// ==============================

// function App() {
//   return (
//     <>
//       <h2>Simulation 2</h2>
//
//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>
//
//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>
//     </>
//   );
// }


// ==============================
// EXERCISE 1 - SIMULATION 3
// ==============================

// function App() {
//   return (
//     <>
//       <h2>Simulation 3</h2>
//
//       <BuggyCounter />
//     </>
//   );
// }


// ==============================
// EXERCISE 2 - LIFECYCLE
// ==============================

// function App() {
//   return (
//     <>
//       <h2>Exercise 2 - Lifecycle</h2>
//
//       <Lifecycle />
//     </>
//   );
// }


// ==============================
// EXERCISE 3 - LIFECYCLE #2
// VERSION ACTIVE
// ==============================

function App() {
  return (
    <>
      <h2>Exercise 3 - Lifecycle #2</h2>
      <Lifecycle />
    </>
  );
}

export default App;