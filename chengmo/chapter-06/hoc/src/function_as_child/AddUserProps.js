// import React, { Component } from "react";

// const addUserProps = WrappedComponent => {
//   return class WrappingComponent extends Component {
//     render() {
//       const newProps = { user: loggedinUser };
//       return <WrappedComponent {...this.props} {...newProps} />;
//     }
//   };
// };

import { Component } from "react";
import PropTypes from "prop-types";

const loggedinUser = "Mock user";

class AddUserProps extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };
  render() {
    const user = loggedinUser;
    return this.props.children(user);
  }
}

export default AddUserProps;

/**
 * 用法
 */
// <AddUserProps>{user => <div>{user}</div>}</AddUserProps>;
/* <AddUserProps>{user => <Foo user={user} />}</AddUserProps>
<AddUserProps>{user => <Bar currentUser={user}/>}</AddUserProps> */
