import React, {useEffect, useState} from "react";
import "./LeftBar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import axios from 'axios'
import { connect } from "react-redux"
import store from "../redux/store"


// var playlists = []

//   function get_playlists(token) {
//     axios.post('api/playlist/get/playlists', token)
//     .then(res => console.log(res));
//   }

// (0) Add URI to playlist name
// (1) Get URI the of the playlist and pass to function
// (2) Upload tracks to redux
// (3) Pull from redux and display on body


function LeftBar({playlists,token,updateTracks,props}) {
  
 console.log(playlists)

 //const props = store.getState()

    return (
      <div className="leftbar">
        <a href = "http://localhost:3000/">
          <img
            className="leftbar__logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
          />
        </a>
        <SideBarOption Icon={HomeIcon} option="Home" />
        <SideBarOption Icon={SearchIcon} option="Search" />
        <SideBarOption Icon={LibraryMusicIcon} option="Your Library" />
        <br />
        <strong className="leftbar__title">PLAYLISTS</strong>
        <hr />
        {playlists?.map((playlist) => (
          <SideBarOption updateTracks = {props.updateTracks} option={playlist} token = {token}/>
        ))}
      </div>
    );
  
  
}

export default LeftBar;