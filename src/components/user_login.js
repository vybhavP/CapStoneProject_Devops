import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "vybhav", password: "vybhav", isLoginFailed: true }
  }

  handleUserNameChange(username) {
    this.setState({ username: username.target.value })
  }

  handlePasswordChange(password) {
    console.log(password.target.value)
    this.setState({ password: password.target.value })
  }

  handleAdminFormSubmit(event) {
    if (this.state.username === "vybhav" && this.state.password === "vybhav") {
      this.props.history.push('/user_home');
      this.setState({ isLoginFailed: false });
      console.log("isLoginFailed success: " + this.state.isLoginFailed);
    }
    else {
      this.props.history.push('/user_login');
      this.setState({ isLoginFailed: true });
      console.log("isLoginFailed failed: " + this.state.isLoginFailed);
    }
  }

  clearFormValues(event) {
    this.setState({ username: "", password: "" })
    ReactDOM.findDOMNode(this.refs.userName).focus();
  }

  render() {
    return (
      <div>
        <div className={`ui positive message hidden`}>
          <div className="header">
            You are eligible for a reward
	  </div>
          <p>Go to your <b>special offers</b> page to see now.</p>
        </div>
        <Form ref="admin_form" onSubmit={this.handleAdminFormSubmit.bind(this)}>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' type='text' name="UserName" value={this.state.username} onChange={this.handleUserNameChange.bind(this)} ref="userName" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type='password' name="Password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} ref="password" />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit' ref="submitButton" color='purple'>Submit</Button>
          <Button type='reset' ref="resetButton" onClick={this.clearFormValues.bind(this)} color='grey'>Reset</Button>
        </Form>
      </div>
    )
  }
}

