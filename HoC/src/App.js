import React, { Component } from "react";
// import data from "./data.json";

import ContactsApp from "./components/ContactsApp";
import "./App.css";

class App extends Component {
  state = { contacts: [] };

  componentDidMount() {
    fetch("./data.json")
      .then(response => response.json())
      .then(parsedResponse => {
        const { results = [] } = parsedResponse;
        results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          thumbnail: user.picture.thumbnail
        }));
      })
      .then(contacts => this.setState({ contacts }));
  }

  render() {
    return <div className="App">Hello World!</div>;
  }
}

export default App;
