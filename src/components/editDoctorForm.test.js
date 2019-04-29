import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {EditDoctorForm} from './editDoctorForm';
import {Field} from 'redux-form';

describe('<EditDoctorForm />', () => {
    it('Should render without crashing', () => {
        shallow(<EditDoctorForm />);
    });

    it('Should render the Field component', () => {
        shallow(<Field />);
    });
});