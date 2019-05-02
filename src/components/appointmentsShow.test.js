import React from 'react';
import {shallow, mount} from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router';
import thunk from 'redux-thunk';

import {AppointmentsShow} from './appointmentsShow';
import EditAppointmentForm from './editAppointmentForm';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const appointments = [
    {
      address: {
        street: '40 South Greenlake Ave',
        city: 'Jacksonville',
        state: 'FL',
        zipCode: 35421
      },
      _id: '5cb694034859fh37701f316e',
      description: 'Access evaluation',
      date: '2019-01-04T05:00:00.000Z',
      time: '2:15 p.m.',
      with: 'Jason Strickland',
      title: 'MD',
      where: 'Vascular Access Center',
      phoneNumber: '904-943-2942',
      patient: '5cb694034859f123701f3159'
    },
    {
      address: {
        street: '632 Oak St',
        city: 'Jacksonville',
        state: 'FL',
        zipCode: 34423
      },
      _id: '5cb694034859f123701f316d',
      description: 'Back pain',
      date: '2019-01-19T05:00:00.000Z',
      time: '12:30 p.m.',
      with: 'Jessica Brown',
      title: 'Primary care physician',
      where: 'Baptist Primary Care',
      phoneNumber: '904-233-1114',
      patient: '5cb694034859f123701f3159'
    },
    {
      address: {
        street: '402 South Lakeside Dr',
        city: 'Jacksonville',
        state: 'FL',
        zipCode: 35422
      },
      _id: '5cb694034859f123701f316f',
      description: 'Vein mapping',
      date: '2019-02-04T05:00:00.000Z',
      time: '2:10 p.m.',
      with: 'Jason Strickland',
      title: 'MD',
      where: 'Vascular Access Center',
      phoneNumber: '904-943-2942',
      patient: '5cb694034859f123701f3159'
    }
  ];

const selectedAppointments = [
    {
        address: {
          street: '40 South Greenlake Ave',
          city: 'Jacksonville',
          state: 'FL',
          zipCode: 35421
        },
        _id: '5cb694034859fh37701f316e',
        description: 'Access evaluation',
        date: '2019-01-04T05:00:00.000Z',
        time: '2:15 p.m.',
        with: 'Jason Strickland',
        title: 'MD',
        where: 'Vascular Access Center',
        phoneNumber: '904-943-2942',
        patient: '5cb694034859f123701f3159'
      },
      {
        address: {
          street: '632 Oak St',
          city: 'Jacksonville',
          state: 'FL',
          zipCode: 34423
        },
        _id: '5cb694034859f123701f316d',
        description: 'Back pain',
        date: '2019-01-19T05:00:00.000Z',
        time: '12:30 p.m.',
        with: 'Jessica Brown',
        title: 'Primary care physician',
        where: 'Baptist Primary Care',
        phoneNumber: '904-233-1114',
        patient: '5cb694034859f123701f3159'
    }
];

let chosenAppointments = selectedAppointments;

describe('<AppointmentsShow', () => {
    let wrapper;
    let store;
    let initialState;
    beforeEach(() => {
        initialState = {
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
        store = mockStore(initialState);
    })

    it('Should render without crashing', () => {
        shallow(<AppointmentsShow />);
    });
    
    it('Should render the EditAppointmentForm', () => {
        initialState.app.appointments = appointments;
        initialState.app.selectedAppointments = chosenAppointments;
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initalEntries={['/appointments']}>
                    <AppointmentsShow />
                </MemoryRouter>
            </Provider>
        );
        expect(wrapper.find(EditAppointmentForm).length).to.equal(1);
    });
});