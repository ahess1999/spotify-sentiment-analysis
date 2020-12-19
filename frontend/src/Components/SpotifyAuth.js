export const authEndpoint = "https://accounts.spotify.com/authorize";
// got this code from https://www.youtube.com/watch?v=pnkuI8KXW_8&t=3119s&ab_channel=CleverProgrammer
// https://github.com/CleverProgrammers/spotify-clone/commit/5f6021203f314c3ea209d397898620d3f8d8bc68

// Spotify Developer App ID
const clientId = "003aebbf02134fccbf4cd6453f9ac581";

// Redirects back to the homepage
const redirectUri = "http://localhost:3000/";

// What our app has access to
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// Gets the token from the URL
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

// URL for requesting authentication
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;