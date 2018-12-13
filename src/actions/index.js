import {API_BASE_URL} from '../config';

export const CHOOSE_LAB_RESULTS_DATE = 'CHOOSE_LAB_RESULTS_DATE';
export const chooseLabResultsDate = date => ({
    type: CHOOSE_LAB_RESULTS_DATE,
    date
});

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const toggleSidebar = toggle => ({
    type: TOGGLE_SIDEBAR,
    toggle
})

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

export const fetchLabResults = patientId => dispatch => {
    fetch(`${API_BASE_URL}/patients/${patientId}/lab-results`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(labResults => {
            dispatch(fetchLabResultsSuccess(labResults));
        })
}

export const FETCH_PROFILE_INFO_SUCCESS = 'FETCH_PROFILE_INFO_SUCCESS';
export const fetchProfileInfoSuccess = profile => ({
    type: FETCH_PROFILE_INFO_SUCCESS,
    profile
});

export const fetchProfileInfo = patientId => dispatch => {
    fetch(`${API_BASE_URL}/patients/${patientId}/profile`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(profile => {
            dispatch(fetchProfileInfoSuccess(profile));
        })
}


