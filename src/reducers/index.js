import {
    SELECT_LAB_RESULTS_BY_ID,
    TOGGLE_SIDEBAR,
    FETCH_LAB_RESULTS_SUCCESS,
    FETCH_PROFILE_INFO_SUCCESS,
    TOGGLE_LAB_RESULTS_INFO,
    TOGGLE_USER_INFO,
    TOGGLE_SUBLINKS,
    SELECT_PROFILE_INFO_SECTION,
    FETCH_APPOINTMENTS_SUCCESS,
    TOGGLE_APPOINTMENT_INFO,
    SELECT_APPOINTMENTS_BY_ID,
    UPDATE_CURRENT_DOCTOR,
    CHOOSE_CREATE_APPOINTMENT,
    CHOOSE_EDIT_APPOINTMENT,
    LOAD_APPOINTMENT_FORM_DATA,
    CREATE_APPOINTMENT_SUCCESS,
    UPDATE_APPOINTMENT_SUCCESS,
    CHOOSE_CREATE_DOCTOR,
    CHOOSE_EDIT_DOCTOR,
    CREATE_DOCTOR_SUCCESS,
    UPDATE_DOCTOR_SUCCESS,
    CHOOSE_EDIT_BASIC_PROFILE_INFO,
    DELETE_APPOINTMENT_SUCCESS,
    DELETE_DOCTOR_SUCCESS,
    EDIT_SELECTED_APPOINTMENT_BY_ID,
    DISCARD_APPOINTMENT_FORM_CHANGES,
    LOAD_DOCTOR_FORM_DATA,
    TOGGLE_APPOINTMENT_MENU,
    TOGGLE_DOCTOR_MENU
} from '../actions/index';

const initialState = {
    selectedAppointments: null,
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
    isCreateAppointmentFormShowing: false,
    isCreateDoctorFormShowing: false,
    isEditDoctorFormShowing: false,
    isEditBasicProfileInfoShowing: false,
    selectedAppointmentToEdit: {},
    loadAppointmentFormData: {},
    isAppointmentMenuShowing: false,
    isDoctorMenuShowing: false
};

export const appReducer = (state=initialState, action) => {
    if (action.type === SELECT_LAB_RESULTS_BY_ID) {
        console.log('action', action)
        return Object.assign({}, state, {
            selectedLabResult: action.labResults
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
    else if (action.type === FETCH_APPOINTMENTS_SUCCESS) {
        return Object.assign({}, state, {
            appointments: action.appointments
        });
    }
    else if (action.type === SELECT_APPOINTMENTS_BY_ID) {
        return Object.assign({}, state, {
            selectedAppointments: action.selectedAppointments
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
    // else if (action.type === CHOOSE_EDIT_APPOINTMENT) {
    //     return Object.assign({}, state, {
    //         isEditAppointmentFormShowing: !state.isEditAppointmentFormShowing
    //     });
    // }
    else if (action.type === LOAD_APPOINTMENT_FORM_DATA) {
        return Object.assign({}, state, {
            loadAppointmentFormData: action.loadAppointmentFormData
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
    else if (action.type === DELETE_APPOINTMENT_SUCCESS) {
        return Object.assign({}, state, {
            deletedAppointment: action.deletedAppointment
        });
    }
    else if (action.type === CHOOSE_CREATE_DOCTOR) {
        return Object.assign({}, state, {
            isCreateDoctorFormShowing: !state.isCreateDoctorFormShowing
        });
    }
    else if (action.type === CHOOSE_EDIT_DOCTOR) {
        return Object.assign({}, state, {
            isEditDoctorFormShowing: !state.isEditDoctorFormShowing
        });
    }
    else if (action.type === CREATE_DOCTOR_SUCCESS) {
        return Object.assign({}, state, {
            createdDoctor: action.createdDoctor
        });
    }
    else if (action.type === UPDATE_DOCTOR_SUCCESS) {
        return Object.assign({}, state, {
            updatedDoctor: action.updatedDoctor
        });
    }
    else if (action.type === DELETE_DOCTOR_SUCCESS) {
        return Object.assign({}, state, {
            deletedDoctor: action.deletedDoctor
        });
    }
    else if (action.type === LOAD_DOCTOR_FORM_DATA) {
        return Object.assign({}, state, {
            loadedDoctorFormData: action.loadDoctorFormData
        });
    }
    else if (action.type === CHOOSE_EDIT_BASIC_PROFILE_INFO) {
        return Object.assign({}, state, {
            isEditBasicProfileInfoShowing: !state.isEditBasicProfileInfoShowing
        });
    }
    else if (action.type === EDIT_SELECTED_APPOINTMENT_BY_ID) {
        return Object.assign({}, state, {
            selectedAppointmentToEdit: action.selectedAppointmentToEdit
        });
    }
    else if (action.type === DISCARD_APPOINTMENT_FORM_CHANGES) {
        return Object.assign({}, state, {
            discardChanges: action.discardChanges
        });
    }
    else if (action.type === TOGGLE_APPOINTMENT_MENU) {
        return Object.assign({}, state, {
            isAppointmentMenuShowing: !state.isAppointmentMenuShowing
        })
    }
    else if (action.type === TOGGLE_DOCTOR_MENU) {
        return Object.assign({}, state, {
            isDoctorMenuShowing: !state.isDoctorMenuShowing
        })
    }
    console.log('state', state);
    return state;
}