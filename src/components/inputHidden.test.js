import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import InputHidden from './inputHidden';

describe('<InputHidden />', () => {
    it('Should render without crashing', () => {
        shallow(<InputHidden />);
    });

    it('Should render the div element named .form-input-hidden', () => {
        const wrapper = shallow(<InputHidden />);
        expect(wrapper.find('.form-input-hidden').length).to.equal(1);
    });
});