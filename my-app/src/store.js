import { createStore, applyMiddleware } from 'redux';
// import { reducerA, reducerB } from './components';
import { reducer } from './components';

import { thunk } from 'redux-thunk';
// const reducer = combineReducers({ aState: reducerA, bState: reducerB });

export const store = createStore(
	reducer,
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
