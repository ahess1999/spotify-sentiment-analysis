import React, { Component } from 'react'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            usernamel: '',
            loggedincheck: false
        }
    }

    componentDidMount() {
        const { loggedin, username } = this.props.location.state;
        this.setState({loggedincheck: loggedin, username: username})
    }

    handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({ loggedincheck: false, username: '' });
      };

    render() {
        return (
            <div>
                {this.state.username}
                <button onClick={this.handle_logout}>LOGOUT</button>
            </div>
        )
    }
}
