import thunk from 'redux-thunk'
import {rootReducer} from "../reducers/rootReducer";
import {createStore, applyMiddleware} from 'redux';

export function configureStore(){
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}