import React from 'react';
import TextField from '@material-ui/core/TextField'

export default class SignupForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <div>
      <form onSubmit={e => this.props.handle_signup(e, this.state)}>
        <TextField
          label="Username:"
          type="text"
          name="username"
          variant="outlined"
          value={this.state.username}
          onChange={this.handle_change}
          required
        />
        <br/>
        <br/>
        <TextField
          label="Password:"
          type="password"
          name="password"
          variant="outlined"
          value={this.state.password}
          onChange={this.handle_change}
          required
        />
        <br/>
        <br/>
        <input type="submit" id="submitbutton" value='SIGNUP'/>
      </form>
      </div>
    );
  }
}