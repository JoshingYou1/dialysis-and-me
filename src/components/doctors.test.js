import React from 'react';
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router';
import thunk from 'redux-thunk';

import {Doctors} from './doctors';
import NavigationBar from './navBar';
import Footer from './footer';
import Doctor from './doctor';
import CreateDoctorForm from './createDoctorForm';
import EditDoctorForm from './editDoctorForm';

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

const doctors = [
    {
        address: {
            city: 'Jacksonville',
            state: 'FL',
            street: '436 East Rutherford Dr',
            zipCode: 34232
        },
        company: 'Mayo Clinic',
        faxNumber: '904-743-2743',
        name: {
            firstName: 'Joseph',
            lastName: 'Armstrong'
        },
        patients: ['5cb694034859f123701f3159'],
        phoneNumber: '904-743-9433',
        practice: 'Hematology',
        _id: '5cb694034859f123701f3168'
    },
    {
        address: {
            city: 'Orange Park',
            state: 'FL',
            street: '90 West Bay St',
            zipCode: 34932
        },
        company: 'Oncologists of North Florida',
        faxNumber: '904-293-3948',
        name: {
            firstName: 'Michael',
            lastName: 'Dickerson'
        },
        patients: ['5cb694034859f123701f9284'],
        phoneNumber: '904-293-9183',
        practice: 'Oncology',
        _id: '5cb694034859f123701w9173'
    }
];

describe('<Doctors />', () => {
    let wrapper;
    let store;
    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('Should render without crashing', () => {
        shallow(<Doctors />);
    });

    it('Should render the NavigationBar component', () => {
        shallow(<NavigationBar />);
    });

    it('Should render the Footer component', () => {
        shallow(<Footer />);
    });

    it('Should render the Doctor component', () => {
        shallow(<Doctor />);
    });

    it('Should render the CreateDoctorForm component', () => {
        shallow(<CreateDoctorForm />);
    });

    it('Should render the EditDoctorForm component', () => {
        shallow(<EditDoctorForm />);
    });

    it('Should fire the componentDidMount method and inject appointments into the state', () => {
        const dispatch = jest.fn();
        shallow(<Doctors dispatch={dispatch}/>);

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return doctors;
                }
            })
        );
        wrapper = mount(<Provider store={store}><MemoryRouter initalEntries={['/doctors']}><Doctors /></MemoryRouter></Provider>);
        expect(wrapper.find(Doctors).find('.container').length).toEqual(1);

        initialState.app.doctors = doctors;
        initialState.app.isLoading = false;
        wrapper.unmount();
        store = mockStore(initialState);
        // wrapper.update();
        //Since wrapper.update() is currently broken as of 4/19/19, I had to manually remount the component
        wrapper = mount(<Provider store={store}><MemoryRouter initalEntries={['/doctors']}><Doctors /></MemoryRouter></Provider>);
        wrapper.find(Doctors).render();
        // console.log('wrapper.find', wrapper.find(Doctors).html());
        expect(wrapper.find(Doctors).find('h1').length).toEqual(3);
    });
});