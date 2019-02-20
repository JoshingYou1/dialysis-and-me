import {
    SELECT_LAB_RESULTS_BY_ID,
    selectLabResultsById,
    TOGGLE_SIDEBAR,
    toggleSidebar,
    FETCH_LAB_RESULTS_SUCCESS,
    fetchLabResultsSuccess,
    fetchLabResults,
    FETCH_PROFILE_INFO_SUCCESS,
    fetchProfileInfoSuccess,
    fetchProfileInfo,
    LOAD_BASIC_PROFILE_INFO_FORM_DATA,
    loadBasicProfileInfoFormData,
    TOGGLE_LAB_RESULTS_INFO,
    toggleLabResultsInfo,
    TOGGLE_USER_INFO,
    toggleUserInfo,
    TOGGLE_SUBLINKS,
    toggleSublinks,
    SELECT_PROFILE_INFO_SECTION,
    selectProfileInfoSection,
    FETCH_APPOINTMENTS_SUCCESS,
    fetchAppointmentsSuccess,
    fetchAppointments,
    DELETE_APPOINTMENT_SUCCESS,
    deleteAppointmentSuccess,
    deleteAppointment,
    SELECT_APPOINTMENTS_BY_ID,
    selectAppointmentsById,
    TOGGLE_APPOINTMENT_INFO,
    toggleAppointmentInfo,
    UPDATE_CURRENT_DOCTOR,
    updateCurrentDoctor,
    CHOOSE_CREATE_APPOINTMENT,
    chooseCreateAppointment,
    CHOOSE_EDIT_APPOINTMENT,
    chooseEditAppointment
} from './index';
import {API_BASE_URL} from '../config';

describe('selectLabResultsById', () => {
    it('Should return the action', () => {
        const labResults = [{
            hematology: {
                wbcCount: 5.41,
                hemoglobin: 10.2,
                plateletCount: 201
            },
            chemistry: {
                sodium: 133,
                potassium: 4.7,
                calcium: 10.2,
            }
        }];
        const action = selectLabResultsById(labResults);
        expect(action.type).toEqual(SELECT_LAB_RESULTS_BY_ID);
        expect(action.labResults).toEqual(labResults);
    });
});

describe('toggleSidebar', () => {
    it('Should return the action', () => {
        const isSidebarShowing = false;

        const action = toggleSidebar(isSidebarShowing);
        expect(action.type).toEqual(TOGGLE_SIDEBAR);
        expect(action.isSidebarShowing).toEqual(isSidebarShowing);
    });
});

describe('fetchLabResultsSuccess', () => {
    it('Should return the action', () => {
        const labResults = [];

        const action = fetchLabResultsSuccess(labResults);
        expect(action.type).toEqual(FETCH_LAB_RESULTS_SUCCESS);
        expect(action.labResults).toEqual(labResults);
    });
});

describe('fetchLabResults', () => {
    it('Should dispatch fetchLabResultsSuccess', () => {
        const labResults = [];

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return labResults;
                }
            })
        );

        const dispatch = jest.fn();
        return fetchLabResults()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/patients/${patientId}/lab-results`);
            expect(dispatch).toHaveBeenCalledWith(fetchLabResultsSuccess(labResults));
        });
    });
});

describe('fetchProfileInfoSuccess', () => {
    it('Should return the action', () => {
        const profile = [];
        const action = fetchProfileInfoSuccess(profile);
        expect(action.type).toEqual(FETCH_PROFILE_INFO_SUCCESS);
        expect(action.profile).toEqual(profile);
    });
});

describe('fetchProfileInfo', () => {
    it('Should dispatch fetchProfileInfoSuccess', () => {
        const profile = [];

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return profile;
                }
            })
        );

        const dispatch = jest.fn();
        return fetchProfileInfo()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/patients/${patientId}`);
            expect(dispatch).toHaveBeenCalledWith(fetchProfileInfoSuccess(profile));
        });
    });
});

describe('loadBasicProfileInfoFormData', () => {
    it('Should return the action', () => {
        const loadedBasicProfileInfoFormData = {
            name: {
                firstName: 'Joshua',
                lastName: 'Jackson'
            },
            sex: 'Male',
            socialSecurityNumber: '324-53-2124'
        };

        const action = loadBasicProfileInfoFormData(loadedBasicProfileInfoFormData);
        expect(action.type).toEqual(LOAD_BASIC_PROFILE_INFO_FORM_DATA);
        expect(action.loadedBasicProfileInfoFormData).toEqual(loadedBasicProfileInfoFormData);
    });
});

describe('toggleLabResultsInfo', () => {
    it('Should return the action', () => {
        const isLabResultsInfoShowing = false;

        const action = toggleLabResultsInfo(isLabResultsInfoShowing);
        expect(action.type).toEqual(TOGGLE_LAB_RESULTS_INFO);
        expect(action.isLabResultsInfoShowing).toEqual(isLabResultsInfoShowing);
    });
});

describe('toggleUserInfo', () => {
    it('Should return the action', () => {
        const isUserInfoShowing = false;

        const action = toggleUserInfo(isUserInfoShowing);
        expect(action.type).toEqual(TOGGLE_USER_INFO);
        expect(action.isUserInfoShowing).toEqual(isUserInfoShowing);
    });
});

describe('toggleSublinks', () => {
    it('Should return the action', () => {
        const areSublinksShowing = false;

        const action = toggleSublinks(areSublinksShowing);
        expect(action.type).toEqual(TOGGLE_SUBLINKS);
        expect(action.areSublinksShowing).toEqual(areSublinksShowing);
    });
});

describe('selectProfileInfoSection', () => {
    it('Should return the action', () => {
        const section = 2;

        const action = selectProfileInfoSection(section);
        expect(action.type).toEqual(SELECT_PROFILE_INFO_SECTION);
        expect(action.section).toEqual(section);
    });
});

describe('fetchAppointmentsSuccess', () => {
    it('Should return the action', () => {
        const appointments = [];

        const action = fetchAppointmentsSuccess(appointments);
        expect(action.type).toEqual(FETCH_APPOINTMENTS_SUCCESS);
        expect(action.appointments).toEqual(appointments);
    });
});

describe('fetchAppointments', () => {
    it('Should dispatch fetchAppointmentsSuccess', () => {
        const appointments = [];

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return appointments;
                }
            })
        );

        const dispatch = jest.fn();
        return fetchAppointments()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/patients/${patientId}/appointments`);
            expect(dispatch).toHaveBeenCalledWith(fetchAppointmentsSuccess(appointments));
        });
    });
});

describe('deleteAppointmentSuccess', () => {
    it('Should return the action', () => {
        const deletedAppointment = [];

        const action = deleteAppointmentSuccess(deletedAppointment);
        expect(action.type).toEqual(DELETE_APPOINTMENT_SUCCESS);
        expect(action.deletedAppointment).toEqual(deletedAppointment);
    });
});

describe('deleteAppointment', () => {
    it('Should dispatch deleteAppointmentSuccess', () => {
        const deletedAppointment = [];

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return deletedAppointment;
                }
            })
        );

        const dispatch = jest.fn();
        return deleteAppointment()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/patients/${patientId}/appointments/${appointmentId}`);
            expect(dispatch).toHaveBeenCalledWith(deleteAppointmentSuccess(deletedAppointment));
        });
    });
});

describe('selectAppointmentsById', () => {
    it('Should return the action', () => {
        const selectedAppointments = [
            {
                address: {
                    street: '123 Memorial Drive',
                    city: 'Jacksonville',
                    state: 'FL',
                    zipCode: 39492
                },
                description: 'Annual check up',
                with: 'Amare Stoudemire',
                title: 'MD'
            },
            {
                address: {
                    street: '456 Memorial Drive',
                    city: 'Jacksonville',
                    state: 'FL',
                    zipCode: 53433
                },
                description: 'Shortness of breath',
                with: 'Ashley Simpson',
                title: 'MD'
            }
        ];
        const action = selectAppointmentsById(selectedAppointments);
        expect(action.type).toEqual(SELECT_APPOINTMENTS_BY_ID);
        expect(action.selectedAppointments).toEqual(selectedAppointments);
    });
});

describe('toggleAppointmentInfo', () => {
    it('Should return the action', () => {
        const isAppointmentInfoShowing = false;

        const action = toggleAppointmentInfo(isAppointmentInfoShowing);
        expect(action.type).toEqual(TOGGLE_APPOINTMENT_INFO);
        expect(action.isAppointmentInfoShowing).toEqual(isAppointmentInfoShowing);
    });
});

describe('updateCurrentDoctor', () => {
    it('Should return the action', () => {
        const doctor = 0;

        const action = updateCurrentDoctor(doctor);
        expect(action.type).toEqual(UPDATE_CURRENT_DOCTOR);
        expect(action.doctor).toEqual(doctor);
    });
});

describe('chooseCreateAppointment', () => {
    it('Should return the action', () => {
        const isCreateAppointmentFormShowing = false;

        const action = chooseCreateAppointment(isCreateAppointmentFormShowing);
        expect(action.type).toEqual(CHOOSE_CREATE_APPOINTMENT);
        expect(action.isCreateAppointmentFormShowing).toEqual(isCreateAppointmentFormShowing);
    });
});

describe('chooseEditAppointment', () => {
    it('Should return the action', () => {
        const isEditAppointmentFormShowing = false;

        const action = chooseEditAppointment(isEditAppointmentFormShowing);
        expect(action.type).toEqual(CHOOSE_EDIT_APPOINTMENT);
        expect(action.isEditAppointmentFormShowing).toEqual(isEditAppointmentFormShowing);
    });
});



