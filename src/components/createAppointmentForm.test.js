import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {CreateAppointmentForm} from './createAppointmentForm';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import {Field} from 'redux-form';


describe('<CreateAppointmentForm />', () => {
    it('Should render without crashing', () => {
        shallow(<CreateAppointmentForm />);
    });

    it('Should render the DateTimePicker component', () => {
        const wrapper = shallow(<CreateAppointmentForm />);
        expect(wrapper.find(DateTimePicker).length).to.equal(1);
    });

    it('Should render the Field component', () => {
        const wrapper = shallow(<CreateAppointmentForm />);
        expect(wrapper.find(Field).length).to.equal(11);
    });
});