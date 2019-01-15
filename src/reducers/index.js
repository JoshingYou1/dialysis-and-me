import {SELECT_LAB_RESULTS_BY_ID, CHOOSE_APPOINTMENT_MONTH, TOGGLE_SIDEBAR, FETCH_LAB_RESULTS_SUCCESS, FETCH_PROFILE_INFO_SUCCESS, TOGGLE_LAB_RESULTS_INFO, TOGGLE_USER_INFO, TOGGLE_SUBLINKS, SELECT_PROFILE_INFO_SECTION, FETCH_APPOINTMENTS_SUCCESS, SELECT_APPOINTMENT_BY_ID, TOGGLE_APPOINTMENT_INFO} from '../actions/index';

const initialState = {
    // selectedMonth: new Date().getMonth(),
    selectedAppointment: null,
    selectedLabResult: null,
    isSidebarShowing: false,
    labResults: [],
    isLabResultsInfoShowing: false,
    profile: [],
    isUserInfoShowing: false,
    section: 0,
    appointments: [],
    isAppointmentInfoShowing: false
};

export const appReducer = (state=initialState, action) => {
    if (action.type === SELECT_LAB_RESULTS_BY_ID) {
        console.log('action', action)
        return Object.assign({}, state, {
            selectedLabResult: action.labResults
        });
    }

    // else if (action.type === CHOOSE_APPOINTMENT_MONTH) {
    //     return Object.assign({}, state, {
    //         selectedMonth: action.month
    //     });
    // }
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
    else if (action.type === FETCH_APPOINTMENTS_SUCCESS) {
        return Object.assign({}, state, {
            appointments: action.appointments
        })
    }
    else if (action.type === SELECT_APPOINTMENT_BY_ID) {
        return Object.assign({}, state, {
            selectedAppointment: action.appointment
        });
    }
    else if (action.type === TOGGLE_APPOINTMENT_INFO) {
        return Object.assign({}, state, {
            isAppointmentInfoShowing: !state.isAppointmentInfoShowing
        })
    }
    console.log('state', state);
    return state;
}