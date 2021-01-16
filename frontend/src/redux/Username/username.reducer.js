import UPDATEUSERNAME from './username.types'


const INITIAL_STATE = {
    username: '',
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UPDATEUSERNAME:
            return {
                ...state, 
                username: action.payload,
            };
            
        default: return state;

    }

};

export default reducer;