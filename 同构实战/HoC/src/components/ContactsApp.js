import React, { Component } from "react";

import SearchBar from "./SearchBar";
import ContactList from "./ContactList";
import LoadingHOC from "./HOC/LoadingHOC";

import "./ContactsApp.css";

@LoadingHOC("contacts")
class ContactsApp extends Component {
  state = {
    filterText: ""
  };
  handleUserInput = searchTerm => {
    this.setState({ filterText: searchTerm });
  };
  render() {
    const { loadingTime, contacts } = this.props;
    const { filterText } = this.state;
    return (
      <div className="contactsApp">
        <SearchBar filterText={filterText} onUserInput={this.handleUserInput} />
        <ContactList contacts={contacts} filterText={filterText} />
        <p>Loading time {loadingTime} seconds</p>
      </div>
    );
  }
}

export default ContactsApp;
