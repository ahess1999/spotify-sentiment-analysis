import React, { Component } from 'react'
import axios from 'axios'
import './Homepage.css'

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = { apiResponse: [] };
    }
    

    callAPI() {
        axios.get("/api/playlist/")
        .then(res => {
            this.setState({apiResponse: res.data})
            console.log(res.data);
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div>
                <header>
                    Playlist Sentiment Analysis
                    <div>
                        {this.state.apiResponse.map((index) =>{
                            return <div>{index.songlist}</div>
                        })}
                    </div>
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