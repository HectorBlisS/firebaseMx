import {combineReducers} from 'redux';

function profile(state={}, action){
    switch(action.type){
        default:
            return state;
    }
}

export const userReducer = combineReducers({
    profile
});