const removeUserProps = WrappedComponent => {
  return class NewComponent extends WrappedComponent {
    render() {
      const { user, ...otherProps } = this.props;
      this.props = otherProps;
      return super.render();
    }
  };
};

export default removeUserProps;
