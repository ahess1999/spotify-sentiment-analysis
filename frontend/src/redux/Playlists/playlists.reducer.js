import UPDATEPLAYLISTS from './playlists.types'


const INITIAL_STATE = {
    playlists: '',
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEPLAYLISTS:
            return{
                ...state, 
                playlists: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;