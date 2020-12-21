import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import './LoginForm.css'

export default class LoginForm extends Component {
    state = {
        'username': '',
        'password': '',
        redirect: false,
        loggedin: false
    };

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = {...prevstate};
            newState[name] = value;
            return newState;
        });
    };

    handle_submit() {
      setTimeout(() =>{
        this.setState({redirect: true, loggedin: true})
      }, 1);
    };

    render() {
      const redirect = this.state.redirect;
      console.log(redirect);
      if(redirect){
        return<Redirect to={{
          pathname: '/dashboard',
          state: {
            loggedin: true,
            'username': this.state.username
          }
        }}/>
      }
        return (
          <div id='logform'>
          <form  onSubmit={e => this.props.handle_login(e, this.state)}>
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
              label = "Password:"
              type="password"
              name="password"
              variant = "outlined"
              value={this.state.password}
              onChange={this.handle_change}
              required
            />
            <br/>
            <br/>
            <button type="submit" id='submitbutton' onClick={this.handle_submit.bind(this)}>LOGIN</button>
          </form>
          </div>
        );
      }
}
