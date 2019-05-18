import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {PatientEducation} from './patientEducation';
import Link from './patientEducation';
import NavigationBar from './navBar';
import Footer from './footer';

describe('<PatientEducation />', () => {
    it('Should render without crashing', () => {
        shallow(<PatientEducation />);
    });

    it('Should render the Link component', () => {
        const wrapper = shallow(<PatientEducation />);
        expect(wrapper.find(Link).length).to.exist;
    });

    it('Should render the NavigationBar component', () => {
        const wrapper = shallow(<PatientEducation />);
        expect(wrapper.find(NavigationBar).length).to.equal(1);
    });

    it('Should render the Footer component', () => {
        const wrapper = shallow(<PatientEducation />);
        expect(wrapper.find(Footer).length).to.equal(1);
    });

    it('Should render the div element named .container', () => {
        const wrapper = shallow(<PatientEducation />);
        expect(wrapper.find('.container').length).to.equal(1);
    });

    it('Should render the two section elements named .patient-education-section-1 and .patient-education-section-2', () => {
        const wrapper = shallow(<PatientEducation />);
        expect(wrapper.find('.patient-education-section-1').length).to.equal(1);
        expect(wrapper.find('.patient-education-section-2').length).to.equal(1);
    });
});