import { combineReducers } from 'redux';


import tokenReducer from './Token/token.reducer';
import playlistsReducer from './Playlists/playlists.reducer';
import isLoading from './Loading/loading.reducer';
import tracksReducer from './Tracks/tracks.reducer';



const rootReducer = combineReducers({
    token: tokenReducer,
    playlists: playlistsReducer,
    loading: isLoading,
    tracks: tracksReducer,
});

export default rootReducer;