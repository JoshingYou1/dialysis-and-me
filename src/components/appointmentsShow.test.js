import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {AppointmentsShow} from './appointmentsShow';
import EditAppointmentForm from './editAppointmentForm';
import { toggleAppointmentList, loadAppointmentFormData, editSelectedAppointmentById, deleteAppointment, toggleAppointmentInfo } from '../actions';

chai.use(spies);

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

const deletedAppointment = {
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
};

let chosenAppointments = selectedAppointments;

describe('<AppointmentsShow', () => {
  
    it('Should render without crashing', () => {
        const props = {
          user: {
            _id: 1
          },
          chosenAppointments: [],
          isAppointmentInfoShowing: false,
          selectedAppointmentToEdit: null,
          loadedAppointmentFormData: {},
          isMessageShowing: false,
          deletedAppointment: null,
          animation: false
        };
        shallow(<AppointmentsShow {...props}/>);
    });
    
    it('Should render the EditAppointmentForm component if chosenAppointments is not empty', () => {
        const props = {
          user: {
            _id: 1
          },
          chosenAppointments: chosenAppointments,
          isAppointmentInfoShowing: false,
          selectedAppointmentToEdit: null,
          loadedAppointmentFormData: {},
          isMessageShowing: false,
          deletedAppointment: null,
          animation: false
        };
        const wrapper = shallow(<AppointmentsShow {...props}/>);
        expect(wrapper.find(EditAppointmentForm)).to.exist;
    });

    it('Should dispatch two actions, loadAppointmentFormData and editSelectedAppointmentById, when the button named .edit-appointment-button is clicked', () => {
      const props = {
        user: {
          _id: 1
        },
        chosenAppointments: chosenAppointments,
        isAppointmentInfoShowing: false,
        selectedAppointmentToEdit: null,
        loadedAppointmentFormData: {},
        isMessageShowing: false,
        deletedAppointment: null,
        animation: false,
        dispatch: chai.spy()
      };
      const wrapper = shallow(<AppointmentsShow {...props}/>);
      const instance = wrapper.instance();
      expect(wrapper.find('.edit-appointment-button')).to.exist;
      wrapper.find('.edit-appointment-button').at(0).simulate('click');
      expect(instance.props.dispatch).to.have.been.called.with(loadAppointmentFormData(selectedAppointments[0]));
      expect(instance.props.dispatch).to.have.been.called.with(editSelectedAppointmentById(selectedAppointments[0]));
    });

    it('Should dispatch the action deleteAppointment when the button named .delete-appointment-button is clicked', () => {
      const props = {
        user: {
          _id: 1
        },
        chosenAppointments: chosenAppointments,
        isAppointmentInfoShowing: false,
        selectedAppointmentToEdit: null,
        loadedAppointmentFormData: {},
        isMessageShowing: false,
        deletedAppointment: null,
        animation: false,
        dispatch: chai.spy()
      };
      window.confirm = chai.spy(() => true);
      const wrapper = shallow(<AppointmentsShow {...props}/>);
      const instance = wrapper.instance();
      expect(wrapper.find('.delete-appointment-button')).to.exist;
      wrapper.find('.delete-appointment-button').at(0).simulate('click');
      expect(window.confirm).to.be.called();
      expect(instance.props.dispatch).to.have.been.called.once;
    });

    it('Should dispatch the action toggleAppointmentInfo when chosenAppointments is not empty and the button named .desktop-hide is clicked. ', () => {
      const props = {
        user: {
          _id: 1
        },
        chosenAppointments: chosenAppointments,
        isAppointmentInfoShowing: false,
        selectedAppointmentToEdit: null,
        loadedAppointmentFormData: {},
        isMessageShowing: false,
        deletedAppointment: null,
        animation: false,
        dispatch: chai.spy()
      };
      const wrapper = shallow(<AppointmentsShow {...props}/>);
      const instance = wrapper.instance();
      expect(wrapper.find('.desktop-hide')).to.exist;
      wrapper.find('.desktop-hide').simulate('click');
      expect(instance.props.dispatch).to.have.been.called.with(toggleAppointmentInfo(false));
    });

    it('Should dispatch the action toggleAppointmentList when deletedAppointment is not empty and the button named .message-button is clicked. ', () => {
      const props = {
        user: {
          _id: 1
        },
        chosenAppointments: [],
        isAppointmentInfoShowing: false,
        selectedAppointmentToEdit: null,
        loadedAppointmentFormData: {},
        isMessageShowing: false,
        deletedAppointment: deletedAppointment,
        animation: false,
        dispatch: chai.spy()
      };
      const wrapper = shallow(<AppointmentsShow {...props}/>);
      const instance = wrapper.instance();
      expect(wrapper.find('.message-button')).to.exist;
      wrapper.find('.message-button').simulate('click');
      expect(instance.props.dispatch).to.have.been.called.with(toggleAppointmentList());
    });
});