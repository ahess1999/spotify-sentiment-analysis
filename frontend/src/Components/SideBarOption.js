import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./SideBarOption.css";
import { Button } from "@material-ui/core";
import { updateTracks } from "../redux/Tracks/tracks.actions";
import { connect } from "react-redux"
import { isIndex } from '../redux/Index/index.actions';
import { updateUsername } from '../redux/Username/username.actions';



function SideBarOption({props, option, Icon}) {
  
  const [ tracks , setTracks ] = useState(null);
  const [ index , setIndex ] = useState(null);

  function getTracks(playlist){

      var index = 0
      var titles = Object.keys(props.playlists)
      
      for(var i = 0; i < titles.length; i++){
        if(titles[i] == playlist.option){
          var index = i
        }
      }

      

      var tracks = Object.values(props.playlists)
      var list = Object.keys(tracks[index].tracks)

      setTracks(list)
      props.updateTracks(list)
      setIndex(index)
      props.isIndex(index)

  }

  return (
    <div className="sidebarOption" onClick={() => getTracks({option,props})  }>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>

  );
}


const mapStateToProps = state => {
  return {
    tracks: state.tracks.tracks,
    index: state.index.index,
    username: state.username.username,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTracks: (tracks) => dispatch(updateTracks(tracks)),
    isIndex: (index) => dispatch(isIndex(index)),
    updateUsername: (username) => dispatch(updateUsername(username)),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideBarOption);
//export default SideBarOption;