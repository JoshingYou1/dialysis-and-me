import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {LandingPage} from './landingPage';
import {BrowserRouter as Router, Link, Redirect} from 'react-router-dom';

describe('<LandingPage />', () => {
    it('Should render without crashing', () => {
        shallow(<LandingPage />);
    });

    it('Should render the Redirect component', () => {
        shallow(
            <Router>
                <Redirect to=""/>
            </Router>
        );
    });

    it('Should render the Link component', () => {
        shallow(
            <Router>
                <Link />
            </Router>
        );
    });
});