import {SELECT_LAB_RESULTS_BY_ID, CHOOSE_APPOINTMENT_MONTH, TOGGLE_SIDEBAR, FETCH_LAB_RESULTS_SUCCESS, FETCH_PROFILE_INFO_SUCCESS, TOGGLE_LAB_RESULTS_INFO, TOGGLE_USER_INFO, TOGGLE_SUBLINKS, SELECT_PROFILE_INFO_SECTION} from '../actions/index';

const initialState = {
    selectedMonth: new Date().getMonth(),
    selectedLabResult: null,
    isSidebarShowing: false,
    labResults: [],
    isLabResultsInfoShowing: false,
    profile: [],
    isUserInfoShowing: false,
    section: 0
};

export const appReducer = (state=initialState, action) => {
    if (action.type === SELECT_LAB_RESULTS_BY_ID) {
        return Object.assign({}, state, {
            selectedLabResult: action.labResults
        });
    }

    else if (action.type === CHOOSE_APPOINTMENT_MONTH) {
        return Object.assign({}, state, {
            selectedMonth: action.month
        });
    }
    else if (action.type === TOGGLE_SIDEBAR) {
        return Object.assign({}, state, {
            isSidebarShowing: !state.isSidebarShowing
        });
    }
    else if (action.type === FETCH_LAB_RESULTS_SUCCESS) {
        return Object.assign({}, state, {
            labResults: action.labResults
        });
    }
    else if (action.type === FETCH_PROFILE_INFO_SUCCESS) {
        return Object.assign({}, state, {
            profile: action.profile
        });
    }
    else if (action.type === TOGGLE_LAB_RESULTS_INFO) {
        return Object.assign({}, state, {
            isLabResultsInfoShowing: action.isLabResultsInfoShowing
        });
    }
    else if (action.type === TOGGLE_USER_INFO) {
        return Object.assign({}, state, {
            isUserInfoShowing: !state.isUserInfoShowing
        });
    }
    else if (action.type === TOGGLE_SUBLINKS) {
        return Object.assign({}, state, {
            areSublinksShowing: !state.areSublinksShowing
        });
    }
    else if (action.type === SELECT_PROFILE_INFO_SECTION) {
        return Object.assign({}, state, {
            section: action.section
        });
    }
    console.log('state', state);
    return state;
}