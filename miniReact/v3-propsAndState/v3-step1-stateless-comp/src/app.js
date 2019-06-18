const Hello = ({ name }) => {
  return React.createElement("h1", null, `Hello World ${name}`);
};
const HelloWorld = React.createElement(Hello, { name: "zhangsan" }, null);
ReactDOM.render(HelloWorld, document.getElementById("root"));
