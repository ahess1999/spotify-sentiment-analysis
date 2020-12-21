import { combineReducers } from 'redux';


import tokenReducer from './Token/token.reducer';


const rootReducer = combineReducers({
    token: tokenReducer,
});

export default rootReducer;