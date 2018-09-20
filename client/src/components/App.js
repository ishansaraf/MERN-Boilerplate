import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleLogin(event) {
    // TODO: Replace with MongoDB connection
    if (!this.state.username || !this.state.password) {
      alert("Username and password are required for login.");
    } else {
      alert("Welcome " + this.state.username);
    }
  }

  handleRegister(event) {
    // TODO: Route it to Registration Page
    alert("Register test");
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Login</button>
        <button type="button" onClick={this.handleRegister}>
          Register
        </button>
      </form>
    );
  }
}

export default App;
