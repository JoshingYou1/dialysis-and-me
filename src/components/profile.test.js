import React from 'react';
import {shallow} from 'enzyme';

import {Profile} from './profile';
import NavigationBar from './navBar';
import PrimaryInsuranceInfo from './primaryInsuranceInfo';
import SecondaryInsuranceInfo from './secondaryInsuranceInfo';
import TreatmentInfo from './treatmentInfo';
import EditBasicProfileInfoForm from './editBasicProfileInfoForm';
import Footer from './footer';

describe('<Profile />', () => {
    it('Should render without crashing', () => {
        shallow(<Profile />);
    });

    it('Should render the NavigationBar component', () => {
        shallow(<NavigationBar />);
    });

    it('Should render the PrimaryInsuranceInfo component', () => {
        shallow(<PrimaryInsuranceInfo />);
    });

    it('Should render the SecondaryInsuranceInfo component', () => {
        shallow(<SecondaryInsuranceInfo />);
    });

    it('Should render the TreatmentInfo component', () => {
        shallow(<TreatmentInfo />);
    });

    it('Should render the EditBasicProfileInfoForm component', () => {
        shallow(<EditBasicProfileInfoForm />);
    });

    it('Should render the Footer component', () => {
        shallow(<Footer />);
    });
});