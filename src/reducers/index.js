import {SELECT_LAB_RESULTS_BY_ID, CHOOSE_APPOINTMENT_MONTH, TOGGLE_SIDEBAR, FETCH_LAB_RESULTS_SUCCESS, FETCH_PROFILE_INFO_SUCCESS, TOGGLE_LAB_RESULTS_INFO} from '../actions/index';

const initialState = {
    selectedMonth: new Date().getMonth(),
    selectedLabResult: null,
    isSidebarVisible: true,
    labResults: [],
    isLabResultsInfoShowing: false,
    profile: []
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
            isSidebarVisible: !state.isSidebarShowing
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
        })
    }
    else if (action.type === TOGGLE_LAB_RESULTS_INFO) {
        return Object.assign({}, state, {
            isLabResultsInfoShowing: action.isLabResultsInfoShowing
        })
    }
    return state;
}