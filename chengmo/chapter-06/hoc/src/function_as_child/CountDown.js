import { Component } from "react";
import PropType from "prop-types";

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.startCount
    };
  }

  static propTypes = {
    children: PropType.func.isRequired,
    startCount: PropType.number.isRequired
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count;
  }

  componentDidMount() {
    this.intervalHandle = setInterval(() => {
      const newCount = this.state.count - 1;
      if (newCount >= 0) {
        this.setState({ count: newCount });
      } else {
        window.clearInterval(this.intervalHandle);
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalHandle) {
      window.clearInterval(this.intervalHandle);
      this.intervalHandle = null;
    }
  }

  render() {
    return this.props.children(this.state.count);
  }
}

export default CountDown;
