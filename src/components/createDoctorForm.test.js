import React from 'react';
import {shallow} from 'enzyme';

import {CreateDoctorForm} from './createDoctorForm';
import {Field} from 'redux-form';

describe('<CreateDoctorForm />', () => {
    it('Should render without crashing', () => {
        shallow(<CreateDoctorForm />);
    });

    it('Should render the Field component', () => {
        shallow(<Field />);
    });
})