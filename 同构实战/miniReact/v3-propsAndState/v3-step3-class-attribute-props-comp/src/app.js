class MyButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      "button",
      { onClick: this.props.onClick },
      "Click me"
    );
  }
}

const HelloWorld = React.createElement(
  MyButton,
  {
    onClick: () => alert("yay it worked")
  },
  null
);

ReactDOM.render(HelloWorld, document.getElementById("root"));
