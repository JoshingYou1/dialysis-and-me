import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {User} from './user';

describe('<User />', () => {
    it('Should render without crashing', () => {
        shallow(<User />);
    });

    it('Should render the div element named .user-div', () => {
        const wrapper = shallow(<User />);
        expect(wrapper.find('.user-div').length).to.equal(1);
    });
});