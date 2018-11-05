import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ id: 1, name: "Cole" }, { id: 2, name: "Steven" }],
    showPersons: false
  };

  switchHandle = newName => {
    this.setState({
      persons: [{ name: "Cole" }, { name: newName }]
    });
  };

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div>
          <button onClick={this.togglePersonHandler}>Switch Names</button>
        </div>
        {persons}
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
