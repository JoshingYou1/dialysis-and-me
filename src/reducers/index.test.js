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
    selectLabResultsById,
    toggleSidebar,
    fetchLabResultsSuccess,
    fetchProfileInfoSuccess,
    toggleLabResultsInfo,
    toggleUserInfo,
    toggleSublinks,
    selectProfileInfoSection,
    fetchAppointmentsSuccess,
    toggleAppointmentInfo,
    selectAppointmentsById,
    updateCurrentDoctor,
    chooseCreateAppointment,
    chooseEditAppointment,
    createAppointmentSuccess,
    loadAppointmentFormData,
    updateAppointmentSuccess,
    chooseCreateDoctor,
    chooseEditDoctor,
    createDoctorSuccess,
    chooseEditBasicProfileInfo,
    editSelectedAppointmentById,
    loadDoctorFormData,
    toggleDoctorMenu,
    editSelectedDoctorById,
    fetchDoctorsSuccess,
    successErrorMessage,
    loadBasicProfileInfoFormData,
    showAppointments,
    toggleDoctorList,
    triggerAnimation,
    updateDoctorSuccess,
    toggleAppointmentList,
    updateBasicProfileInfoSuccess,
    deleteAppointmentSuccess,
    deleteDoctorSuccess
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
    const isSidebarShowing = true;
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
    const updatedBasicProfileInfo = {
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
            cell: '904-423-9283',
            work: null
        },
        sex: 'Male',
        socialSecurityNumber: '987654321',
        treatmentDays: 'Mon/Wed/Fri',
        treatmentTime: '12:30 p.m.'
    };
    const isLabResultsInfoShowing = true;
    const isUserInfoShowing = true;
    const areSublinksShowing = true;
    const section = 1;
    const createdAppointment = {
        _id: '92g647d8j937h6401l86f834',
        address: {
            street: '123 International Drive',
            city: 'Jacksonville',
            state: 'FL',
            zipCode: 23212
        },
        description: 'Back pain',
        time: '10:30 a.m.',
        date: '2019-01-023T05:00:00.000Z',
        patient: '5c9067ab7a373130a893ybec',
        phoneNumber: '904-932-6542',
        title: 'MD',
        where: 'North Florida Pain Institute',
        with: 'Brandon Cooks'
    };
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
            patient: '5c9067ab7a373130a893ybec',
            phoneNumber: '904-932-8374',
            time: '10:15 a.m.',
            title: 'MD',
            where: 'St. Vincent\'s Medical Center',
            with: 'Mark Cuban',
            _id: '8f85769f7465928374593987'
        }
    ];
    const isAppointmentInfoShowing = true;
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
    const newAppointments = [
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
    const newSelectedAppointments = [
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
    const currentDoctor = 1;
    const isCreateAppointmentFormShowing = true;
    const isEditAppointmentFormShowing = true;
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
    const selectedAppointmentToEdit = {
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
    };
    const updatedAppointment = {
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
        time: '11:15 a.m.',
        title: 'MD',
        where: 'St. Vincent\'s Medical Center',
        with: 'Mark Cuban',
        _id: '8f85769f7465928374593987'
    };
    const updatedAppointments = [
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
            time: '11:15 a.m.',
            title: 'MD',
            where: 'St. Vincent\'s Medical Center',
            with: 'Mark Cuban',
            _id: '8f85769f7465928374593987'
        }
    ];
    const isCreateDoctorFormShowing = true;
    const isEditDoctorFormShowing = true;
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
            firstName: 'Dorothy',
            lastName: 'Simmons'
        },
        patients: ['9g8391028366382819382810'],
        phoneNumber: '904-948-9010',
        practice: 'Immunology'
    };
    const isEditBasicProfileInfoFormShowing = true;
    const deletedAppointment = {
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
            _id: '2k750285f748392088149923',
            address: {
                street: '21 North Pine Road',
                city: 'Jacksonville',
                state: 'FL',
                zipCode: 39012
            },
            company: 'Hematologists of Northeast Florida',
            faxNumber: '904-032-2934',
            name: {
                firstName: 'Jessica',
                lastName: 'Mendoza'
            },
            patients: ['9g8391028366382819382810'],
            phoneNumber: '904-032-1929',
            practice: 'Hematology'
        }
    ];
    const deletedDoctor = {
        _id: '2k750285f748392088149923',
        address: {
            street: '21 North Pine Road',
            city: 'Jacksonville',
            state: 'FL',
            zipCode: 39012
        },
        company: 'Hematologists of Northeast Florida',
        faxNumber: '904-032-2934',
        name: {
            firstName: 'Jessica',
            lastName: 'Mendoza'
        },
        patients: ['9g8391028366382819382810'],
        phoneNumber: '904-032-1929',
        practice: 'Hematology'
    };
    const newDoctors = [
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
        }
    ];
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
    const isDoctorMenuShowing = true;
    const selectedDoctorToEdit = {
        _id: '2k750285f748392088149923',
        address: {
            street: '21 North Pine Road',
            city: 'Jacksonville',
            state: 'FL',
            zipCode: 39012
        },
        company: 'Hematologists of Northeast Florida',
        faxNumber: '904-032-2934',
        name: {
            firstName: 'Jessica',
            lastName: 'Mendoza'
        },
        patients: ['9g8391028366382819382810'],
        phoneNumber: '904-032-1929',
        practice: 'Hematology'
    };
    const updatedDoctor = {
        _id: '2k750285f748392088149923',
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
    const updatedDoctors = [
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
            _id: '2k750285f748392088149923',
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
        }
    ];
    const isMessageShowing = true;
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
    const areAppointmentsShowing = true;
    const isLoading = false;
    const animation = true;

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
            let state = {
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, selectLabResultsById(selectedLabResult));
            expect(newState).toEqual({
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('toggleSidebar', () => {
        it('Should toggle the sidebar', () =>{
            let state = {
                selectedAppointments: [],
                selectedLabResult: null,
                isSidebarShowing: isSidebarShowing,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, toggleSidebar(isSidebarShowing));
            expect(newState).toEqual({
                selectedAppointments: [],
                selectedLabResult: null,
                isSidebarShowing: !isSidebarShowing,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('fetchLabResultsSuccess', () => {
        it('Should return the lab results that belong to the user', () => {
            let state = {
                selectedAppointments: [],
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: labResults,
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
                deletedDoctor: null,
                isLoading: isLoading,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, fetchLabResultsSuccess(labResults));
            expect(newState).toEqual({
                selectedAppointments: [],
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: labResults,
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
                deletedDoctor: null,
                isLoading: isLoading,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('fetchProfileInfoSuccess', () => {
        it('Should return the user\'s profile data', () => {
            let state;
            state = appReducer(state, fetchProfileInfoSuccess(profile));
            expect(state).toEqual({
                selectedAppointments: [],
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: [],
                isLabResultsInfoShowing: false,
                profile: profile,
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
                deletedDoctor: null,
                isLoading: isLoading,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('toggleLabResultsInfo', () => {
        it('Should toggle the user\'s lab results info', () => {
            let state;
            state = appReducer(state, toggleLabResultsInfo(isLabResultsInfoShowing));
            expect(state).toEqual({
                selectedAppointments: [],
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: [],
                isLabResultsInfoShowing: isLabResultsInfoShowing,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('toggleUserInfo', () => {
        it('Should toggle the user\'s information', () => {
            let state;
            state = appReducer(state, toggleUserInfo(isUserInfoShowing));
            expect(state).toEqual({
                selectedAppointments: [],
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: [],
                isLabResultsInfoShowing: false,
                profile: [],
                loadedBasicProfileInfoFormData: {},
                isUserInfoShowing: isUserInfoShowing,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('toggleSublinks', () => {
        it('Should toggle the available sublinks within the sidebar', () => {
            let state;
            state = appReducer(state, toggleSublinks(areSublinksShowing));
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
                areSublinksShowing: areSublinksShowing,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('selectProfileInfoSection', () => {
        it('Should reveal the selected section of the user\'s profile', () => {
            let state;
            state = appReducer(state, selectProfileInfoSection(section));
            expect(state).toEqual({
                selectedAppointments: [],
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: [],
                isLabResultsInfoShowing: false,
                profile: [],
                loadedBasicProfileInfoFormData: {},
                isUserInfoShowing: false,
                section: section,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('fetchAppointmentsSuccess', () => {
        it('Should return the appointments that belong to the user', () => {
            let state;
            state = appReducer(state, fetchAppointmentsSuccess(appointments));
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
                appointments: appointments,
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
                deletedDoctor: null,
                isLoading: isLoading,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('toggleAppointmentInfo', () => {
        it('Should toggle the info of a selected appointment', () =>{
            let state = {
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
                isAppointmentInfoShowing: isAppointmentInfoShowing,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, toggleAppointmentInfo(isAppointmentInfoShowing));
            expect(newState).toEqual({
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
                isAppointmentInfoShowing: isAppointmentInfoShowing,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('selectAppointmentsById', () => {
        it('Should return all of the user\'s appointments that match the selected month of the calendar year', () => {
            let state = {
                selectedAppointments: selectedAppointments,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, selectAppointmentsById(selectedAppointments));
            expect(newState).toEqual({
                selectedAppointments: selectedAppointments,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('updateCurrentDoctor', () => {
        it('Should change the doctor being shown to the user', () => {
            let state = {
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
                currentDoctor: currentDoctor,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            state = appReducer(state, updateCurrentDoctor(currentDoctor));
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
                currentDoctor: currentDoctor,
                isCreateAppointmentFormShowing: false,
                isCreateDoctorFormShowing: false,
                isEditBasicProfileInfoFormShowing: false,
                selectedAppointmentToEdit: {},
                selectedDoctorToEdit: {},
                loadedAppointmentFormData: {},
                isDoctorMenuShowing: !isDoctorMenuShowing,
                loadedDoctorFormData: {},
                doctors: [],
                areAppointmentsShowing: false,
                deletedAppointment: null,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('chooseCreateAppointment', () => {
        it('Should show or hide the create appointment form', () => {
            let state = {
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
                isCreateAppointmentFormShowing: isCreateAppointmentFormShowing,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, chooseCreateAppointment(isCreateAppointmentFormShowing));
            expect(newState).toEqual({
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
                isCreateAppointmentFormShowing: !isCreateAppointmentFormShowing,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('chooseEditAppointment', () => {
        it('Should show or hide the edit appointment form', () => {
            let state = {
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: isEditAppointmentFormShowing,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, chooseEditAppointment(isEditAppointmentFormShowing));
            expect(newState).toEqual({
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: !isEditAppointmentFormShowing,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('loadAppointmentFormData', () => {
        it('Should retrieve the data of a given appointment and place it in the edit appointment form', () => {
            let state = {
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
                loadedAppointmentFormData: loadedAppointmentFormData,
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
            let newState = appReducer(state, loadAppointmentFormData(loadedAppointmentFormData));
            expect(newState).toEqual({
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
                loadedAppointmentFormData: loadedAppointmentFormData,
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
            });
        });
    });
    describe('createAppointmentSuccess', () => {
        it('Should fire if a new appointment is created', () => {
            let state = {
                selectedAppointments: selectedAppointments,
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: [],
                isLabResultsInfoShowing: false,
                profile: [],
                loadedBasicProfileInfoFormData: {},
                isUserInfoShowing: false,
                section: 0,
                appointments: appointments,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let currentSelectedAppointments = [];
            let newState = appReducer(state, createAppointmentSuccess(createdAppointment));
            let newAppointments = [...appointments, createdAppointment];
            if (selectedAppointments.length && new Date(createdAppointment.date).getMonth() === new Date(selectedAppointments[0].date).getMonth()) {
                currentSelectedAppointments = [...selectedAppointments, createdAppointment];
                currentSelectedAppointments.sort((a, b) => {
                    return new Date(a.date) - new Date(b.date);
                });
                newAppointments.sort((a, b) => {
                    return new Date(a.date) - new Date(b.date);
                });
            }
            expect(newState).toEqual({
                selectedAppointments: currentSelectedAppointments,
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: [],
                isLabResultsInfoShowing: false,
                profile: [],
                loadedBasicProfileInfoFormData: {},
                isUserInfoShowing: false,
                section: 0,
                appointments: newAppointments,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('updateAppointmentSuccess', () => {
        it('Should fire if an existing appointment\'s data has been updated', () => {
            let state = {
                selectedAppointments: selectedAppointments,
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: [],
                isLabResultsInfoShowing: false,
                profile: [],
                loadedBasicProfileInfoFormData: {},
                isUserInfoShowing: false,
                section: 0,
                appointments: appointments,
                isAppointmentInfoShowing: false,
                areSublinksShowing: false,
                currentDoctor: 0,
                isCreateAppointmentFormShowing: false,
                isCreateDoctorFormShowing: false,
                isEditBasicProfileInfoFormShowing: false,
                selectedAppointmentToEdit: selectedAppointmentToEdit,
                selectedDoctorToEdit: {},
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
            let newState = appReducer(state, updateAppointmentSuccess(updatedAppointment));
            expect(newState).toEqual({
                selectedAppointments: updatedAppointments,
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: [],
                isLabResultsInfoShowing: false,
                profile: [],
                loadedBasicProfileInfoFormData: {},
                isUserInfoShowing: false,
                section: 0,
                appointments: updatedAppointments,
                isAppointmentInfoShowing: false,
                areSublinksShowing: false,
                currentDoctor: 0,
                isCreateAppointmentFormShowing: false,
                isCreateDoctorFormShowing: false,
                isEditBasicProfileInfoFormShowing: false,
                selectedAppointmentToEdit,
                selectedDoctorToEdit: {},
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
            });
        });
    });
    describe('chooseCreateDoctor', () => {
        it('Should show or hide the create doctor form', () => {
            let state = {
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
                isCreateDoctorFormShowing: isCreateDoctorFormShowing,
                isEditBasicProfileInfoFormShowing: false,
                selectedAppointmentToEdit: {},
                selectedDoctorToEdit: {},
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
            let newState = appReducer(state, chooseCreateDoctor(isCreateDoctorFormShowing));
            expect(newState).toEqual({
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
                isCreateDoctorFormShowing: !isCreateDoctorFormShowing,
                isEditBasicProfileInfoFormShowing: false,
                selectedAppointmentToEdit: {},
                selectedDoctorToEdit: {},
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
            });
        });
    });
    describe('chooseEditDoctor', () => {
        it('Should show or hide the edit doctor form', () => {
            let state = {
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: isEditDoctorFormShowing
            };
            let newState = appReducer(state, chooseEditDoctor(isEditDoctorFormShowing));
            expect(newState).toEqual({
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: !isEditDoctorFormShowing
            });
        });
    });
    describe('createDoctorSuccess', () => {
        it('Should fire if a new doctor is created', () => {
            let state = {
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
                doctors: doctors,
                areAppointmentsShowing: false,
                deletedAppointment: null,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, createDoctorSuccess(createdDoctor));
            let currentDoctors = [...doctors, createdDoctor];
            currentDoctors.sort((a, b) => {
                if(a.name.lastName < b.name.lastName) { return -1; }
                if(a.name.lastName > b.name.lastName) { return 1; }
                return 0;
            });
            expect(newState).toEqual({
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
                doctors: currentDoctors,
                areAppointmentsShowing: false,
                deletedAppointment: null,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('updateDoctorSuccess', () => {
        it('Should fire if an existing doctor\'s data has been updated', () => {
            let state = {
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
                selectedDoctorToEdit: selectedDoctorToEdit,
                loadedAppointmentFormData: {},
                isDoctorMenuShowing: false,
                loadedDoctorFormData: {},
                doctors: doctors,
                areAppointmentsShowing: false,
                deletedAppointment: null,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, updateDoctorSuccess(updatedDoctor));
            expect(newState).toEqual({
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
                selectedDoctorToEdit,
                loadedAppointmentFormData: {},
                isDoctorMenuShowing: false,
                loadedDoctorFormData: {},
                doctors: updatedDoctors,
                areAppointmentsShowing: false,
                deletedAppointment: null,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('chooseEditBasicProfileInfo', () => {
        it('Should show or hide the edit basic profile info form', () => {
            let state = {
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
                isEditBasicProfileInfoFormShowing: isEditBasicProfileInfoFormShowing,
                selectedAppointmentToEdit: {},
                selectedDoctorToEdit: {},
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
            let newState = appReducer(state, chooseEditBasicProfileInfo(isEditBasicProfileInfoFormShowing));
            expect(newState).toEqual({
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
                isEditBasicProfileInfoFormShowing: !isEditBasicProfileInfoFormShowing,
                selectedAppointmentToEdit: {},
                selectedDoctorToEdit: {},
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
            });
        });
    });
    describe('deleteAppointmentSuccess', () => {
        it('Should fire when an existing appointment is deleted', () => {
            let state = {
                selectedAppointments: selectedAppointments,
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: [],
                isLabResultsInfoShowing: false,
                profile: [],
                loadedBasicProfileInfoFormData: {},
                isUserInfoShowing: false,
                section: 0,
                appointments: appointments,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, deleteAppointmentSuccess(deletedAppointment));
            expect(newState).toEqual({
                selectedAppointments: newSelectedAppointments,
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: [],
                isLabResultsInfoShowing: false,
                profile: [],
                loadedBasicProfileInfoFormData: {},
                isUserInfoShowing: false,
                section: 0,
                appointments: newAppointments,
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
                deletedAppointment: deletedAppointment,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('deleteDoctorSuccess', () => {
        it('Should fire when an existing doctor is deleted', () => {
            let state = {
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
                doctors: doctors,
                areAppointmentsShowing: false,
                deletedAppointment: null,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, deleteDoctorSuccess(deletedDoctor));
            expect(newState).toEqual({
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
                doctors: newDoctors,
                areAppointmentsShowing: false,
                deletedAppointment: null,
                deletedDoctor: deletedDoctor,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('editSelectedAppointmentById', () => {
        it('Should return the data of the selected appointment', () => {
            let state = {
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
                selectedAppointmentToEdit: selectedAppointmentToEdit,
                selectedDoctorToEdit: {},
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
            let newState = appReducer(state, editSelectedAppointmentById(selectedAppointmentToEdit));
            expect(newState).toEqual({
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
                selectedAppointmentToEdit: selectedAppointmentToEdit,
                selectedDoctorToEdit: {},
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
            });
        });
    });
    describe('loadDoctorFormData', () => {
        it('Should retrieve the data of a given doctor and place it in the edit appointment form', () => {
            let state ={
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
                loadedDoctorFormData: loadedDoctorFormData,
                doctors: [],
                areAppointmentsShowing: false,
                deletedAppointment: null,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, loadDoctorFormData(loadedDoctorFormData));
            expect(newState).toEqual({
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
                loadedDoctorFormData: loadedDoctorFormData,
                doctors: [],
                areAppointmentsShowing: false,
                deletedAppointment: null,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('toggleDoctorMenu', () => {
        it('Should toggle the doctor menu', () => {
            let state = {
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
                isDoctorMenuShowing: isDoctorMenuShowing,
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
            state = appReducer(state, toggleDoctorMenu(isDoctorMenuShowing));
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
                isDoctorMenuShowing: !isDoctorMenuShowing,
                loadedDoctorFormData: {},
                doctors: [],
                areAppointmentsShowing: false,
                deletedAppointment: null,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('editSelectedDoctorById', () => {
        it('Should return the data of a selected doctor', () => {
            let state = {
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
                selectedDoctorToEdit: selectedDoctorToEdit,
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
            let newState = appReducer(state, editSelectedDoctorById(selectedDoctorToEdit));
            expect(newState).toEqual({
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
                selectedDoctorToEdit: selectedDoctorToEdit,
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
            });
        });
    });
    describe('fetchDoctorsSuccess', () => {
        it('Should return the doctors that belong to the user', () => {
            let state = {
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
            doctors: doctors,
            areAppointmentsShowing: false,
            deletedAppointment: null,
            deletedDoctor: null,
            isLoading: isLoading,
            animation: false,
            isEditAppointmentFormShowing: false,
            isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, fetchDoctorsSuccess(doctors));
            expect(newState).toEqual({
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
                doctors: doctors,
                areAppointmentsShowing: false,
                deletedAppointment: null,
                deletedDoctor: null,
                isLoading: isLoading,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('successErrorMessage', () => {
        it('Should show or hide a message based on user input', () => {
            let state = {
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false,
                isMessageShowing: isMessageShowing
            };
            state = appReducer(state, successErrorMessage(isMessageShowing));
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false,
                isMessageShowing: isMessageShowing
            });
        });
    });
    describe('loadBasicProfileInfoFormData', () => {
        it('Should retrieve basic profile info data and place it in the edit basic profile info form', () => {
            let state = {
                selectedAppointments: [],
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: [],
                isLabResultsInfoShowing: false,
                profile: [],
                loadedBasicProfileInfoFormData: loadedBasicProfileInfoFormData,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, loadBasicProfileInfoFormData(loadedBasicProfileInfoFormData));
            expect(newState).toEqual({
                selectedAppointments: [],
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: [],
                isLabResultsInfoShowing: false,
                profile: [],
                loadedBasicProfileInfoFormData: loadedBasicProfileInfoFormData,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('showAppointments', () => {
        it('Should show or hide appointments', () => {
            let state = {
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
                areAppointmentsShowing: areAppointmentsShowing,
                deletedAppointment: null,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            state = appReducer(state, showAppointments(areAppointmentsShowing));
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
                areAppointmentsShowing: !areAppointmentsShowing,
                deletedAppointment: null,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('toggleDoctorList', () => {
        it('Should set deletedDoctor to null', () => {
            let state = {
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
                deletedDoctor: deletedDoctor,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, toggleDoctorList());
            expect(newState).toEqual({
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('toggleAppointmentList', () => {
        it('Should set deletedAppointment to null', () => {
            let state = {
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
                deletedAppointment: deletedAppointment,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, toggleAppointmentList());
            expect(newState).toEqual({
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            });
        });
    });
    describe('updateBasicProfileInfoSuccess', () => {
        it('Should fire if the user\'s basic profile info data has been updated', () => {
            let state = {
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            };
            let newState = appReducer(state, updateBasicProfileInfoSuccess(updatedBasicProfileInfo));
            expect(newState).toEqual({
                selectedAppointments: [],
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: [],
                isLabResultsInfoShowing: false,
                profile: updatedBasicProfileInfo,
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            })
        })
    })
   describe('triggerAnimation', () => {
       it('Should fire based on certain user interactions', () => {
           let state = {
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false,
                animation: animation
           };
           let newState = appReducer(state, triggerAnimation(animation));
            expect(newState).toEqual({
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
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false,
                animation: !animation
            });
        });
    });
});