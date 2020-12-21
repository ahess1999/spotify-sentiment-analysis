import UPDATETOKEN from './token.types'


const INITIAL_STATE = {
    token: '',
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATETOKEN:
            return {
                ...state, token: action.payload,
            };
            
        default: return state;

    }

};

export default reducer;