class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement("h1", null, `Hello World ${this.props.name}`);
  }
}
const HelloWorld = React.createElement(Hello, { name: "zhangsan" }, null);
ReactDOM.render(HelloWorld, document.getElementById("root"));
