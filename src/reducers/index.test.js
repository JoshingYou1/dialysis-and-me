import {appReducer} from './index';
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
    TRIGGER_ANIMATION,
    selectLabResultsById
} from '../actions/index';

describe('appReducer', () => {
    const selectedLabResult = {
        _id: '5c9067ab7a373130a877fbf6',
        patient: '5c9067ab7a373130a893ybec',
        date: '2017-05-23T04:00:00.000Z',
        chemistry: {
            albumin: 4.9,
            bun: 63,
            calcium: 10.1,
            cholesterol: 198
        },
        hematology: {
            hematocrit: 33.2,
            hemoglobin: 10.9,
            plateletCount: 207
        }
    };
    const isSidebarShowing = false;
    const labResults = [
        {
            _id: '5c9067ab7a373130a877fbf6',
            patient: '5c9067ab7a373130a893ybec',
            date: '2017-05-23T04:00:00.000Z',
            chemistry: {
                albumin: 4.9,
                bun: 63,
                calcium: 10.1,
                cholesterol: 198
            },
            hematology: {
                hematocrit: 33.2,
                hemoglobin: 10.9,
                plateletCount: 207
            }
        },
        {
            _id: '5c9067ab7a373130a877fbf7',
            patient: '5c9067ab7a373130a893ybec',
            date: '2017-05-10T04:00:00.000Z',
            chemistry: {
                albumin: 5.9,
                bun: 42,
                calcium: 11.2,
                cholesterol: 201
            },
            hematology: {
                hematocrit: 33.9,
                hemoglobin: 11.3,
                plateletCount: 157
            }
        }
    ];
    const profile = {
        _id: '5c9067ab7a373130a893ybec',
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
    const isLabResultsInfoShowing = false;
    const isUserInfoShowing = false;
    const areSublinksShowing = false;
    const section = 0;
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
            patient: '5c9067ab7a373130a893ybec',
            phoneNumber: '904-943-2942',
            time: '2:15 p.m.',
            title: 'MD',
            where: 'Vascular Access Center',
            with: 'Madison Akihiko',
            _id: '8f85769f7465928374593018'
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
            patient: '753848fhru57db47gh713828',
            phoneNumber: '904-932-8374',
            time: '10:15 a.m.',
            title: 'MD',
            where: 'St. Vincent\'s Medical Center',
            with: 'Mark Cuban',
            _id: '8f85769f7465928374593987'
        }
    ];
    const isAppointmentInfoShowing = false;
    const selectedAppointments = [
        {
            address: {
                street: '67 West Lakeside Dr',
                city: 'Jacksonville',
                state: 'FL',
                zipCode: 35840
            },
            date: '2019-01-023T05:00:00.000Z',
            description: 'Access evaluation',
            patient: '5c9067ab7a373130a893ybec',
            phoneNumber: '904-943-2942',
            time: '2:15 p.m.',
            title: 'MD',
            where: 'Vascular Access Center',
            with: 'Madison Akihiko',
            _id: '8f85769f7465928374593018'
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
            patient: '5c9067ab7a373130a893ybec',
            phoneNumber: '904-932-8374',
            time: '10:15 a.m.',
            title: 'MD',
            where: 'St. Vincent\'s Medical Center',
            with: 'Mark Cuban',
            _id: '8f85769f7465928374593987'
        }
    ];
    const currentDoctor = 0;
    const isCreateAppointmentFormShowing = false;
    const isEditAppointmentFormShowing = false;
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
    const createdAppointment = {
        _id: '92g647d8j937h6401l86f834',
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
    const updatedAppointment = {
        _id: '6d839271h46f893jd66f890v',
        address: {
            street: '123 International Drive',
            city: 'Jacksonville',
            state: 'FL',
            zipCode: 23212
        },
        description: 'Yearly exam',
        time: '8:30 a.m.',
        patient: '9g8391028366382819382810'
    };
    const isCreateDoctorFormShowing = false;
    const isEditDoctorFormShowing = false;
    const createdDoctor = {
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
            firstName: 'Barbara',
            lastName: 'Winters'
        },
        patients: ['9g8391028366382819382810'],
        phoneNumber: '904-948-9010',
        practice: 'Hematology'
    };
    const updatedDoctor = {
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
            firstName: 'Barbara',
            lastName: 'Winters'
        },
        patients: ['9g8391028366382819382810'],
        phoneNumber: '904-932-9193',
        practice: 'Hematology'
    };
    const isEditBasicProfileInfoFormShowing = false;
    const deletedDoctor = {
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
            firstName: 'Barbara',
            lastName: 'Winters'
        },
        patients: ['9g8391028366382819382810'],
        phoneNumber: '904-948-9010',
        practice: 'Hematology'
    };
    const selectedAppointmentToEdit = {
        address: {
            street: '67 West Lakeside Dr',
            city: 'Jacksonville',
            state: 'FL',
            zipCode: 35840
        },
        date: '2019-01-023T05:00:00.000Z',
        description: 'Access evaluation',
        patient: '5c9067ab7a373130a893ybec',
        phoneNumber: '904-943-2942',
        time: '2:15 p.m.',
        title: 'MD',
        where: 'Vascular Access Center',
        with: 'Madison Akihiko',
        _id: '8f85769f7465928374593018'
    };
    const loadedDoctorFormData = {
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
        patients: ['5c9067ab7a373130a893ybec'],
        phoneNumber: '904-948-9010',
        practice: 'Oncology'
    };
    const isDoctorMenuShowing = false;
    const selectedDoctorToEdit = {
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
        patients: ['5c9067ab7a373130a893ybec'],
        phoneNumber: '904-948-9010',
        practice: 'Oncology'
    };
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
    const isMessageShowing = false;
    const loadedBasicProfileInfoFormData = {
        _id: '5c9067ab7a373130a893ybec',
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
    const areAppointmentsShowing = false;
    const isLoading = true;
    const animation = false;

    it('Should set the initial state when nothing is passed in', () => {
        const state = appReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
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
            selectedDoctorToEdit: {},
            loadedAppointmentFormData: {},
            isDoctorMenuShowing: false,
            loadedDoctorFormData: {},
            doctors: [],
            areAppointmentsShowing: false,
            deletedAppointment: null,
            areDoctorsShowing: true,
            deletedDoctor: null,
            isLoading: true,
            animation: false,
            isEditAppointmentFormShowing: false,
            isEditDoctorFormShowing: false
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = appReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
    describe('selectLabResultsById', () => {
        it('Should attain lab results data based on the selected draw date', () => {
            let state;
            state = appReducer(state, selectLabResultsById(selectedLabResult));
            expect(state).toEqual({
                selectedAppointments: [],
                selectedLabResult: selectedLabResult,
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
                selectedDoctorToEdit: {},
                loadedAppointmentFormData: {},
                isDoctorMenuShowing: false,
                loadedDoctorFormData: {},
                doctors: [],
                areAppointmentsShowing: false,
                deletedAppointment: null,
                areDoctorsShowing: true,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
});