import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [{ name: "jan", job: "huisman" }]
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <h1>First time checking out react.js</h1>
        <p>
          guide:
          <a href="https://www.taniarascia.com/getting-started-with-react/">
            https://www.taniarascia.com/getting-started-with-react/
          </a>
        </p>
        <p>Add a character with a name and a job to the table.</p>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };
}

export default App;
