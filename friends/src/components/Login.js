import React from "react";
import { connect } from "react-redux";
import { loggingIn } from "../actions";
class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  login = e => {
    e.preventDefault();
    this.props.loggingIn(this.state.credentials).then(() => {
      this.props.history.push("/");
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder="username"
          />
          <input
            type="text"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button onSubmit={this.login}>Log In</button>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { loggingIn }
)(Login);
// export default Login;
