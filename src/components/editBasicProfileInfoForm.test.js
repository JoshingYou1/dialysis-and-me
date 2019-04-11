import React from 'react';
import {shallow} from 'enzyme';

import {EditBasicProfileInfoForm} from './editBasicProfileInfoForm';
import {Field} from 'redux-form';

describe('<EditBasicProfileInfoForm />', () => {
    it('Should render without crashing', () => {
        shallow(<EditBasicProfileInfoForm />);
    });

    it('Should render the Field component', () => {
        shallow(<Field />);
    });
});