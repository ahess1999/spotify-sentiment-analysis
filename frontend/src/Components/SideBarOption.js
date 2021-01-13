import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./SideBarOption.css";
import { Button } from "@material-ui/core";
import { updateTracks } from "../redux/Tracks/tracks.actions";
import { connect } from "react-redux"



function SideBarOption({props, option, Icon, token, updateTracks}) {
  
  const [ tracks , setTracks ] = useState(null);

  
  let name = option.split(":")[0]
  let playlist_id = option.split(":")[1]
  function get_playlist_tracks(token,playlist_id) {
    axios.post('api/playlist/get/tracks', token, playlist_id)
    .then(res => {
      console.log(res.data)
      if(res.data != null){
        setTracks(res.data)
        console.log();
        props.updateTracks("worked");
      }
    })
  }


  return (
    <div className="sidebarOption" onClick={() => get_playlist_tracks({token,playlist_id})  }>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{name}</h4> : <p>{name}</p>}
    </div>
  );
}


// const mapStateToProps = state => {
//   return {
//     tracks: state.tracks.tracks,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     updateTracks: (tracks) => dispatch(updateTracks(tracks)),
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(SideBarOption);
export default SideBarOption;