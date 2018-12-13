import {createStore, applyMiddleware} from 'redux';
import {appReducer} from './reducers';
import thunk from 'redux-thunk';

export default createStore(appReducer, applyMiddleware(thunk));