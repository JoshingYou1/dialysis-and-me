import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {CreateDoctorForm} from './createDoctorForm';
import {Field} from 'redux-form';

describe('<CreateDoctorForm />', () => {
    it('Should render without crashing', () => {
        shallow(<CreateDoctorForm />);
    });

    it('Should render the Field component', () => {
        const wrapper = shallow(<CreateDoctorForm />);
        expect(wrapper.find(Field).length).to.equal(11);
    });
})