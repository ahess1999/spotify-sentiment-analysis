import React from "react";
import "./SongTile.css";

function SongTile({track, props}) {

  console.log("oasfjidkljnsgljksnbgdukjfbngkjbiukjfdn")
  var track_info = Object.values(props.playlists)[props.index].tracks[track]
  
  var description = track_info.description
  var release = track_info.release
  var artists = track_info.artists
  var duration = track_info.duration
  var album = track_info.album
  var image = track_info.image

  return (
    <div className="songTile" onClick={() => alert('play song')}>
      <img className="songTile__album" src={image} alt="" />
      <div className="songTile__info">
        <h1>{track}</h1>
        <p>{}</p>
        <p>
          {artists.map((artist) => artist).join(", ")} -{" "}
          {album}
        </p>
      </div>
    </div>
  );
}

export default SongTile;