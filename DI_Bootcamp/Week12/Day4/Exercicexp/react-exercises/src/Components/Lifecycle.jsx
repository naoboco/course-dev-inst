// import { Component } from "react";

// class Lifecycle extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       favoriteColor: "red"
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         favoriteColor: "yellow"
//       });
//     }, 1000);
//   }

//   shouldComponentUpdate() {
//     return true;
//   }

//   getSnapshotBeforeUpdate() {
//     console.log("in getSnapshotBeforeUpdate");
//     return null;
//   }

//   componentDidUpdate() {
//     console.log("after update");
//   }

//   changeColor = () => {
//     this.setState({
//       favoriteColor: "blue"
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1>
//           My favorite color is {this.state.favoriteColor}
//         </h1>

//         <button onClick={this.changeColor}>
//           Change color
//         </button>
//       </>
//     );
//   }
// }

// export default Lifecycle;


import { Component } from "react";

class Child extends Component {
  componentWillUnmount() {
    alert("The component named Child is about to be unmounted.");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteColor: "red",
      show: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favoriteColor: "yellow"
      });
    }, 1000);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  changeColor = () => {
    this.setState({
      favoriteColor: "blue"
    });
  };

  deleteChild = () => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <>
        <h1>
          My favorite color is {this.state.favoriteColor}
        </h1>

        <button onClick={this.changeColor}>
          Change color
        </button>

        {this.state.show && <Child />}

        <button onClick={this.deleteChild}>
          Delete
        </button>
      </>
    );
  }
}

export default Lifecycle;