import thunk from 'redux-thunk'
import {rootReducer} from "../reducers/rootReducer";
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import {checkIfUser} from "../actions/userActions";

export function configureStore(){
    const store = createStore(
        rootReducer,
        applyMiddleware(logger, thunk)
    );
    store.dispatch(checkIfUser());
    return store;
}