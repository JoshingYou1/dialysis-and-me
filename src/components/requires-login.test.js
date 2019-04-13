import React from 'react';
import {shallow} from 'enzyme';

import {RequiresLogin} from './requires-login';
import NavigationBar from './navBar';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import Footer from './footer';

describe('<RequiresLogin />', () => {
    it('Should render without crashing', () => {
        shallow(<RequiresLogin />);
    });

    it('Should render the NavigationBar component', () => {
        shallow(<NavigationBar />);
    });

    it('Should render the Redirect component', () => {
        shallow(
            <Router>
                <Redirect />
            </Router>
        );
    });

    it('Should render the Footer component', () => {
        shallow(<Footer />);
    });
});