import UPDATETOKEN from './token.types'

export const updateToken = (token) => {
    return {
        type: UPDATETOKEN,
        payload: token
    }
}