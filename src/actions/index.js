import {API_BASE_URL} from '../config';

export const SELECT_LAB_RESULTS_BY_ID = 'SELECT_LAB_RESULTS_BY_ID';
export const selectLabResultsById = labResults => ({
    type: SELECT_LAB_RESULTS_BY_ID,
    labResults
});

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const toggleSidebar = isSidebarShowing => ({
    type: TOGGLE_SIDEBAR,
    isSidebarShowing
});

export const FETCH_LAB_RESULTS_SUCCESS = 'FETCH_LAB_RESULTS_SUCCESS';
export const fetchLabResultsSuccess = labResults => ({
    type: FETCH_LAB_RESULTS_SUCCESS,
    labResults
});

export const fetchLabResults = patientId => (dispatch, getState) => {
    fetch(`${API_BASE_URL}/api/patients/${patientId}/lab-results`,
    {
        method: 'GET',
        headers: {
            authorization: `Bearer ${getState().auth.authToken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(labResults => {
            dispatch(fetchLabResultsSuccess(labResults));
        })
};

export const FETCH_PROFILE_INFO_SUCCESS = 'FETCH_PROFILE_INFO_SUCCESS';
export const fetchProfileInfoSuccess = profile => ({
    type: FETCH_PROFILE_INFO_SUCCESS,
    profile
});

export const fetchProfileInfo = patientId => (dispatch, getState) => {
    fetch(`${API_BASE_URL}/api/patients/${patientId}`,
    {
        method: 'GET',
        headers: {
            authorization: `Bearer ${getState().auth.authToken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(profile => {
          
            dispatch(fetchProfileInfoSuccess(profile));
        });
};

export const LOAD_BASIC_PROFILE_INFO_FORM_DATA = 'LOAD_BASIC_PROFILE_INFO_FORM_DATA';
export const loadBasicProfileInfoFormData = loadedBasicProfileInfoFormData => ({
    type: LOAD_BASIC_PROFILE_INFO_FORM_DATA,
    loadedBasicProfileInfoFormData
});

export const TOGGLE_LAB_RESULTS_INFO = 'TOGGLE_LAB_RESULTS_INFO';
export const toggleLabResultsInfo = isLabResultsInfoShowing => ({
    type: TOGGLE_LAB_RESULTS_INFO,
    isLabResultsInfoShowing
});

export const TOGGLE_USER_INFO = 'TOGGLE_USER_INFO';
export const toggleUserInfo = isUserInfoShowing => ({
    type: TOGGLE_USER_INFO,
    isUserInfoShowing
});

export const TOGGLE_SUBLINKS = 'TOGGLE_SUBLINKS';
export const toggleSublinks = areSublinksShowing => ({
    type: TOGGLE_SUBLINKS,
    areSublinksShowing
});

export const SELECT_PROFILE_INFO_SECTION = 'SELECT_PROFILE_INFO_SECTION';
export const selectProfileInfoSection = section => ({
    type: SELECT_PROFILE_INFO_SECTION,
    section
});

export const FETCH_APPOINTMENTS_SUCCESS = 'FETCH_APPOINTMENTS_SUCCESS';
export const fetchAppointmentsSuccess = appointments => ({
    type: FETCH_APPOINTMENTS_SUCCESS,
    appointments
});

export const fetchAppointments = patientId => (dispatch, getState) => {
    fetch(`${API_BASE_URL}/api/patients/${patientId}/appointments`,
    {
        method: 'GET',
        headers: {
            authorization: `Bearer ${getState().auth.authToken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(appointments => {
            
            dispatch(fetchAppointmentsSuccess(appointments));
        });
};

export const DELETE_APPOINTMENT_SUCCESS = 'DELETE_APPOINTMENT_SUCCESS';
export const deleteAppointmentSuccess = deletedAppointment => ({
    type: DELETE_APPOINTMENT_SUCCESS,
    deletedAppointment
});

export const deleteAppointment = (patientId, appointmentId) => (dispatch, getState) => {
    fetch(`${API_BASE_URL}/api/patients/${patientId}/appointments/${appointmentId}`,
    {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${getState().auth.authToken}`
        }
    })
        .then(res => {
            
            if (!res.ok) {
                return Promise.reject(res.statusText)
            }
            return 'Appointment successfully deleted!';
        })
        .then(deletedAppointment => {
            dispatch(deleteAppointmentSuccess(deletedAppointment));
        });
};

export const SELECT_APPOINTMENTS_BY_ID = 'SELECT_APPOINTMENTS_BY_ID';
export const selectAppointmentsById = selectedAppointments => ({
    type: SELECT_APPOINTMENTS_BY_ID,
    selectedAppointments
});

export const TOGGLE_APPOINTMENT_INFO = 'TOGGLE_APPOINTMENT_INFO';
export const toggleAppointmentInfo = isAppointmentInfoShowing => ({
    type: TOGGLE_APPOINTMENT_INFO,
    isAppointmentInfoShowing
});

export const UPDATE_CURRENT_DOCTOR = 'UPDATE_CURRENT_DOCTOR';
export const updateCurrentDoctor = doctor => ({
    type: UPDATE_CURRENT_DOCTOR,
    doctor
});

export const CHOOSE_CREATE_APPOINTMENT = 'CHOOSE_CREATE_APPOINTMENT';
export const chooseCreateAppointment = isCreateAppointmentFormShowing => ({
    type: CHOOSE_CREATE_APPOINTMENT,
    isCreateAppointmentFormShowing
});

export const CHOOSE_EDIT_APPOINTMENT = 'CHOOSE_EDIT_APPOINTMENT';
export const chooseEditAppointment = isEditAppointmentFormShowing => ({
    type: CHOOSE_EDIT_APPOINTMENT,
    isEditAppointmentFormShowing
});

export const LOAD_APPOINTMENT_FORM_DATA = 'LOAD_APPOINTMENT_FORM_DATA';
export const loadAppointmentFormData = loadedAppointmentFormData => ({
    type: LOAD_APPOINTMENT_FORM_DATA,
    loadedAppointmentFormData
});

export const CHOOSE_CREATE_DOCTOR = 'CHOOSE_CREATE_DOCTOR';
export const chooseCreateDoctor = isCreateDoctorFormShowing => ({
    type: CHOOSE_CREATE_DOCTOR,
    isCreateDoctorFormShowing
});

export const CHOOSE_EDIT_DOCTOR = 'CHOOSE_EDIT_DOCTOR';
export const chooseEditDoctor = isEditDoctorFormShowing => ({
    type: CHOOSE_EDIT_DOCTOR,
    isEditDoctorFormShowing
});

export const FETCH_DOCTORS_SUCCESS = 'FETCH_DOCTORS_SUCCESS';
export const fetchDoctorsSuccess = doctors => ({
    type: FETCH_DOCTORS_SUCCESS,
    doctors
});

export const fetchDoctors = patientId => (dispatch, getState) => {
    fetch(`${API_BASE_URL}/api/patients/${patientId}/doctors`,
    {
        method: 'GET',
        headers: {
            authorization: `Bearer ${getState().auth.authToken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(doctors => {
            dispatch(fetchDoctorsSuccess(doctors));
        });
};

export const DELETE_DOCTOR_SUCCESS = 'DELETE_DOCTOR_SUCCESS';
export const deleteDoctorSuccess = deletedDoctor => ({
    type: DELETE_DOCTOR_SUCCESS,
    deletedDoctor
});

export const deleteDoctor = (patientId, doctorId) => (dispatch, getState) => {
    fetch(`${API_BASE_URL}/api/patients/${patientId}/doctors/${doctorId}`,
    {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${getState().auth.authToken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText)
            }
            return 'Doctor successfully deleted!';
        })
        .then(deletedDoctor => {
            dispatch(deleteDoctorSuccess(deletedDoctor))
        });
};

export const LOAD_DOCTOR_FORM_DATA = 'LOAD_DOCTOR_FORM_DATA';
export const loadDoctorFormData = loadedDoctorFormData => ({
    type: LOAD_DOCTOR_FORM_DATA,
    loadedDoctorFormData
});

export const CHOOSE_EDIT_BASIC_PROFILE_INFO = 'CHOOSE_EDIT_BASIC_PROFILE_INFO';
export const chooseEditBasicProfileInfo = isEditBasicProfileInfoFormShowing => ({
    type: CHOOSE_EDIT_BASIC_PROFILE_INFO,
    isEditBasicProfileInfoFormShowing
});

export const EDIT_SELECTED_APPOINTMENT_BY_ID = 'EDIT_SELECTED_APPOINTMENT_BY_ID';
export const editSelectedAppointmentById = selectedAppointmentToEdit => ({
    type: EDIT_SELECTED_APPOINTMENT_BY_ID,
    selectedAppointmentToEdit
});

export const TOGGLE_APPOINTMENT_MENU = 'TOGGLE_APPOINTMENT_MENU';
export const toggleAppointmentMenu = isAppointmentMenuShowing => ({
    type: TOGGLE_APPOINTMENT_MENU,
    isAppointmentMenuShowing
});

export const TOGGLE_DOCTOR_MENU = 'TOGGLE_DOCTOR_MENU';
export const toggleDoctorMenu = isDoctorMenuShowing => ({
    type: TOGGLE_DOCTOR_MENU,
    isDoctorMenuShowing
});

export const EDIT_SELECTED_DOCTOR_BY_ID = 'EDIT_SELECTED_DOCTOR_BY_ID';
export const editSelectedDoctorById = selectedDoctorToEdit => ({
    type: EDIT_SELECTED_DOCTOR_BY_ID,
    selectedDoctorToEdit
});

export const DOCTOR_MENU_BY_DOCTOR_ID = 'DOCTOR_MENU_ID';
export const doctorMenuByDoctorId = doctorMenu => ({
    type: DOCTOR_MENU_BY_DOCTOR_ID,
    doctorMenu
});

export const FORM_MESSAGE = 'FORM_MESSAGE';
export const formMessage = isMessageShowing => ({
    type: FORM_MESSAGE,
    isMessageShowing
});


