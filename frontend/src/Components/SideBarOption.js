import React from "react";
import axios from 'axios'
import "./SideBarOption.css";
import { Button } from "@material-ui/core";

function SideBarOption({ option = "test", Icon, token }) {

  function create_playlist(token) {
      axios.post('/api/playlist/create/', token)
      .then(res => console.log(res))
  }

  return (
    <div className="sidebarOption" onClick={() => create_playlist({token})}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SideBarOption;