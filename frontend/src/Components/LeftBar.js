import React from "react";
import "./LeftBar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function LeftBar({playlists}) {

  return (
    <div className="leftbar">
      <img
        className="leftbar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideBarOption Icon={HomeIcon} option="Home" />
      <SideBarOption Icon={SearchIcon} option="Search" />
      <SideBarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="leftbar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.map((playlist) => (
        <SideBarOption option={playlist} />
      ))}
    </div>
  );
}

export default LeftBar;