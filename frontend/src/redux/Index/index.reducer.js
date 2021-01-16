import INDEX from './index.types'


const INITIAL_STATE = {
    index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case INDEX:
            return{
                ...state, 
                index: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;