class MyButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "button",
      { onClick: this.props.onClick },
      `Submit,${this.props.name}`
    );
  }
}
const App = React.createElement(
  MyButton,
  { onClick: () => alert("Yay It's me"), name: "zhangsan" },
  null
);
ReactDOM.render(App, document.getElementById("root"));
