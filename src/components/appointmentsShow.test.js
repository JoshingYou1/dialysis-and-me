import React from 'react';
import {shallow} from 'enzyme';

import {AppointmentsShow} from './appointmentsShow';
import EditAppointmentForm from './editAppointmentForm';

describe('<AppointmentsShow', () => {
    it('Should render without crashing', () => {
        shallow(<AppointmentsShow />);
    });
    
    it('Should render the EditAppointmentForm', () => {
        shallow(<EditAppointmentForm />);
    });
});