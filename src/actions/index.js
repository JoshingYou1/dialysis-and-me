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

export const CHOOSE_APPOINTMENT_MONTH = 'CHOOSE_APPOINTMENT_MONTH';
export const chooseAppointmentMonth = month => ({
    type: CHOOSE_APPOINTMENT_MONTH,
    month
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
            console.log('labResults', labResults);
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
            console.log('profile', profile);
            dispatch(fetchProfileInfoSuccess(profile));
        });
};

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
            console.log('appointments', appointments);
            dispatch(fetchAppointmentsSuccess(appointments));
        });
};

export const CREATE_APPOINTMENT_SUCCESS = 'CREATE_APPOINTMENT_SUCCESS';
export const createAppointmentSuccess = createdAppointment => ({
    type: CREATE_APPOINTMENT_SUCCESS,
    createdAppointment
});

export const createAppointment = (patientId, appointmentId) => (dispatch, getState) => {
    fetch(`${API_BASE_URL}/api/patients/${patientId}/appointments/${appointmentId}`,
    {
        method: 'POST',
        headers: {
            authorization: `Bearer ${getState().auth.authToken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText)
            }
            return res.json();
        })
        .then(createdAppointment => {
            dispatch(createAppointmentSuccess(createdAppointment));
        });
};

export const UPDATE_APPOINTMENT_SUCCESS = 'UPDATE_APPOINTMENT_SUCCESS';
export const updateAppointmentSuccess = updatedAppointment => ({
    type: UPDATE_APPOINTMENT_SUCCESS,
    updatedAppointment
});

export const updateAppointment = (patientId, appointmentId) => (dispatch, getState) => {
    fetch(`${API_BASE_URL}/api/patients/${patientId}/appointments/${appointmentId}`,
    {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${getState().auth.authToken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText)
            }
            return res.json();
        })
        .then(updatedAppointment => {
            dispatch(updateAppointmentSuccess(updatedAppointment));
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
            return res.json();
        })
        .then(deletedAppointment => {
            dispatch(deleteAppointmentSuccess(deletedAppointment));
        });
};

export const SELECT_APPOINTMENT_BY_ID = 'SELECT_APPOINTMENT_BY_ID';
export const selectAppointmentById = appointments => ({
    type: SELECT_APPOINTMENT_BY_ID,
    appointments
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
export const loadAppointmentFormData = loadAppointmentFormData => ({
    type: LOAD_APPOINTMENT_FORM_DATA,
    loadAppointmentFormData
});


