import React from 'react';
import {shallow} from 'enzyme';

import {EditAppointmentForm} from './editAppointmentForm';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import {Field} from 'redux-form';

describe('<EditAppointmentForm />', () => {
    it('Should render without crashing', () => {
        shallow(<EditAppointmentForm />);
    });

    it('Should render the DateTimePicker component', () => {
        shallow(<DateTimePicker />);
    });

    it('Should render the Field component', () => {
        shallow(<Field />);
    });
});