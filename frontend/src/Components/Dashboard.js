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
import { isLoading } from "../redux/Loading/loading.actions";
import { updatePlaylists } from "../redux/Playlists/playlists.actions";
import { updateTracks } from "../redux/Tracks/tracks.actions";




function Dashboard(props) {

  const [ token , setToken ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ playlists , setPlaylists ] = useState(null);


  function create_playlist(token) {
    axios.post('/api/playlist/get/playlists', token)
    .then(res => {
      console.log(res.data)
      setPlaylists(res.data)
      props.updatePlaylists(res.data)
      setLoading(false)
      props.isLoading(false)
    })
  }

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
    create_playlist({token})

  },[]);

  return (
    <div className="dashboard">
      {
        loading ? (
          <div>
            <h1>Loading..</h1>
          </div>
        ):(
          <div className="dashboard__body">
            <LeftBar props = {props} updateTracks = {props.updateTracks} playlists = {props.playlists} token = {props.token} />
            <Body token = {props.token}/>
            <RightBar token = {props.token}/>
            {/* spotify={spotify} */}
          </div>
        )
        
      }
      {/* <Footer spotify={spotify} /> */}
    </div>
  );
}


const mapStateToProps = state => {
  return {
    token: state.token.token,
    playlists: state.playlists.playlists,
    loading: state.loading.loading,
    tracks: state.tracks.tracks,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateToken: (token) => dispatch(updateToken(token)),
    updatePlaylists: (playlists) => dispatch(updatePlaylists(playlists)),
    isLoading: (loading) => dispatch(isLoading(loading)),
    updateTracks: (tracks) => dispatch(updateTracks(tracks)),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);