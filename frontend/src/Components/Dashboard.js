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
  var playlists = ['Sick nasty playlist','Dope tracks','Coding Playlist','Jaja Ding Dong on shuffle']

  const [ token , setToken ] = useState(null);


    useEffect(() => {
      // Set token
      const hash = getTokenFromResponse();
      window.location.hash = "";
      let token = hash.access_token;
  
      if (token) {
        setToken(token);
      }
      if(token) {
        props.updateToken(token)
      }
      console.log({token})


    },[]);

  return (
    <div className="dashboard">
      <div className="dashboard__body">
        <LeftBar playlists = {playlists}/>
        <Body token = {props.token}/> 
        <RightBar token = {props.token}/>
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