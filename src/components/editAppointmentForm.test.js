import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {EditAppointmentForm} from './editAppointmentForm';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import {Field} from 'redux-form';

describe('<EditAppointmentForm />', () => {
    it('Should render without crashing', () => {
        shallow(<EditAppointmentForm />);
    });

    it('Should render the DateTimePicker component', () => {
        const wrapper = shallow(<EditAppointmentForm />);
        expect(wrapper.find(DateTimePicker).length).to.equal(1);
    });

    it('Should render the Field component', () => {
        const wrapper = shallow(<EditAppointmentForm />);
        expect(wrapper.find(Field).length).to.equal(11);
    });
});