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
} from '../actions/auth';
import reducer from './auth';

describe('authReducer', () => {
    const authToken = 1;
    const currentUser = {
        _id: 1,
        username: 'Bob'
    };
    const loading = true;
    const error = 'Incorrect username or password';

    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            authToken: null,
            currentUser: null,
            loading: false,
            error: null
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('setAuthToken', () => {
        it('Should return an auth token for a registered user', () => {
            let state;
            state = reducer(state, setAuthToken(authToken));
            expect(state).toEqual({
                authToken: authToken,
                currentUser: null,
                loading: false,
                error: null
            });
        });
    });

    describe('clearAuth', () => {
        it('Should set the value of authToken and currentUser to null', () => {
            let state;
            state = reducer(state, clearAuth());
            expect(state).toEqual({
                authToken: null,
                currentUser: null,
                loading: false,
                error: null
            });
        });
    });

    describe('authRequest', () => {
        it('Should set the value of loading to true and error to null', () => {
            let state;
            state = reducer(state, authRequest());
            expect(state).toEqual({
                authToken: null,
                currentUser: null,
                loading: loading,
                error: null
            });
        });
    });

    describe('authSuccess', () => {
        it('Should set the value of loading to false and populate currentUser', () => {
            let state;
            state = reducer(state, authSuccess(currentUser));
            expect(state).toEqual({
                authToken: null,
                currentUser: currentUser,
                loading: false,
                error: null
            });
        });
    });

    describe('authError', () => {
        it('Should set the value of loading to false and populate error', () => {
            let state;
            state = reducer(state, authError(error));
            expect(state).toEqual({
                authToken: null,
                currentUser: null,
                loading: false,
                error: error
            });
        });
    });
});