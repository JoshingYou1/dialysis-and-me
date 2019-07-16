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
    LOAD_DOCTOR_FORM_DATA,
    TOGGLE_DOCTOR_MENU,
    EDIT_SELECTED_DOCTOR_BY_ID,
    FETCH_DOCTORS_SUCCESS,
    SUCCESS_ERROR_MESSAGE,
    LOAD_BASIC_PROFILE_INFO_FORM_DATA,
    SHOW_APPOINTMENTS,
    TOGGLE_DOCTOR_LIST,
    TOGGLE_APPOINTMENT_LIST,
    UPDATE_BASIC_PROFILE_INFO_SUCCESS,
    LOADING,
    TRIGGER_ANIMATION
} from '../actions/index';

const initialState = {
    selectedAppointments: [],
    selectedLabResult: null,
    isSidebarShowing: false,
    labResults: [],
    isLabResultsInfoShowing: false,
    profile: {},
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
    selectedAppointmentToEdit: null,
    selectedDoctorToEdit: null,
    loadedAppointmentFormData: {},
    isDoctorMenuShowing: false,
    loadedDoctorFormData: {},
    doctors: [],
    areAppointmentsShowing: false,
    deletedAppointment: null,
    deletedDoctor: null,
    isLoading: true,
    animation: false,
    isEditAppointmentFormShowing: false,
    isEditDoctorFormShowing: false
};

export const appReducer = (state = initialState, action) => {
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
            labResults: action.labResults,
            isLoading: false
        });
    }
    else if (action.type === FETCH_PROFILE_INFO_SUCCESS) {
        return Object.assign({}, state, {
            profile: action.profile,
            isLoading: false
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
            appointments: action.appointments,
            isLoading: false
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
            deletedDoctor: action.deletedDoctor,
            currentDoctor: 0
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
            doctors: action.doctors,
            isLoading: false
        });
    }
    else if (action.type === SUCCESS_ERROR_MESSAGE) {
        return Object.assign({}, state, {
            isMessageShowing: action.isMessageShowing
        });
    }
    else if (action.type === CREATE_APPOINTMENT_SUCCESS) {
        if (action.createdAppointment) {
            let selectedAppointments = [];
            const appointments = [...state.appointments, action.createdAppointment];
            if (state.selectedAppointments.length && new Date(action.createdAppointment.date).getMonth() === new Date(state.selectedAppointments[0].date).getMonth()) {
                selectedAppointments = [...state.selectedAppointments, action.createdAppointment];
                selectedAppointments.sort((a, b) => {
                    return new Date(a.date) - new Date(b.date);
                });
            }
            return Object.assign({}, state, {
                appointments,
                selectedAppointments
            });
        }
    }
    else if (action.type === CREATE_DOCTOR_SUCCESS) {
        if (action.createdDoctor) {
            let doctors = [...state.doctors, action.createdDoctor];
            doctors.sort((a, b) => {
                if(a.name.lastName < b.name.lastName) { return -1; }
                if(a.name.lastName > b.name.lastName) { return 1; }
                return 0;
            });
            return Object.assign({}, state, {
                doctors
            });
        }
    }
    else if (action.type === TOGGLE_DOCTOR_LIST) {
        return Object.assign({}, state, {
            deletedDoctor: null
        });
    }
    else if (action.type === TOGGLE_APPOINTMENT_LIST) {
        return Object.assign({}, state, {
            deletedAppointment: null
        });
    }
    else if (action.type === UPDATE_BASIC_PROFILE_INFO_SUCCESS) {
        return Object.assign({}, state, {
            profile: action.updatedBasicProfileInfo
        });
    }
    else if (action.type === UPDATE_DOCTOR_SUCCESS) {
        let updatedDoctors = state.doctors.map(d => {
            if (d._id === state.selectedDoctorToEdit._id) {
                return action.updatedDoctor;
            }
            return d;
        });
        updatedDoctors.sort((a, b) => {
            if(a.name.lastName < b.name.lastName) { return -1; }
            if(a.name.lastName > b.name.lastName) { return 1; }
            return 0;
        });
        return Object.assign({}, state, {
            doctors: updatedDoctors
        });
    }
    else if (action.type === UPDATE_APPOINTMENT_SUCCESS) {
        let appointments = [...state.appointments];
        let updatedAppointments = appointments.map(a => {
            if (a._id === state.selectedAppointmentToEdit._id) {
                return action.updatedAppointment;
            }
            return a;
        });
        let selectedUpdatedAppointments = state.selectedAppointments.map(a => {
            if (a._id === state.selectedAppointmentToEdit._id) {
                return action.updatedAppointment;
            }
            return a;
        });
        selectedUpdatedAppointments.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
        updatedAppointments.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
        return Object.assign({}, state, {
            appointments: updatedAppointments,
            selectedAppointments: selectedUpdatedAppointments
        });
    }
    else if (action.type === LOADING) {
        return Object.assign({}, state, {
            isLoading: action.isLoading
        })
    }
    else if (action.type === TRIGGER_ANIMATION) {
        return Object.assign({}, state, {
            animation: !state.animation
        });
    }
    return state;
}