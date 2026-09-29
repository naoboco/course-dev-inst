import { Component } from "react";
import ErrorBoundary from "./Components/ErrorBoundary";

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
//function App() {
// return (
  //<>
     // <h2>Simulation 1</h2>

     // <ErrorBoundary>
       // <BuggyCounter />
       // <BuggyCounter />
      //</ErrorBoundary>
   // </>
 // );
//}

///function App() {
  // return (
  //   <>
  //     <h2>Simulation 2</h2>

  //     <ErrorBoundary>
  //       <BuggyCounter />
  //     </ErrorBoundary>

  //     <ErrorBoundary>
  //       <BuggyCounter />
  //     </ErrorBoundary>
  //   </>
  // );
//}
// function App() {
//   return (
//     <>
//       <h2>Simulation 3</h2>

//       <BuggyCounter />
//     </>
//   );
// }
// import Lifecycle from "./Components/Lifecycle";

// function App() {
//   return (
//     <>
//       <h2>Exercise 2 - Lifecycle</h2>

//       <Lifecycle />
//     </>
//   );
// }

export default App;

import Lifecycle from "./Components/Lifecycle";

function App() {
  return (
    <>
      <h2>Exercise 3 - Lifecycle #2</h2>
      <Lifecycle />
    </>
  );
}

export default App;