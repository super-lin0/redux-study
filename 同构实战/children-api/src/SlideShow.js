import React, { Component, Children } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class SlideShow extends Component {
  state = {
    total: 0,
    current: 0
  };
  componentDidMount() {
    const { children } = this.props;
    this.setState({ total: Children.count(children) });
    this.interval = setInterval(this.showNext, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showNext = () => {
    const { total, current } = this.state;
    this.setState({
      current: current + 1 === total ? 0 : current + 1
    });
  };
  render() {
    const { children } = this.props;
    const { current, total } = this.state;
    const bullets = Array(total).fill("○");
    bullets[current] = "●";
    return (
      <div className="slideshow">
        <div>{bullets}</div>
        <ReactCSSTransitionGroup
          className="group"
          transitionName="example"
          transitionEnterTimeout={8000}
          transitionLeaveTimeout={8000}
        >
          <div style={{ position: "absolute", width: "100%" }}>
            {Children.toArray(children)[current]}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default SlideShow;
