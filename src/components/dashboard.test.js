import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {Dashboard} from './dashboard';
import NavigationBar from './navBar';
import Footer from './footer';
import {Link} from 'react-router-dom';

describe('<Dashboard />', () => {
    it('Should render without crashing', () => {
        shallow(<Dashboard />);
    });

    it('Should render the NavigationBar component', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(NavigationBar).length).to.equal(1);
    });
    
    it('Should render the Footer component', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(Footer).length).to.equal(1);
    });

    it('Should render the Link component', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(Link).length).to.equal(5);
    });

    it('Should render the container class', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find('.container').length).to.equal(1);
    });

    it('Should render the section element named .dashboard-links', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find('.dashboard-links').length).to.equal(1);
    });
});