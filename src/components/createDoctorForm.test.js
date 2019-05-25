import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {CreateDoctorForm} from './createDoctorForm';
import {Field} from 'redux-form';

chai.use(spies);

describe('<CreateDoctorForm />', () => {
    it('Should render without crashing', () => {
        const props = {
            user: {
                _id: 1
            },
            authToken: 1,
            isMessageShowing: false
        };
        shallow(<CreateDoctorForm {...props} />);
    });

    // it('Should render the Field component', () => {
    //     const wrapper = shallow(<CreateDoctorForm />);
    //     expect(wrapper.find(Field).length).to.equal(11);
    // });
})