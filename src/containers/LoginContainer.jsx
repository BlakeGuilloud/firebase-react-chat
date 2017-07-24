import React, { Component } from 'react';

import { Login } from '../components';

class LoginContainer extends Component {
  state = {
    username: '',
    error: null,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();

    const error = !this.state.username && 'Username is required!';

    if (error) {
      this.setState({ error });
    } else {
      this.setState({
        username: '',
        password: '',
        error: null,
      })
    }
  }

  render() {
    const props = {
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      username: this.state.username,
      error: this.state.error,
    };

    return <Login {...props} />;
  }
};

export default LoginContainer;