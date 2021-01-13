import UPDATETRACKS from './tracks.types'


const INITIAL_STATE = {
    tracks: '',
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATETRACKS:
            return {
                ...state, 
                tracks: action.payload,
            };
            
        default: return state;

    }

};

export default reducer;