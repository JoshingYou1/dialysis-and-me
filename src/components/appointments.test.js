import React from 'react';
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router';
import thunk from 'redux-thunk';

import Appointments from './appointments';
import NavigationBar from './navBar';
import Footer from './footer';
import AppointmentsList from './appointmentsList';
import AppointmentsShow from './appointmentsShow';
import CreateAppointmentForm from './createAppointmentForm';

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

const appointments = [
    {
      "address": {
        "street": "40 South Greenlake Ave",
        "city": "Jacksonville",
        "state": "FL",
        "zipCode": 35421
      },
      "_id": "5cb694034859fh37701f316e",
      "description": "Access evaluation",
      "date": "2019-01-04T05:00:00.000Z",
      "time": "2:15 p.m.",
      "with": "Jason Strickland",
      "title": "MD",
      "where": "Vascular Access Center",
      "phoneNumber": "904-943-2942",
      "patient": "5cb694034859f123701f3159",
      "__v": 0
    },
    {
      "address": {
        "street": "632 Oak St",
        "city": "Jacksonville",
        "state": "FL",
        "zipCode": 34423
      },
      "_id": "5cb694034859f123701f316d",
      "description": "Back pain",
      "date": "2019-01-19T05:00:00.000Z",
      "time": "12:30 p.m.",
      "with": "Jessica Brown",
      "title": "Primary care physician",
      "where": "Baptist Primary Care",
      "phoneNumber": "904-233-1114",
      "patient": "5cb694034859f123701f3159",
      "__v": 0
    },
    {
      "address": {
        "street": "402 South Lakeside Dr",
        "city": "Jacksonville",
        "state": "FL",
        "zipCode": 35422
      },
      "_id": "5cb694034859f123701f316f",
      "description": "Vein mapping",
      "date": "2019-02-04T05:00:00.000Z",
      "time": "2:10 p.m.",
      "with": "Jason Strickland",
      "title": "MD",
      "where": "Vascular Access Center",
      "phoneNumber": "904-943-2942",
      "patient": "5cb694034859f123701f3159",
      "__v": 0
    }
  ];

describe('<Appointments />', () => {
    let wrapper;
    let store;
    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('Should render without crashing', () => {
        shallow(<Appointments />);
    });

    it('Should render the NavigationBar component', () => {
        shallow(<NavigationBar />);
    });

    it('Should render the Footer component', () => {
        shallow(<Footer />);
    });

    it('Should render the AppointmentsList component', () => {
        shallow(<AppointmentsList />);
    });

    it('Should render the AppointmentsShow component', () => {
        shallow(<AppointmentsShow />);
    });

    it('Should render the CreateAppointmentForm component', () => {
        shallow(<CreateAppointmentForm />);
    });

    it('Should fire the componentDidMount method and inject appointments into the state', () => {
        const dispatch = jest.fn();
        shallow(<Appointments dispatch={dispatch}/>);

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return appointments;
                }
            })
        );
        wrapper = mount(<Provider store={store}><MemoryRouter initalEntries={['/appointments']}><Appointments /></MemoryRouter></Provider>);
        expect(wrapper.find(Appointments).find('.container').length).toEqual(1);

        initialState.app.appointments = appointments;
        initialState.app.isLoading = false;
        wrapper.unmount();
        store = mockStore(initialState);
        // wrapper.update();
        //Since wrapper.update() is currently broken as of 4/19/19, I had to manually remount the component
        wrapper = mount(<Provider store={store}><MemoryRouter initalEntries={['/appointments']}><Appointments /></MemoryRouter></Provider>);
        wrapper.find(Appointments).render();
        // console.log('wrapper.find', wrapper.find(Appointments).html());
        expect(wrapper.find(Appointments).find('h1').length).toEqual(2);
    });
});

