import {combineReducers} from 'redux';

function list(state=[], action){
    switch(action.type){
        default:
            return state;
    }
}

export const coursesReducer = combineReducers({
    list
});