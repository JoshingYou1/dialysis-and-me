import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {PatientEducation} from './patientEducation';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import NavigationBar from './navBar';
import Footer from './footer';

describe('<PatientEducation />', () => {
    it('Should render without crashing', () => {
        shallow(<PatientEducation />);
    });

    it('Should render the Link component', () => {
        shallow(
            <Router>
                <Link to=""/>
            </Router>
        );
    });

    it('Should render the NavigationBar component', () => {
        shallow(<NavigationBar />);
    });

    it('Should render the Footer component', () => {
        shallow(<Footer />);
    });
});