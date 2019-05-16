import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import LivingWithESRD from './livingWithEsrd';
import NavigationBar from './navBar';
import Footer from './footer';

describe('<LivingWithESRD />', () => {
    it('Should render without crashing', () => {
        shallow(<LivingWithESRD />);
    });

    it('Should render the NavigationBar component', () => {
        const wrapper = shallow(<LivingWithESRD />);
        expect(wrapper.find(NavigationBar).length).to.equal(1);
    });

    it('Should render the Footer component', () => {
        const wrapper = shallow(<LivingWithESRD />);
        expect(wrapper.find(Footer).length).to.equal(1);
    });

    it('Should render the div element named .container', () => {
        const wrapper = shallow(<LivingWithESRD />);
        expect(wrapper.find('.container').length).to.equal(1);
    });

    it('Should render the section element named .living-with-esrd-section', () => {
        const wrapper = shallow(<LivingWithESRD />);
        expect(wrapper.find('.living-with-esrd-section').length).to.equal(1);
    });
});