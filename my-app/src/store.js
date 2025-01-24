import { createStore, applyMiddleware, compose } from 'redux';
// import { reducerA, reducerB } from './components';
import { reducer } from './components';

import { thunk } from 'redux-thunk';
// const reducer = combineReducers({ aState: reducerA, bState: reducerB });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
