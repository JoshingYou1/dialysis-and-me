import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {EditDoctorForm} from './editDoctorForm';
import {Field} from 'redux-form';

chai.use(spies);

describe('<EditDoctorForm />', () => {
    it('Should render without crashing', () => {
        const props = {
            user: {
                _id: 1
            },
            authToken: 1,
            initialValues: {},
            selectedDoctorToEdit: {},
            isMessageShowing: false
        }
        shallow(<EditDoctorForm {...props} />);
    });

    // it('Should render the Field component', () => {
    //     const wrapper = shallow(<EditDoctorForm />);
    //     expect(wrapper.find(Field).length).to.equal(11);
    // });
});