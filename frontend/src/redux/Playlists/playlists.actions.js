import UPDATEPLAYLISTS from './playlists.types'

export const updatePlaylists = (playlists) => {
    return {
        type: UPDATEPLAYLISTS,
        payload: playlists
    }
}