import React, { Component, PropTypes } from 'react'

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    this.props.handleLogin(true);
  }

  render() {
    const {dispatch} = this.props;
    return (
      <div>
        <a href="javascript:void(0)" onClick={this.handleLogin.bind(this)}>Login with Facebook</a>
      </div>
    )
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired
}

export default Login