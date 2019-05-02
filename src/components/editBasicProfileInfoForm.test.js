import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {EditBasicProfileInfoForm} from './editBasicProfileInfoForm';
import {Field} from 'redux-form';

describe('<EditBasicProfileInfoForm />', () => {
    it('Should render without crashing', () => {
        shallow(<EditBasicProfileInfoForm />);
    });

    it('Should render the Field component', () => {
        const wrapper = shallow(<EditBasicProfileInfoForm />);
        expect(wrapper.find(Field).length).to.equal(9);
    });
});