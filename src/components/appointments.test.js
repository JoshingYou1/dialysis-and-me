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

    // it('Should render with a container class', () => {
    //     const wrapper = shallow(<Appointments />);
    //     expect(wrapper.hasClass('container')).toEqual(true);
    // });

    // it('Dispatches')
});

