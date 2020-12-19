import React, { Component } from 'react'
import './Homepage.css'
import {Link} from 'react-router-dom'

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }


    render() {
        return (
            <div>
                <header>
                    Playlist Sentiment Analysis
                    <Link to='/signin'>Sign In</Link>
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