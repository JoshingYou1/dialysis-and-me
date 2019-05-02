import React from 'react';
import {shallow, mount} from 'enzyme';
import { expect } from 'chai';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router';
import sinon from 'sinon';

import {Doctor} from './doctor';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const doctor = {
    _id: '2k750285f749351627149923',
    address: {
        street: '21 Alpine Drive',
        city: 'Jacksonville',
        state: 'FL',
        zipCode: 39912
    },
    company: 'Hematologists of Northeast Florida',
    faxNumber: '904-983-3222',
    name: {
        firstName: 'Jessica',
        lastName: 'Smith'
    },
    patients: ['9g8391028366382891044527'],
    phoneNumber: '904-983-1092',
    practice: 'Hematology'
};

describe('<Doctor />', () => {
    let wrapper;
    let initialState;
    let store;
    let d;
    beforeEach(() => {
        d = doctor;
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
    });

    it('Should render without crashing', () => {
        shallow(<Doctor doctor={d}/>);
    });

    it('Should render the section element named .doctor-section', () => {
        wrapper = shallow(<Doctor doctor={d} />);
        expect(wrapper.find('.doctor-section').length).to.equal(1);
    });

    it('Should render the div element named .doctor-menu if the state of the isDoctorMenuShowing prop is truthy', () => {
        initialState.app.isDoctorMenuShowing = true;
        expect(wrapper.find('.doctor-menu').length).to.equal(1);
    });

    it('Should simulate a click event when the button that triggers the showEditDoctorForm method is clicked', () => {
        const onButtonClick = sinon.spy();
        wrapper = shallow(<Doctor doctor={d} onButtonClick={onButtonClick} />);
        expect(wrapper.find('.edit-doctor-button').length).to.equal(1);
        wrapper.find('.edit-doctor-button').simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
    });
});