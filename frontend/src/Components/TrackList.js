import React, {useEffect, useState} from "react";

function TrackList({tracks}){
    console.log('hello sir')
    return(
        <div>
            {tracks.items?.map(track => {
                <li>dogs</li>
            })}
        </div>
    );
}

export default TrackList;