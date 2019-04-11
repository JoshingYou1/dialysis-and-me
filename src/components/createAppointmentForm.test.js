import React from 'react';
import {shallow} from 'enzyme';

import {CreateAppointmentForm} from './createAppointmentForm';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import {Field} from 'redux-form';


describe('<CreateAppointmentForm />', () => {
    it('Should render without crashing', () => {
        shallow(<CreateAppointmentForm />);
    });

    it('Should render the DateTimePicker component', () => {
        shallow(<DateTimePicker />);
    });

    it('Should render the Field component', () => {
        shallow(<Field />);
    });
});