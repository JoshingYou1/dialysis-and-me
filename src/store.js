import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './localStorage';
import authReducer from './reducers/auth';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import {appReducer} from "./reducers";

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        app: appReducer
    }),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exists
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;

