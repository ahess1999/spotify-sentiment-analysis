import React, {useState, useEffect} from "react";
import "./Body.css";
import Header from "./Header";
// import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import store from '../redux/store'
import SongTile from './SongTile'
import { updateTracks } from "../redux/Tracks/tracks.actions";
import { connect } from "react-redux"
import TrackList from './TrackList'
import { TableCell } from "@material-ui/core";
import { updatePlaylists } from "../redux/Playlists/playlists.actions";
import { isIndex } from '../redux/Index/index.actions';
import { updateUsername } from '../redux/Username/username.actions';



function Body({props}) {


  const [ playlists , setPlaylists ] = useState(null);

  var playlist_info = Object.values(props.playlists)[props.index]
  
  var description = playlist_info.description
  var name = playlist_info.name


  return (
    <div className="body">
      <Header props = {props}/>

      <div className="body__info">
        <img src={playlist_info.image} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{name}</h2>
          {/* <p>{discover_weekly?.description}</p> */}
          <p>Description:  {description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            // onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        
        {props.tracks.map((item) => (
            <SongTile track = {item} props = {props} />
        ))}

      </div>
    </div>
    
  );
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks.tracks,
    playlists: state.playlists.playlists,
    index: state.index.index,
    username: state.username.username,


  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTracks: (tracks) => dispatch(updateTracks(tracks)),
    updatePlaylists: (playlists) => dispatch(updatePlaylists(playlists)),
    isIndex: (index) => dispatch(isIndex(index)),
    updateUsername: (username) => dispatch(updateUsername(username)),


  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Body);
// export default Body;