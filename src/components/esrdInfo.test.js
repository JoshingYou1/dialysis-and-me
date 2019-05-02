import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {ESRDInfo} from './esrdInfo';
import NavigationBar from './navBar';
import Footer from './footer';

describe('<ESRDInfo />', () => {
    it('Should render without crashing', () => {
        shallow(<ESRDInfo />);
    });

    it('Should render the NavigationBar component', () => {
        const wrapper = shallow(<ESRDInfo />);
        expect(wrapper.find(NavigationBar).length).to.equal(1);
    });

    it('Should render the Footer component', () => {
        const wrapper = shallow(<ESRDInfo />);
        expect(wrapper.find(Footer).length).to.equal(1);
    });

    it('Should render the div element named .container', () => {
        const wrapper = shallow(<ESRDInfo />);
        expect(wrapper.find('.container').length).to.equal(1);
    });

    it('Should render the h1 header element named .esrd-info-h1', () => {
        const wrapper = shallow(<ESRDInfo />);
        expect(wrapper.find('.esrd-info-h1').length).to.equal(1);
    });

    it('Should render the section element named .esrd-info-section', () => {
        const wrapper = shallow(<ESRDInfo />);
        expect(wrapper.find('.esrd-info-section').length).to.equal(1);
    });

    it('Should render nine paragraph elements named .esrd-info-p', () => {
        const wrapper = shallow(<ESRDInfo />);
        expect(wrapper.find('.esrd-info-p').length).to.equal(9);
    });

    it('Should render five ul elements named .esrd-info-ul', () => {
        const wrapper = shallow(<ESRDInfo />);
        expect(wrapper.find('.esrd-info-ul').length).to.equal(5);
    });
});