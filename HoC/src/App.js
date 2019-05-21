import React, { Component } from "react";
import data from "./data.json";

import ContactsApp from "./components/ContactsApp";
import "./App.css";

class App extends Component {
  state = { contacts: [] };

  async componentDidMount() {
    const { results = [] } = data;

    const contacts = results.map(user => ({
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      thumbnail: user.picture.thumbnail
    }));
    this.setState({ contacts });
  }

  render() {
    return <div className="App">Hello World!</div>;
  }
}

export default App;
