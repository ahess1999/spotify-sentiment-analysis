import React from "react";
import "./Login.css";
import { accessUrl } from "./SpotifyAuth";

function Login() {
  return (
    <div className="login">
      <div id='pagetitle'>SPOTIFY SENTIMENT ANALYSIS</div>
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;