class Hello {
  render() {
    return React.createElement("h1", null, "Hello World");
  }
}
const HelloWorld = React.createElement(Hello, null, null);
ReactDOM.render(HelloWorld, document.getElementById("root"));
