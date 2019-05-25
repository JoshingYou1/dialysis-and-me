import {
    SET_AUTH_TOKEN,
    setAuthToken,
    CLEAR_AUTH,
    clearAuth,
    AUTH_REQUEST,
    authRequest,
    AUTH_SUCCESS,
    authSuccess,
    AUTH_ERROR,
    authError
} from './auth';

import thunk from 'redux-thunk';

const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
    };
    const next = jest.fn();
    const invoke = (action => thunk(store)(next)(action));
    return {store, next, invoke};
};

describe('setAuthToken', () => {
    it('Should return the action', () => {
        const authToken = 1;

        const action = setAuthToken(authToken);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
        expect(action.authToken).toEqual(authToken);
    });
});

describe('clearAuth', () => {
    it('Should return the action', () => {
        const action = clearAuth();
        expect(action.type).toEqual(CLEAR_AUTH);
        expect(action).toEqual(clearAuth());
    });
});

describe('authRequest', () => {
    it('Should return the action', () => {
        const action = authRequest();
        expect(action.type).toEqual(AUTH_REQUEST);
        expect(action).toEqual(authRequest());
    });
});

describe('authSuccess', () => {
    it('Should return the action', () => {
        const currentUser = {
            _id: 1
        };

        const action = authSuccess(currentUser);
        expect(action.type).toEqual(AUTH_SUCCESS);
        expect(action.currentUser).toEqual(currentUser);
    });
});

describe('authError', () => {
    it('Should return the action', () => {
        const error = 'Invalid username or password';

        const action = authError(error);
        expect(action.type).toEqual(AUTH_ERROR);
        expect(action.error).toEqual(error);
    });
});

