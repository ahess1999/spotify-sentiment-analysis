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
import { isIndex } from '../redux/Index/index.actions';
import { updateUsername } from '../redux/Username/username.actions';
import { MagicSpinner } from "react-spinners-kit";




function Dashboard(props) {

  const [ token , setToken ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ playlists , setPlaylists ] = useState(null);
  const [ tracks , setTracks ] = useState(null);
  const [ username , setUsername ] = useState(null);



  function create_playlist(token) {
    axios.post('/api/playlist/get/playlists', token)
    .then(res => {
      var dict = {}
      var indexes = Object.keys(res.data)

      for(var i = 0; i < indexes.length; i++){

        var info = {}
        var track_list = {}

        // Playlist name and values assocated
        var name = Object.keys(res.data[i])[0] // playlist name
        var value = Object.values(res.data[i])[0]
        
        //Tracks
        for(var j = 0; j < value.length; j++){
          var key = Object.keys(value[j])
          var value = Object.values(value[j])
          var first_playlist = []
          for(var q = 0; q < Object.values(value[0]).length; q++){
            var k = Object.keys(Object.values(value[0])[q])[0]
            if(j == 0){
              first_playlist[q] = k
            }
            var v = Object.values(value[0])[q]
            v = Object.values(v)[0]
            var more_info = {}
            for(var e = 0; e < v.length; e++){
              var DIG = v[e]
              more_info[Object.keys(DIG)[0]] = Object.values(DIG)[0]
            }
            track_list[k] = more_info
          }
          // setTracks(first_playlist)
          // props.updateTracks(first_playlist)
          info['tracks'] = track_list
        }
        var items = Object.values(res.data[i])[0]

        // Other stuff 
        for(var z = 1; z < items.length; z++){
          var key = Object.keys(items[z])[0]
          var value = Object.values(items[z])[0]
          info[key] = value
        }

        dict[name] = info

      }

      setPlaylists(dict) 
      props.updatePlaylists(dict)
      setUsername(Object.values(dict)[0].username)
      props.updateUsername(Object.values(dict)[0].username)
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
            <div className="spinner">
                <MagicSpinner 
                size = {40}
                color="#686769"
                />
            </div>

        ):(
          <div className="dashboard__body">
            <LeftBar playlists = {props.playlists} props = {props}/>
            <Body props = {props} playlists = {props.playlists}/>
            {/* <RightBar token = {props.token}/> */}
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
    index: state.index.index,
    username: state.username.username,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateToken: (token) => dispatch(updateToken(token)),
    updatePlaylists: (playlists) => dispatch(updatePlaylists(playlists)),
    isLoading: (loading) => dispatch(isLoading(loading)),
    updateTracks: (tracks) => dispatch(updateTracks(tracks)),
    isIndex: (index) => dispatch(isIndex(index)),
    updateUsername: (username) => dispatch(updateUsername(username))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);