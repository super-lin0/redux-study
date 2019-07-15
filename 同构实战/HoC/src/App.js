import React, { Component } from "react";

import ContactsApp from "./components/ContactsApp";
import "./App.css";

class App extends Component {
  state = { contacts: [] };

  componentDidMount() {
    fetch("./data.json")
      .then(response => response.json())
      .then(parsedResponse => {
        const { results = [] } = parsedResponse;
        return results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          thumbnail: user.picture.thumbnail
        }));
      })
      .then(contacts => this.setState({ contacts }));
  }

  render() {
    const { contacts = [] } = this.state;
    return (
      <div className="App">
        {contacts.length === 0 ? (
          <div>Loading....</div>
        ) : (
          <ContactsApp contacts={contacts} />
        )}
      </div>
    );
  }
}

export default App;
