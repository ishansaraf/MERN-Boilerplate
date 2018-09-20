import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    this.state = {
      name: null,
      username: null,
      password: null,
      email: null
    };

    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleRegistration(event) {
    // TODO: Replace with MongoDB connection
    if (
      !this.state.name ||
      !this.state.username ||
      !this.state.password ||
      !this.state.email
    ) {
      alert("All fields required.");
    } else {
      alert("Welcome to our application " + this.state.username);
    }
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleRegistration}>
        <h3>Please Enter the Following Details:</h3>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
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
          Email Address:
          <input
            name="Email"
            type="text"
            value={this.state.email}
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
        <input type="submit" value="Register" />
      </form>
    );
  }
}

export default App;
