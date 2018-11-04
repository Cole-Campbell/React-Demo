import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: "Cole" }, { name: "Steven" }]
  };

  switchHandle = newName => {
    this.setState({
      persons: [{ name: "Cole" }, { name: newName }]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [{ name: "Cole" }, { name: event.target.value }]
    });
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div>
          <button onClick={this.switchHandle.bind(this, "BOO!")}>
            Switch Names
          </button>
        </div>
        <Person
          name={this.state.persons[0].name}
          click={() => this.switchHandle("Booooo!!")}
        >
          . BOO!
        </Person>
        <Person
          name={this.state.persons[1].name}
          changed={this.nameChangedHandler}
        >
          . BOO!
        </Person>
        <p className="App-intro">This is really working!</p>
      </div>
    );
    //At least 3 arguments. //Component or HTML, Config, Any children
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "BOO"),
    //   "hi, I'm a React App!!!"
    // );
  }
}

export default App;
