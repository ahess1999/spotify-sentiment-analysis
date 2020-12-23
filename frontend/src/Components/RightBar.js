import React from "react";
import "./RightBar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function RightBar({playlists}) {

  return (
    <div className="rightbar">
      <h2 className = "rightbar__title">Create New Playlist</h2>
      <SideBarOption Icon={MusicNoteIcon} option="Suggested for you" />
      <SideBarOption Icon={MusicNoteIcon} option="Dance" />
      <SideBarOption Icon={MusicNoteIcon} option="Loud" />
      <SideBarOption Icon={MusicNoteIcon} option="Happy" />
      <SideBarOption Icon={MusicNoteIcon} option="Emotional" />
      <SideBarOption Icon={MusicNoteIcon} option="Throw backs" />

      <br />
    </div>
  );
}

export default RightBar;