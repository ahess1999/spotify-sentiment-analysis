import React from "react";
import "./RightBar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import axios from 'axios';
import store from '../redux/store'

function RightBar({token}) {

  function basic_sentiment(token) {
    axios.post('/api/playlist/create/', token)
    .then(res => console.log(res))
  }

  return (
    <div className="rightbar">
      <h2  className = "rightbar__title">Create New Playlist</h2>
      <SideBarOption Icon={MusicNoteIcon} option="Suggested for you" onClick={() => basic_sentiment()} token = {token}/>
      <SideBarOption Icon={MusicNoteIcon} option="Dance" token = {token}/>
      <SideBarOption Icon={MusicNoteIcon} option="Loud" />
      <SideBarOption Icon={MusicNoteIcon} option="Happy" />
      <SideBarOption Icon={MusicNoteIcon} option="Emotional" />
      <SideBarOption Icon={MusicNoteIcon} option="Throw backs" />
      <br />
    </div>
  );
}

export default RightBar;