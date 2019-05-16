import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {NutritionalInfo} from './nutritionalInfo';
import NavigationBar from './navBar';
import Footer from './footer';

describe('<NutritionalInfo />', () => {
    it('Should render without crashing', () => {
        shallow(<NutritionalInfo />);
    });

    it('Should render the NavigationBar component', () => {
        const wrapper = shallow(<NutritionalInfo />);
        expect(wrapper.find(NavigationBar).length).to.equal(1);
    });

    it('Should render the Footer component', () => {
        const wrapper = shallow(<NutritionalInfo />);
        expect(wrapper.find(Footer).length).to.equal(1);
    });

    it('Should render the div element named .container', () => {
        const wrapper = shallow(<NutritionalInfo />);
        expect(wrapper.find('.container').length).to.equal(1);
    });

    it('Should render the section element named .nutritional-info-section', () => {
        const wrapper = shallow(<NutritionalInfo />);
        expect(wrapper.find('.nutritional-info-section').length).to.equal(1);
    });
});