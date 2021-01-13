import UPDATETRACKS from './tracks.types'

export const updateTracks = (tracks) => {
    return {
        type: UPDATETRACKS,
        payload: tracks
    }
}