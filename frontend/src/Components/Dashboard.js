import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import "./Dashboard.css";
import LeftBar from "./LeftBar";
import Body from "./Body";
import RightBar from "./RightBar";
import { getTokenFromResponse } from "./SpotifyAuth";
import axios from 'axios'
import { connect } from "react-redux"
import { updateToken, } from "../redux/Token/token.actions";


function Dashboard(props) {

  // Populate this with user playlists
  var playlists = ['Sick nasty playlist','Dope tracks','Coding Playlist','Yaya Ding Dong on shuffle']

  const [ token , setToken ] = useState(null);


    useEffect(() => {
      // Set token
      const hash = getTokenFromResponse();
      window.location.hash = "";
      let token = hash.access_token;
  
      if (token) {
        setToken(token);
      }

      const fetchData = async () => {
        const result = await axios.post('/api/token/', token)
        .then(res => console.log(res))
      }
        if(token) {
          fetchData();
          props.updateToken(token)
        }
      console.log({token})


    },[]);

    function create_playlist(token) {
      axios.post('/api/playlist/create/', token)
      .then(res => console.log(res))
    }

  return (
    <div className="dashboard">
      <div className="dashboard__body">
        <LeftBar playlists = {playlists}/>
        <Body token = {props.token}/> 
        <RightBar/>
        {/* spotify={spotify} */}
      </div>
      {/* <Footer spotify={spotify} /> */}
    </div>
  );
}


const mapStateToProps = state => {
  return {
    token: state.token.token,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateToken: (token) => dispatch(updateToken(token)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);