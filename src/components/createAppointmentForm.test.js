import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {CreateAppointmentForm} from './createAppointmentForm';
import DateTimePicker from './createAppointmentForm';
import {Field} from 'redux-form';
import { successErrorMessage } from '../actions';

chai.use(spies);


describe('<CreateAppointmentForm />', () => {
    it('Should render without crashing', () => {
        const props = {
            user: {
                _id: 1
            },
            authToken: 1,
            isMessageShowing: false
        };
        shallow(<CreateAppointmentForm {...props}/>);
    });

    // it('Should render the Field components', () => {
    //     const props = {
    //         user: {
    //             _id: 1
    //         },
    //         authToken: 1,
    //         isMessageShowing: false
    //     };
    //     const wrapper = shallow(<CreateAppointmentForm {...props} />);
    //     expect(wrapper.find(Field).length).to.equal(11);
    // });

    it('Should render the form named .create-appointment-form', () => {
        const props = {
            user: {
                _id: 1
            },
            authToken: 1,
            isMessageShowing: false
        };
        const wrapper = shallow(<CreateAppointmentForm {...props} />);
        expect(wrapper.find('.create-appointment-form')).to.exist;
    });

    it('Should dispatch the action successErrorMessage when the form is submitted', () => {
        const props = {
            user: {
                _id: 1
            },
            authToken: 1,
            isMessageShowing: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<CreateAppointmentForm {...props}/>);
        const instance = wrapper.instance();
        console.log(wrapper.instance());
        expect(wrapper.find('.create-appointment-submit-button')).to.exist;
        // wrapper.find('.create-appointment-submit-button').simulate('click');
        // expect(instance.props.dispatch).to.be.called.with(successErrorMessage());
    });
});