import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      inputValue: "",
      responseMessage: ""
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("/api/hello");
      const data = await response.json();

      this.setState({
        message: data.message
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch("/api/world", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          value: this.state.inputValue
        })
      });

      const data = await response.json();

      this.setState({
        responseMessage: data.message
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Type something"
          />

          <button type="submit">
            Submit
          </button>
        </form>

        <p>{this.state.responseMessage}</p>
      </div>
    );
  }
}

export default App;