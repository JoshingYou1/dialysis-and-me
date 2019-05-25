import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {EditAppointmentForm} from './editAppointmentForm';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import {Field} from 'redux-form';

chai.use(spies);

describe('<EditAppointmentForm />', () => {
    it('Should render without crashing', () => {
        const props = {
            user: {
                _id: 1
            },
            authToken: 1,
            initialValues: {},
            selectedAppointmentToEdit: {},
            isMessageShowing: false
        };
        shallow(<EditAppointmentForm {...props} />);
    });

    // it('Should render the DateTimePicker component', () => {
    //     const props = {
    //         user: {
    //             _id: 1
    //         },
    //         authToken: 1,
    //         initialValues: {},
    //         selectedAppointmentToEdit: {},
    //         isMessageShowing: false
    //     };
    //     const wrapper = shallow(<EditAppointmentForm {...props} />);
    //     expect(wrapper.find(DateTimePicker).length).to.equal(1);
    // });

    // it('Should render the Field component', () => {
    //     const wrapper = shallow(<EditAppointmentForm />);
    //     expect(wrapper.find(Field).length).to.equal(11);
    // });
});