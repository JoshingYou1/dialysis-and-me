import React from 'react';
import {shallow, mount} from 'enzyme';

import {Appointments} from './appointments';
import NavigationBar from './navBar';
import Footer from './footer';
import AppointmentsList from './appointmentsList';
import AppointmentsShow from './appointmentsShow';
import CreateAppointmentForm from './createAppointmentForm';

describe('<Appointments />', () => {
    it('Should render without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Appointments dispatch={dispatch} />);
    });

    it('Should render the NavigationBar component', () => {
        const dispatch = jest.fn();
        shallow(<NavigationBar dispatch={dispatch} />);
    });

    it('Should render the Footer component', () => {
        const dispatch = jest.fn();
        shallow(<Footer dispatch={dispatch} />);
    });

    it('Should render the AppointmentsList component', () => {
        const dispatch = jest.fn();
        shallow(<AppointmentsList dispatch={dispatch} />);
    });

    it('Should render the AppointmentsShow component', () => {
        const dispatch = jest.fn();
        shallow(<AppointmentsShow dispatch={dispatch} />);
    });

    it('Should render the CreateAppointmentForm component', () => {
        const dispatch = jest.fn();
        shallow(<CreateAppointmentForm dispatch={dispatch} />);
    });

    // it('Should render with a container class', () => {
    //     const wrapper = shallow(<Appointments />);
    //     expect(wrapper.hasClass('container')).toEqual(true);
    // });

    // it('Dispatches')
});

