import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {Doctor} from './doctor';
import { toggleDoctorMenu } from '../actions';

chai.use(spies);

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
    it('Should render without crashing', () => {
        const props = {
            user: {
                _id: 1
            },
            isDoctorMenuShowing: false,
            loadedDoctorFormData: {},
            selectedDoctorToEdit: null,
            currentDoctor: 0
        };
        shallow(<Doctor doctor={doctor} {...props} />);
    });

    it('Should render the section element named .doctor-section', () => {
        const props = {
            user: {
                _id: 1
            },
            isDoctorMenuShowing: false,
            loadedDoctorFormData: {},
            selectedDoctorToEdit: null,
            currentDoctor: 0
        };
        const wrapper = shallow(<Doctor doctor={doctor} {...props} />);
        expect(wrapper.find('.doctor-section').length).to.equal(1);
    });

    it('Should render the div element named .doctor-menu.hidden-1 if the state of the isDoctorMenuShowing prop is falsy', () => {
        const props = {
            user: {
                _id: 1
            },
            isDoctorMenuShowing: false,
            loadedDoctorFormData: {},
            selectedDoctorToEdit: null,
            currentDoctor: 0
        };
        const wrapper = shallow(<Doctor doctor={doctor} {...props} />);
        expect(wrapper.find('div.doctor-menu.hidden-1').length).to.equal(1);
    });

    it('Should simulate a click event when the hamburger menu is clicked', () => {
        const props = {
            user: {
                _id: 1
            },
            isDoctorMenuShowing: false,
            loadedDoctorFormData: {},
            selectedDoctorToEdit: null,
            currentDoctor: 0,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Doctor doctor={doctor} {...props} />);
        const instance = wrapper.instance();
        expect(wrapper.find('span.fas.fa-ellipsis-v').length).to.equal(1);
        wrapper.find('span.fas.fa-ellipsis-v').simulate('click');
        expect(instance.props.dispatch).to.have.been.called.with(toggleDoctorMenu());
    });

    it('Should simulate a click event when the button that triggers the showEditDoctorForm method is clicked', () => {
        const props = {
            user: {
                _id: 1
            },
            isDoctorMenuShowing: false,
            loadedDoctorFormData: {},
            selectedDoctorToEdit: null,
            currentDoctor: 0,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Doctor doctor={doctor} {...props} />);
        const instance = wrapper.instance();
        expect(wrapper.find('.edit-doctor-button').length).to.equal(1);
        wrapper.find('.edit-doctor-button').simulate('click');
        expect(instance.props.dispatch).to.be.called;
    });

    it('Should dispatch the action deleteAppointment when the button named .delete-appointment-button is clicked', () => {
        const props = {
            user: {
                _id: 1
            },
            isDoctorMenuShowing: false,
            loadedDoctorFormData: {},
            selectedDoctorToEdit: null,
            currentDoctor: 0,
            dispatch: chai.spy()
        };
        window.confirm = chai.spy(() => true);
        const wrapper = shallow(<Doctor doctor={doctor} {...props} />);
        const instance = wrapper.instance();
        expect(wrapper.find('.delete-doctor-button')).to.exist;
        wrapper.find('.delete-doctor-button').simulate('click');
        expect(window.confirm).to.be.called();
        expect(instance.props.dispatch).to.have.been.called;
    });
});