import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

class Login extends Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };
    render() {
    return (
    <div className="Login">
      <header className="login-header">
      </header>
      <p>
          <input className="login-input">
          </input>
          <button className="login-button" onClick={() => this.props.history.push('/dashboard')}>
              Login
          </button>
        </p>
    </div>
  );
}
};

export const LoginRouter = withRouter(Login);
