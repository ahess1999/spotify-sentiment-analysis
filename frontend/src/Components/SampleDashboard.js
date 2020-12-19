import React, { useEffect, useState } from "react";
import { getTokenFromResponse } from "./SpotifyAuth";
import "./Login.css";
import Login from "./Login";

function SampleDashboard() {
    const [ token , setToken] = useState(null);
  
    useEffect(() => {
      // Set token
      const hash = getTokenFromResponse();
      window.location.hash = "";
      let token = hash.access_token;
  
      if (token) {
        setToken(token);
      }

      console.log({token})
    },[]);

    return(
        <div className="app">
        {
            token ? (
                <div>
                    <h1>WAWAWEEA -- GREAT SUCCESS!!!</h1>
                    <h2>{token}</h2>
                </div>
            ):
            (<Login/>)
        
        }

        </div>
    );

}

export default SampleDashboard;