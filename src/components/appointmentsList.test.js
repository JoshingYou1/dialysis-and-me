import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {AppointmentsList} from './appointmentsList';
import { triggerAnimation } from '../actions';

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

function chooseAppointmentsByMonth(choice) {
        appointments.filter(result => {
            const resultMonth = new Date(result.date).getMonth();
            return resultMonth === choice;
    });
}

describe('<AppointmentsList />', () => {
    it('Should render without crashing', () => {
        const props = {
            isAppointmentInfoShowing: false,
            animation: false
        };
        shallow(<AppointmentsList {...props}/>);
    });

    it('Should render the div element named .appointments-list-div when the isAppointmentInfoShowing prop is falsy', () => {
        const props = {
            isAppointmentInfoShowing: false,
            animation: false
        };
        const wrapper = shallow(<AppointmentsList {...props}/>);
        expect(wrapper.find('.appointments-list-div').length).to.equal(1);
    });

    it('Should render the h2 header element named .appointments-list-h2', () => {
        const props = {
            isAppointmentInfoShowing: false,
            animation: false
        };
        const wrapper = shallow(<AppointmentsList {...props}/>);
        expect(wrapper.find('.appointments-list-h2').length).to.equal(1);
    });

    it('Should render the ul element named .appointments-list', () => {
        const props = {
            isAppointmentInfoShowing: false,
            animation: false
        };
        const wrapper = shallow(<AppointmentsList {...props}/>);
        expect(wrapper.find('.appointments-list').length).to.equal(1);
    });

    it('Should simulate click events', () => {
        const props = {
            isAppointmentInfoShowing: false,
            animation: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<AppointmentsList {...props} chooseAppointmentsByMonth={chooseAppointmentsByMonth}/>);
        wrapper.find('.appointments-list-item').at(0).simulate('click');
        expect(props.dispatch).to.have.been.called();
    });

    it('Should dispatch the action triggerAnimation when a month is clicked', () => {
        const props = {
            isAppointmentInfoShowing: false,
            animation: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<AppointmentsList {...props} chooseAppointmentsByMonth={chooseAppointmentsByMonth}/>);
        console.log(wrapper.instance().props);
        const instance = wrapper.instance();
        wrapper.find('.appointments-list-item').at(0).simulate('click');
        expect(instance.props.dispatch).to.have.been.called.with(triggerAnimation());
    });
});

