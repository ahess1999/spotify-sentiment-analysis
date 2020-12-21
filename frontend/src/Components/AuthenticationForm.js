import React, { Component } from 'react';
import Navigation from './Navigation';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default class AuthenticationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }
  controller = new AbortController();

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('/current-user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  componentWillUnmount() {
      this.setState = (state,callback)=>{
        return;
    };
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        if(json.user !== undefined) {
          localStorage.setItem('token', json.token);
          this.setState({
            logged_in: true,
            displayed_form: '',
            username: json.user.username
          });
        }
        else {
          this.setState({
            logged_in: false,
            displayed_form: 'login',
            username: ''
          });
        }
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };


  display_form = form => {
    if(form === 'login'){
      var signup = document.getElementById('navbuttons');
      var signin = document.getElementById('navbuttonl');
      var label = document.getElementById('logindecisionlabel');
      var pagelabel = document.getElementById('pagelabel');
      label.innerHTML = `Don't have an account?`;
      pagelabel.innerHTML = 'LOGIN';
      signup.style.display = 'inline';
      signin.style.display = 'none';
    }
    else {
        var signup = document.getElementById('navbuttons');
        var signin = document.getElementById('navbuttonl');
        var label = document.getElementById('logindecisionlabel');
        var pagelabel = document.getElementById('pagelabel');
        label.innerHTML = `Already have an account?`;
        pagelabel.innerHTML = 'SIGNUP';
        signin.style.display = 'inline';
        signup.style.display = 'none';
    }
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = <LoginForm handle_login={this.handle_login} />;
    }

    return (
      <div>
        <h4 id='pagelabel'>LOGIN</h4>
          <div id='logindecisionlabel'>Don't have an account?</div>       
            <Navigation
            logged_in={this.state.logged_in}
            display_form={this.display_form}
            handle_logout={this.handle_logout}
            />
            <br/>
        {form}
      </div>
    );
  }
}