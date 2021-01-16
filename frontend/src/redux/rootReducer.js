import { combineReducers } from 'redux';


import tokenReducer from './Token/token.reducer';
import playlistsReducer from './Playlists/playlists.reducer';
import isLoading from './Loading/loading.reducer';
import tracksReducer from './Tracks/tracks.reducer';
import playlistReducer from './Playlist/playlist.reducer'
import indexReducer from './Index/index.reducer'
import usernameReducer from './Username/username.reducer'

const rootReducer = combineReducers({
    token: tokenReducer,
    playlists: playlistsReducer,
    loading: isLoading,
    tracks: tracksReducer,
    index: indexReducer,
    username: usernameReducer,
});

export default rootReducer;