import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import Footer from './footer';

describe('<Footer />', () => {
    it('Should render without crashing', () => {
        shallow(<Footer />);
    });

    it('Should render the div element named .footer-div', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('.footer-div').length).to.equal(1);
    });

    it('Should render the footer element', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('footer').length).to.equal(1);
    })
});