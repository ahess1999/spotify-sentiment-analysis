import UPDATEUSERNAME from './username.types'

export const updateUsername = (username) => {
    return {
        type: UPDATEUSERNAME,
        payload: username
    }
}