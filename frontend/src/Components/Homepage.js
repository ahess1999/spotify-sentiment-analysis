import React, { Component } from 'react'
import './Homepage.css'

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://127.0.0.1:8000/sentiment/")
        .then(res => res.json())
        .then(res => this.setState({ apiResponse: res}))
        .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div>
                <header>
                    Playlist Sentiment Analysis
                    <p>{this.state.apiResponse}</p>
                </header>
                <div id='content'>
                    <p id='sidenote'>Create your own playlists through sentiment analysis</p>
                </div>
                <footer>
                    How it works
                </footer>
            </div>
        );
    }
}


export default Homepage;