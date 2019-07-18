import React, { Component } from "react";
import SummaryStore from "../stores/SummaryStore";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: SummaryStore.getSummary()
    };
  }

  componentDidMount() {
    SummaryStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    SummaryStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    const sum = SummaryStore.getSummary();
    this.setState({ sum });
  };

  render() {
    return <div>Total Count: {this.state.sum}</div>;
  }
}

export default Summary;
