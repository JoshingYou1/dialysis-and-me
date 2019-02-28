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
    TOGGLE_DOCTOR_MENU,
    EDIT_SELECTED_DOCTOR_BY_ID,
    FETCH_DOCTORS_SUCCESS,
    SUCCESS_ERROR_MESSAGE,
    DOCTOR_MENU_BY_DOCTOR_ID,
    LOAD_BASIC_PROFILE_INFO_FORM_DATA,
    SHOW_APPOINTMENTS
} from '../actions/index';

const initialState = {
    selectedAppointments: [],
    selectedLabResult: null,
    isSidebarShowing: false,
    labResults: [],
    isLabResultsInfoShowing: false,
    profile: [],
    loadedBasicProfileInfoFormData: {},
    isUserInfoShowing: false,
    section: 0,
    appointments: [],
    isAppointmentInfoShowing: false,
    areSublinksShowing: false,
    currentDoctor: 0,
    isCreateAppointmentFormShowing: false,
    isCreateDoctorFormShowing: false,
    isEditBasicProfileInfoFormShowing: false,
    selectedAppointmentToEdit: {},
    loadedAppointmentFormData: {},
    isDoctorMenuShowing: false,
    loadedDoctorFormData: {},
    doctors: [],
    areAppointmentsShowing: false,
    deletedAppointment: null
};

export const appReducer = (state=initialState, action) => {
    if (action.type === SELECT_LAB_RESULTS_BY_ID) {
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
    else if (action.type === LOAD_BASIC_PROFILE_INFO_FORM_DATA) {
        return Object.assign({}, state, {
            loadedBasicProfileInfoFormData: action.loadedBasicProfileInfoFormData
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
            isAppointmentInfoShowing: action.isAppointmentInfoShowing
        });
    }
    else if (action.type === SHOW_APPOINTMENTS) {
        return Object.assign({}, state, {
            areAppointmentsShowing: !state.areAppointmentsShowing
        })
    }
    else if (action.type === UPDATE_CURRENT_DOCTOR) {
        return Object.assign({}, state, {
            currentDoctor: action.doctor,
            isDoctorMenuShowing: false
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
            loadedAppointmentFormData: action.loadedAppointmentFormData
        });
    }
    else if (action.type === DELETE_APPOINTMENT_SUCCESS) {
        const appointments = state.appointments.filter(a => action.deletedAppointment._id !== a._id);
        const selectedAppointments = state.selectedAppointments.filter(a => action.deletedAppointment._id !== a._id);
        return Object.assign({}, state, {
            appointments,
            selectedAppointments,
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
    else if (action.type === DELETE_DOCTOR_SUCCESS) {
        const doctors = state.doctors.filter(d => action.deletedDoctor._id !== d._id);
        return Object.assign({}, state, {
            doctors,
            deletedDoctor: action.deletedDoctor
        });
    }
    else if (action.type === LOAD_DOCTOR_FORM_DATA) {
        return Object.assign({}, state, {
            loadedDoctorFormData: action.loadedDoctorFormData
        });
    }
    else if (action.type === CHOOSE_EDIT_BASIC_PROFILE_INFO) {
        return Object.assign({}, state, {
            isEditBasicProfileInfoFormShowing: !state.isEditBasicProfileInfoFormShowing
        });
    }
    else if (action.type === EDIT_SELECTED_APPOINTMENT_BY_ID) {
        return Object.assign({}, state, {
            selectedAppointmentToEdit: action.selectedAppointmentToEdit
        });
    }
    else if (action.type === TOGGLE_DOCTOR_MENU) {
        return Object.assign({}, state, {
            isDoctorMenuShowing: !state.isDoctorMenuShowing
        });
    }
    else if (action.type === EDIT_SELECTED_DOCTOR_BY_ID) {
        return Object.assign({}, state, {
            selectedDoctorToEdit: action.selectedDoctorToEdit
        });
    }
    else if (action.type === FETCH_DOCTORS_SUCCESS) {
        return Object.assign({}, state, {
            doctors: action.doctors
        });
    }
    else if (action.type === DOCTOR_MENU_BY_DOCTOR_ID) {
        return Object.assign({}, state, {
            doctorMenu: action.doctorMenu
        });
    }
    else if (action.type === SUCCESS_ERROR_MESSAGE) {
        return Object.assign({}, state, {
            isMessageShowing: action.isMessageShowing
        });
    }
    else if (action.type === CREATE_APPOINTMENT_SUCCESS) {
        let selectedAppointments = [];
        const appointments = [...state.appointments, action.createdAppointment];
        if (state.selectedAppointments.length && new Date(action.createdAppointment.date).getMonth() === new Date(state.selectedAppointments[0].date).getMonth()) {
            selectedAppointments = [...state.selectedAppointments, action.createdAppointment];
            selectedAppointments.sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            })
        }
        return Object.assign({}, state, {
            appointments,
            selectedAppointments
        })
    }
    else if (action.type === CREATE_DOCTOR_SUCCESS) {
        const doctors = [...state.doctors, action.createdDoctor];
        return Object.assign({}, state, {
            doctors
        })
    }
    console.log('state', state);
    return state;
}