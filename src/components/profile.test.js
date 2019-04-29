import React from 'react';
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router';
import thunk from 'redux-thunk';
import { expect } from 'chai';

import {Profile} from './profile';
import NavigationBar from './navBar';
import PrimaryInsuranceInfo from './primaryInsuranceInfo';
import SecondaryInsuranceInfo from './secondaryInsuranceInfo';
import TreatmentInfo from './treatmentInfo';
import EditBasicProfileInfoForm from './editBasicProfileInfoForm';
import Footer from './footer';

let initialState = {
    app: {
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
    },
    auth: {
        loading: false,
        currentUser: {
            _id: 1
        },
        error: null
    }
};

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const profile = {
    _id: '5cb601649279f123701f3168',
        name: {
            firstName: 'Jericho',
            lastName: 'Cotchery'
        },
        dateOfBirth: '02/18/1976',
        sex: 'Male',
        socialSecurityNumber: '976578653',
        address: {
            street: '89 Stillwater Circle',
            city: 'Jacksonville',
            state: 'FL',
            zipCode: '38273'
        },
        phoneNumbers: {
            home: '904-876-8786',
            cell: '904-454-9787',
            work: null
        },
        primaryInsurance: {
            insuranceCompany: 'Cigna',
            nameOfCardHolder: {
                firstName: 'Jericho',
                lastName: 'Cotchery'
            },
            policyNumber: 843886479,
            dateOfBirthOfCardHolder: '02/18/1976',
            socialSecurityNumberOfCardHolder: '976578653'
        },
        secondaryInsurance: {
            insuranceCompany: 'Ally Health',
            nameOfCardHolder: {
                firstName: 'Jericho',
                lastName: 'Cotchery'
            },
            policyNumber: 738265749,
            dateOfBirthOfCardHolder: '02/18/1976',
            socialSecurityNumberOfCardHolder: '976578653'
        },
        treatmentDays: 'Tue/Thu/Sat',
        treatmentTime: '11:30 a.m.',
        labResults: [
            '5cb699172459f123701f3168',
            '5cb699172459f123701f0264',
            '5cb026482459f123701f0264'
        ],
        clinic: '9d9236482459f123701f0264',
        doctors: [
            '5cb694034859f123701f3168',
            '5cb694034859f123701w9173'
        ],
        appointments: [
            '5cb694034859fh37701f316e',
            '5cb694034859f123701f316d',
            '5cb694034859f123701f316f'
        ],
        username: 'robert.jones',
        password: 'hello'
}

describe('<Profile />', () => {
    let wrapper;
    let store;
    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('Should render without crashing', () => {
        shallow(<Profile />);
    });

    it('Should render the NavigationBar component', () => {
        shallow(<NavigationBar />);
    });

    it('Should render the PrimaryInsuranceInfo component', () => {
        shallow(<PrimaryInsuranceInfo />);
    });

    it('Should render the SecondaryInsuranceInfo component', () => {
        shallow(<SecondaryInsuranceInfo />);
    });

    it('Should render the TreatmentInfo component', () => {
        shallow(<TreatmentInfo />);
    });

    it('Should render the EditBasicProfileInfoForm component', () => {
        shallow(<EditBasicProfileInfoForm />);
    });

    it('Should render the Footer component', () => {
        shallow(<Footer />);
    });

    it('Should fire the componentDidMount method and inject lab results into the state', () => {
        const dispatch = jest.fn();
        shallow(<Profile dispatch={dispatch}/>);

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return profile;
                }
            })
        );
        wrapper = mount(<Provider store={store}><MemoryRouter initalEntries={['/profile']}><Profile /></MemoryRouter></Provider>);
        expect(wrapper.find(Profile).find('.container').length).to.equal(1);

        initialState.app.doctors = profile;
        initialState.app.isLoading = false;
        wrapper.unmount();
        store = mockStore(initialState);
        // wrapper.update();
        //Since wrapper.update() is currently broken as of 4/19/19, I had to manually remount the component
        wrapper = mount(<Provider store={store}><MemoryRouter initalEntries={['/profile']}><Profile /></MemoryRouter></Provider>);
        wrapper.find(Profile).render();
        // console.log('wrapper.find', wrapper.find(Profile).html());
        expect(wrapper.find(Profile).find('h1').length).to.equal(2);
    });
});