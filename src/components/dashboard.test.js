import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {Dashboard} from './dashboard';
import NavigationBar from './navBar';
import Footer from './footer';
import {BrowserRouter as Router, Link} from 'react-router-dom';

describe('<Dashboard />', () => {
    it('Should render without crashing', () => {
        shallow(<Dashboard />);
    });

    it('Should render the NavigationBar component', () => {
        shallow(<NavigationBar />);
    });
    
    it('Should render the Footer component', () => {
        shallow(<Footer />);
    });

    it('Should render the Link component', () => {
        shallow(
            <Router>
                <Link to=""/>
            </Router>
        );
    });
});