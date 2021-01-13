import ISLOADING from './loading.types'


const INITIAL_STATE = {
    loading: true,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ISLOADING:
            return{
                ...state, 
                loading: action.payload,
            }
            
        default: return state;

    }

};

export default reducer;