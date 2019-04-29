import React from 'react';
import {shallow, mount} from 'enzyme';
import { expect } from 'chai';

import About from './about';
import NavigationBar from './navBar';
import Footer from './footer';

describe('<About />', () => {
    it('Should render without crashing', () => {
        shallow(<About />);
    });

    it('Should render the div element named .container', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find('.container').length).to.equal(1);
    });

    it('Should render the NavigationBar component', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find(NavigationBar).length).to.equal(1);
    });

    it('Should render the Footer component', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find(Footer).length).to.equal(1);
    });

    it('Should render the h1 header element named .about-h1', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find('.about-h1').length).to.equal(1);
    });

    it('Should render the section element named .about-section', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find('.about-section').length).to.equal(1);
    });

    it('Should render two paragraph elements named .about-p', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find('.about-p').length).to.equal(2);
    });

    it('Should render six paragraph elements named .about-p-2', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find('.about-p-2').length).to.equal(6);
    });

    it('Should render six anchor elements named .about-link', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find('.about-link').length).to.equal(6);
    });
});