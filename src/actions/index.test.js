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
    chooseEditAppointment,
    LOAD_APPOINTMENT_FORM_DATA,
    loadAppointmentFormData,
    CHOOSE_CREATE_DOCTOR,
    chooseCreateDoctor,
    CHOOSE_EDIT_DOCTOR,
    chooseEditDoctor,
    FETCH_DOCTORS_SUCCESS,
    fetchDoctorsSuccess,
    fetchDoctors,
    DELETE_DOCTOR_SUCCESS,
    deleteDoctorSuccess,
    deleteDoctor,
    LOAD_DOCTOR_FORM_DATA,
    loadDoctorFormData,
    CHOOSE_EDIT_BASIC_PROFILE_INFO,
    chooseEditBasicProfileInfo,
    EDIT_SELECTED_APPOINTMENT_BY_ID,
    editSelectedAppointmentById,
    TOGGLE_DOCTOR_MENU,
    toggleDoctorMenu,
    EDIT_SELECTED_DOCTOR_BY_ID,
    editSelectedDoctorById,
    SUCCESS_ERROR_MESSAGE,
    successErrorMessage,
    updateDoctorSuccess,
    UPDATE_DOCTOR_SUCCESS,
    CREATE_APPOINTMENT_SUCCESS,
    createAppointmentSuccess,
    CREATE_DOCTOR_SUCCESS,
    createDoctorSuccess,
    TOGGLE_DOCTOR_LIST,
    toggleDoctorList,
    TOGGLE_APPOINTMENT_LIST,
    toggleAppointmentList,
    UPDATE_BASIC_PROFILE_INFO_SUCCESS,
    updateBasicProfileInfoSuccess,
    LOADING,
    loading
} from './index';
import {API_BASE_URL} from '../config';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
    };
    const next = jest.fn();
    const invoke = (action => thunk(store)(next)(action));
    return {store, next, invoke};
};

describe('selectLabResultsById', () => {
    it('Should return the action', () => {
        const labResults = [
            {
                _id: '8s403j758164392856438296',
                hematology: {
                    wbcCount: 5.41,
                    hemoglobin: 10.2,
                    plateletCount: 201
                },
                chemistry: {
                    sodium: 133,
                    potassium: 4.7,
                    calcium: 10.2
                }
            },
            {
                _id: '8s403j748164392856438296',
                hematology: {
                    wbcCount: 5.32,
                    hemoglobin: 10.5,
                    plateletCount: 193
                },
                chemistry: {
                    sodium: 143,
                    potassium: 4.9,
                    calcium: 10.1
                }
            }
    ];
        const action = selectLabResultsById(labResults);
        expect(action.type).toEqual(SELECT_LAB_RESULTS_BY_ID);
        expect(action.labResults).toEqual(labResults);
    });
});

describe('toggleSidebar', () => {
    it('Should return the action', () => {
        const isSidebarShowing = true;

        const action = toggleSidebar(isSidebarShowing);
        expect(action.type).toEqual(TOGGLE_SIDEBAR);
        expect(action.isSidebarShowing).toEqual(isSidebarShowing);
    });
});

describe('fetchLabResultsSuccess', () => {
    it('Should return the action', () => {
        const labResults = [
            {
                _id: '8s403j758164392856439196',
                hematology: {
                    wbcCount: 5.41,
                    hemoglobin: 10.2,
                    plateletCount: 201
                },
                chemistry: {
                    sodium: 133,
                    potassium: 4.7,
                    calcium: 10.2
                }
            },
            {
                _id: '8s403j538164392856438296',
                hematology: {
                    wbcCount: 5.32,
                    hemoglobin: 10.5,
                    plateletCount: 193
                },
                chemistry: {
                    sodium: 143,
                    potassium: 4.9,
                    calcium: 10.1
                }
            }
        ];

        const action = fetchLabResultsSuccess(labResults);
        expect(action.type).toEqual(FETCH_LAB_RESULTS_SUCCESS);
        expect(action.labResults).toEqual(labResults);
    });
});

describe('fetchLabResults', () => {
    
    it('Should dispatch fetchLabResultsSuccess', () => {
        const labResults = [
            {
                _id: '8s013j758164392856438296',
                patient: '9g8391028366382819382810',
                hematology: {
                    wbcCount: 5.46,
                    hemoglobin: 10.7,
                    plateletCount: 164
                },
                chemistry: {
                    sodium: 121,
                    potassium: 4.2,
                    calcium: 10.5
                }
            },
            {
                _id: '2k750285f748392088143865',
                patient: '9g8391028366382819382810',
                hematology: {
                    wbcCount: 5.33,
                    hemoglobin: 10.7,
                    plateletCount: 199
                },
                chemistry: {
                    sodium: 141,
                    potassium: 4.4,
                    calcium: 10.6
                }
            }
        ];

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return labResults;
                }
            })
        );

        const store = mockStore({auth: {authToken: 'test'}});
        return store.dispatch(fetchLabResults(1)).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/patients/1/lab-results`, {"headers": {"authorization": "Bearer test"}, "method": "GET"});
        });
    });
});

describe('fetchProfileInfoSuccess', () => {
    it('Should return the action', () => {
        const profile = {
            address: {
                street: '456 International Drive',
                city: 'Jacksonville',
                state: 'FL',
                zipCode: 39199
            },
            appointments: [],
            doctors: [],
            dateOfBirth: '1965-05-12T04:00:00.000Z',
            name: {
                firstName: 'Jason',
                lastName: 'Merriman'
            },
            phoneNumbers: {
                home: '904-223-5455',
                cell: '904-423-8573',
                work: null
            },
            sex: 'Male',
            socialSecurityNumber: '987654321',
            treatmentDays: 'Tue/Thu/Sat',
            treatmentTime: '11:30 a.m.'
        };
        const action = fetchProfileInfoSuccess(profile);
        expect(action.type).toEqual(FETCH_PROFILE_INFO_SUCCESS);
        expect(action.profile).toEqual(profile);
    });
});

describe('fetchProfileInfo', () => {
    it('Should dispatch fetchProfileInfoSuccess', () => {
        const profile = {
            address: {
                street: '456 International Drive',
                city: 'Jacksonville',
                state: 'FL',
                zipCode: 39199
            },
            appointments: [],
            doctors: [],
            dateOfBirth: '1965-05-12T04:00:00.000Z',
            name: {
                firstName: 'Jason',
                lastName: 'Merriman'
            },
            phoneNumbers: {
                home: '904-223-5455',
                cell: '904-423-8573',
                work: null
            },
            sex: 'Male',
            socialSecurityNumber: '987654321',
            treatmentDays: 'Tue/Thu/Sat',
            treatmentTime: '11:30 a.m.'
        };

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return profile;
                }
            })
        );

        const store = mockStore({auth: {authToken: 'test'}});
        return store.dispatch(fetchProfileInfo(1)).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/patients/1`, {"headers": {"authorization": "Bearer test"}, "method": "GET"});
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
            socialSecurityNumber: '324532124',
            phoneNumbers: {
                cell: '904-123-4928',
                home: '904-858-3232',
                work: '904-543-2341'
            }
        };

        const action = loadBasicProfileInfoFormData(loadedBasicProfileInfoFormData);
        expect(action.type).toEqual(LOAD_BASIC_PROFILE_INFO_FORM_DATA);
        expect(action.loadedBasicProfileInfoFormData).toEqual(loadedBasicProfileInfoFormData);
    });
});

describe('toggleLabResultsInfo', () => {
    it('Should return the action', () => {
        const isLabResultsInfoShowing = true;

        const action = toggleLabResultsInfo(isLabResultsInfoShowing);
        expect(action.type).toEqual(TOGGLE_LAB_RESULTS_INFO);
        expect(action.isLabResultsInfoShowing).toEqual(isLabResultsInfoShowing);
    });
});

describe('toggleUserInfo', () => {
    it('Should return the action', () => {
        const isUserInfoShowing = true;

        const action = toggleUserInfo(isUserInfoShowing);
        expect(action.type).toEqual(TOGGLE_USER_INFO);
        expect(action.isUserInfoShowing).toEqual(isUserInfoShowing);
    });
});

describe('toggleSublinks', () => {
    it('Should return the action', () => {
        const areSublinksShowing = true;

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
        const appointments = [
            {
                address: {
                    street: '67 West Lakeside Dr',
                    city: 'Jacksonville',
                    state: 'FL',
                    zipCode: 35840
                },
                date: '2019-01-023T05:00:00.000Z',
                description: 'Access evaluation',
                patient: '753848fhru57db47gh443828',
                phoneNumber: '904-943-2942',
                time: '2:15 p.m.',
                title: 'MD',
                where: 'Vascular Access Center',
                with: 'Madison Akihiko',
                _id: '8f85769f7465928374593018',
            },
            {
                address: {
                    street: '94 Park Street',
                    city: 'Jacksonville',
                    state: 'FL',
                    zipCode: 35832
                },
                date: '2019-05-018T05:00:00.000Z',
                description: 'Yearly physical',
                patient: '753848fhru57db47gh443828',
                phoneNumber: '904-932-8374',
                time: '10:15 a.m.',
                title: 'MD',
                where: 'St. Vincent\'s Medical Center',
                with: 'Mark Cuban',
                _id: '8f85769f7465928374593987',
            }
        ];

        const action = fetchAppointmentsSuccess(appointments);
        expect(action.type).toEqual(FETCH_APPOINTMENTS_SUCCESS);
        expect(action.appointments).toEqual(appointments);
    });
});

describe('fetchAppointments', () => {
    it('Should dispatch fetchAppointmentsSuccess', () => {
        const appointments = [
            {
                address: {
                    street: '67 West Lakeside Dr',
                    city: 'Jacksonville',
                    state: 'FL',
                    zipCode: 35840
                },
                date: '2019-01-023T05:00:00.000Z',
                description: 'Access evaluation',
                patient: '753848fhru57db47gh443828',
                phoneNumber: '904-943-2942',
                time: '2:15 p.m.',
                title: 'MD',
                where: 'Vascular Access Center',
                with: 'Madison Akihiko',
                _id: '8f85769f7465928374593018',
            },
            {
                address: {
                    street: '94 Park Street',
                    city: 'Jacksonville',
                    state: 'FL',
                    zipCode: 35832
                },
                date: '2019-05-018T05:00:00.000Z',
                description: 'Yearly physical',
                patient: '753848fhru57db47gh443828',
                phoneNumber: '904-932-8374',
                time: '10:15 a.m.',
                title: 'MD',
                where: 'St. Vincent\'s Medical Center',
                with: 'Mark Cuban',
                _id: '8f85769f7465928374593987',
            }
        ];

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return appointments;
                }
            })
        );

        const store = mockStore({auth: {authToken: 'test'}});
        return store.dispatch(fetchAppointments(1)).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/patients/1/appointments`, {"headers": {"authorization": "Bearer test"}, "method": "GET"});
        });
    });
});

describe('deleteAppointmentSuccess', () => {
    it('Should return the action', () => {
        const deletedAppointment = {
            successMessage: 'Appointment successfully deleted!',
            _id: '8g75648f6374850182649775'
        };

        const action = deleteAppointmentSuccess(deletedAppointment);
        expect(action.type).toEqual(DELETE_APPOINTMENT_SUCCESS);
        expect(action.deletedAppointment).toEqual(deletedAppointment);
    });
});

describe('deleteAppointment', () => {
    it('Should dispatch deleteAppointmentSuccess', () => {
        const deletedAppointment = {
            successMessage: 'Appointment successfully deleted!',
            _id: '8g75648f6374850182649775'
        };

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return deletedAppointment;
                }
            })
        );

        const store = mockStore({auth: {authToken: 'test'}});
        return store.dispatch(deleteAppointment(1, 1)).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/patients/1/appointments/1`, {"headers": {"authorization": "Bearer test"}, "method": "DELETE"});
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
                title: 'MD',
                patient: '9g8391028366382819382810'
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
                title: 'MD',
                patient: '9g8391028366382819382810'
            }
        ];
        const action = selectAppointmentsById(selectedAppointments);
        expect(action.type).toEqual(SELECT_APPOINTMENTS_BY_ID);
        expect(action.selectedAppointments).toEqual(selectedAppointments);
    });
});

describe('toggleAppointmentInfo', () => {
    it('Should return the action', () => {
        const isAppointmentInfoShowing = true;

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
        const isCreateAppointmentFormShowing = true;

        const action = chooseCreateAppointment(isCreateAppointmentFormShowing);
        expect(action.type).toEqual(CHOOSE_CREATE_APPOINTMENT);
        expect(action.isCreateAppointmentFormShowing).toEqual(isCreateAppointmentFormShowing);
    });
});

describe('chooseEditAppointment', () => {
    it('Should return the action', () => {
        const isEditAppointmentFormShowing = true;

        const action = chooseEditAppointment(isEditAppointmentFormShowing);
        expect(action.type).toEqual(CHOOSE_EDIT_APPOINTMENT);
        expect(action.isEditAppointmentFormShowing).toEqual(isEditAppointmentFormShowing);
    });
});

describe('loadAppointmentFormData', () => {
    it('Should return the action', () => {
        const loadedAppointmentFormData = {
            _id: '6d839271h46f893jd66f890v',
            address: {
                street: '123 International Drive',
                city: 'Jacksonville',
                state: 'FL',
                zipCode: 23212
            },
            description: 'Yearly exam',
            time: '10:30 a.m.',
            patient: '9g8391028366382819382810'
        };

        const action = loadAppointmentFormData(loadedAppointmentFormData);
        expect(action.type).toEqual(LOAD_APPOINTMENT_FORM_DATA);
        expect(action.loadedAppointmentFormData).toEqual(loadedAppointmentFormData);
    });
});

describe('chooseCreateDoctor', () => {
    it('Should return the action', () => {
        const isCreateDoctorFormShowing = true;

        const action = chooseCreateDoctor(isCreateDoctorFormShowing);
        expect(action.type).toEqual(CHOOSE_CREATE_DOCTOR);
        expect(action.isCreateDoctorFormShowing).toEqual(isCreateDoctorFormShowing);;
    });
});

describe('chooseEditDoctor', () => {
    it('Should return the action', () => {
        const isEditDoctorFormShowing = true;

        const action = chooseEditDoctor(isEditDoctorFormShowing);
        expect(action.type).toEqual(CHOOSE_EDIT_DOCTOR);
        expect(action.isEditDoctorFormShowing).toEqual(isEditDoctorFormShowing);;
    });
});

describe('fetchDoctorsSuccess', () => {
    it('Should return the action', () => {
        const doctors = [
            {
                _id: '2k750285f928392088143865',
                address: {
                    street: '193 South Lady Mary Drive',
                    city: 'Jacksonville',
                    state: 'FL',
                    zipCode: 39321
                },
                company: 'Mayo Clinic',
                faxNumber: '904-948-8211',
                name: {
                    firstName: 'Mark',
                    lastName: 'Eaton'
                },
                patients: ['9g8391028366382819382810'],
                phoneNumber: '904-948-9010',
                practice: 'Oncology'
            },
            {
                _id: '2k750285f748392088149165',
                address: {
                    street: '21 East Bay Street',
                    city: 'Jacksonville',
                    state: 'FL',
                    zipCode: 39012
                },
                company: 'Mayo Clinic',
                faxNumber: '904-948-8211',
                name: {
                    firstName: 'Barbara',
                    lastName: 'Winters'
                },
                patients: ['9g8391028366382819382810'],
                phoneNumber: '904-948-9010',
                practice: 'Hematology'
            }
        ];

        const action = fetchDoctorsSuccess(doctors);
        expect(action.type).toEqual(FETCH_DOCTORS_SUCCESS);
        expect(action.doctors).toEqual(doctors);
    });
});

describe('fetchDoctors', () => {
    it('Should dispatch fetchDoctorsSuccess', () => {
        const doctors = [];

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return doctors;
                }
            })
        );

        const store = mockStore({auth: {authToken: 'test'}});
        return store.dispatch(fetchDoctors(1)).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/patients/1/doctors`, {"headers": {"authorization": "Bearer test"}, "method": "GET"});
        });
    });
});

describe('deleteDoctorSuccess', () => {
    it('Should return the action', () => {
        const deletedDoctor = {};

        const action = deleteDoctorSuccess(deletedDoctor);
        expect(action.type).toEqual(DELETE_DOCTOR_SUCCESS);
        expect(action.deletedDoctor).toEqual(deletedDoctor);
    });
});

describe('deleteDoctor', () => {
    it('Should dispatch deleteDoctorSuccess', () => {
        const deletedDoctor = {};

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return deletedDoctor;
                }
            })
        );

        const store = mockStore({auth: {authToken: 'test'}});
        return store.dispatch(deleteDoctor(1, 1)).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/patients/1/doctors/1`, {"headers": {"authorization": "Bearer test"}, "method": "DELETE"});
        });
    });
});

describe('loadDoctorFormData', () => {
    it('Should return the action', () => {
        const loadedDoctorFormData = {};

        const action = loadDoctorFormData(loadedDoctorFormData);

        expect(action.type).toEqual(LOAD_DOCTOR_FORM_DATA);
        expect(action.loadedDoctorFormData).toEqual(loadedDoctorFormData);
    });
});

describe('chooseEditBasicProfileInfo', () => {
    it('Should return the action', () => {
        const isEditBasicProfileInfoFormShowing = true;

        const action = chooseEditBasicProfileInfo(isEditBasicProfileInfoFormShowing);

        expect(action.type).toEqual(CHOOSE_EDIT_BASIC_PROFILE_INFO);
        expect(action.isEditBasicProfileInfoFormShowing).toEqual(isEditBasicProfileInfoFormShowing);
    });
});

describe('editSelectedAppointmentById', () => {
    it('Should return the action', () => {
        const selectedAppointmentToEdit = {};

        const action = editSelectedAppointmentById(selectedAppointmentToEdit);

        expect(action.type).toEqual(EDIT_SELECTED_APPOINTMENT_BY_ID);
        expect(action.selectedAppointmentToEdit).toEqual(selectedAppointmentToEdit);
    });
});

describe('toggleDoctorMenu', () => {
    it('Should return the action', () => {
        const isDoctorMenuShowing = true;

        const action = toggleDoctorMenu(isDoctorMenuShowing);

        expect(action.type).toEqual(TOGGLE_DOCTOR_MENU);
        expect(action.isDoctorMenuShowing).toEqual(isDoctorMenuShowing);
    });
});

describe('editSelectedDoctorById', () => {
    it('Should return the action', () => {
        const selectedDoctorToEdit = {};

        const action = editSelectedDoctorById(selectedDoctorToEdit);

        expect(action.type).toEqual(EDIT_SELECTED_DOCTOR_BY_ID);
        expect(action.selectedDoctorToEdit).toEqual(selectedDoctorToEdit);
    });
});

describe('successErrorMessage', () => {
    it('Should return the action', () => {
        const isMessageShowing = true;

        const action = successErrorMessage(isMessageShowing);

        expect(action.type).toEqual(SUCCESS_ERROR_MESSAGE);
        expect(action.isMessageShowing).toEqual(isMessageShowing);
    });
});

describe('updateDoctorSuccess', () => {
    it('Should return the action', () => {
        const updatedDoctor = {};

        const action = updateDoctorSuccess(updatedDoctor);

        expect(action.type).toEqual(UPDATE_DOCTOR_SUCCESS);
        expect(action.updatedDoctor).toEqual(updatedDoctor);
    });
});

describe('createAppointmentSuccess', () => {
    it('Should return the action', () => {
        const createdAppointment = {};

        const action = createAppointmentSuccess(createdAppointment);

        expect(action.type).toEqual(CREATE_APPOINTMENT_SUCCESS);
        expect(action.createdAppointment).toEqual(createdAppointment);
    });
});

describe('createDoctorSuccess', () => {
    it('Should return the action', () => {
        const createdDoctor = {};

        const action = createDoctorSuccess(createdDoctor);
        
        expect(action.type).toEqual(CREATE_DOCTOR_SUCCESS);
        expect(action.createdDoctor).toEqual(createdDoctor);
    });
});

describe('toggleDoctorList', () => {
    it('Should return the action', () => {
        const action = toggleDoctorList();

        expect(action.type).toEqual(TOGGLE_DOCTOR_LIST);
    });
});

describe('toggleAppointmentList', () => {
    it('Should return the action', () => {
        const action = toggleAppointmentList();

        expect(action.type).toEqual(TOGGLE_APPOINTMENT_LIST);
    });
});

describe('updateBasicProfileInfoSuccess', () => {
    it('Should return the action', () => {
        const updatedBasicProfileInfo = {
            address: {
                street: '91 Colonial Drive',
                city: 'Orange Park',
                state: 'FL',
                zipCode: 39281
            },
            appointments: [],
            doctors: [],
            dateOfBirth: '1965-05-12T04:00:00.000Z',
            name: {
                firstName: 'Jason',
                lastName: 'Merriman'
            },
            phoneNumbers: {
                home: '904-223-5455',
                cell: '904-423-8573',
                work: null
            },
            sex: 'Male',
            socialSecurityNumber: '987654321',
            treatmentDays: 'Tue/Thu/Sat',
            treatmentTime: '11:30 a.m.'
        };

        const action = updateBasicProfileInfoSuccess(updatedBasicProfileInfo);

        expect(action.type).toEqual(UPDATE_BASIC_PROFILE_INFO_SUCCESS);
        expect(action.updatedBasicProfileInfo).toEqual(updatedBasicProfileInfo);
    });
});

describe('loading', () => {
    it('Should return the action', () => {
        const isLoading = false;

        const action = loading(isLoading);

        expect(action.type).toEqual(LOADING);
        expect(action.isLoading).toEqual(isLoading);
    });
});

















