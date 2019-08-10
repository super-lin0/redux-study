const onlyForLoggedInHOC = WrappedComponent => {
  return class NewComponent extends WrappedComponent {
    render() {
      return this.props.loggedIn ? super.render() : null;
    }
  };
};

export default onlyForLoggedInHOC;
