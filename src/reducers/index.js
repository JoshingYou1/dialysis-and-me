import {
    SELECT_LAB_RESULTS_BY_ID, 
    CHOOSE_APPOINTMENT_MONTH,
    TOGGLE_SIDEBAR,
    FETCH_LAB_RESULTS_SUCCESS,
    FETCH_PROFILE_INFO_SUCCESS,
    TOGGLE_LAB_RESULTS_INFO,
    TOGGLE_USER_INFO,
    TOGGLE_SUBLINKS,
    SELECT_PROFILE_INFO_SECTION,
    FETCH_APPOINTMENTS_SUCCESS,
    TOGGLE_APPOINTMENT_INFO,
    SELECT_APPOINTMENT_BY_ID,
    UPDATE_CURRENT_DOCTOR,
    CHOOSE_CREATE_APPOINTMENT,
    CHOOSE_EDIT_APPOINTMENT,
    LOAD_APPOINTMENT_FORM_DATA,
    CREATE_APPOINTMENT_SUCCESS,
    UPDATE_APPOINTMENT_SUCCESS
} from '../actions/index';

const initialState = {
    selectedAppointment: null,
    selectedLabResult: null,
    isSidebarShowing: false,
    labResults: [],
    isLabResultsInfoShowing: false,
    profile: [],
    isUserInfoShowing: false,
    section: 0,
    appointments: [],
    isAppointmentInfoShowing: false,
    areSublinksShowing: false,
    currentDoctor: 0,
    isEditAppointmentFormShowing: false,
    isCreateAppointmentFormShowing: false
};

export const appReducer = (state=initialState, action) => {
    if (action.type === SELECT_LAB_RESULTS_BY_ID) {
        console.log('action', action)
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
            isUserInfoShowing: action.isUserInfoShowing
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
        });
    }
    else if (action.type === SELECT_APPOINTMENT_BY_ID) {
        return Object.assign({}, state, {
            selectedAppointments: action.appointments
        });
    }
    else if (action.type === TOGGLE_APPOINTMENT_INFO) {
        return Object.assign({}, state, {
            isAppointmentInfoShowing: !state.isAppointmentInfoShowing
        });
    }
    else if (action.type === UPDATE_CURRENT_DOCTOR) {
        return Object.assign({}, state, {
            currentDoctor: action.doctor
        });
    }
    else if (action.type === CHOOSE_CREATE_APPOINTMENT) {
        return Object.assign({}, state, {
            isCreateAppointmentFormShowing: !state.isCreateAppointmentFormShowing
        });
    }
    else if (action.type === CHOOSE_EDIT_APPOINTMENT) {
        return Object.assign({}, state, {
            isEditAppointmentFormShowing: !state.isEditAppointmentFormShowing
        });
    }
    else if (action.type === LOAD_APPOINTMENT_FORM_DATA) {
        return Object.assign({}, state, {
            loadedAppointmentFormData: action.loadAppointmentFormData
        });
    }
    else if (action.type === CREATE_APPOINTMENT_SUCCESS) {
        return Object.assign({}, state, {
            createdAppointment: action.createdAppointment
        });
    }
    else if (action.type === UPDATE_APPOINTMENT_SUCCESS) {
        return Object.assign({}, state, {
            updatedAppointment: action.updatedAppointment
        });
    }
    console.log('state', state);
    return state;
}