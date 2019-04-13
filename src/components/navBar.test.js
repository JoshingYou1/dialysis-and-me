import React from 'react';
import {shallow} from 'enzyme';

import {NavigationBar} from './navBar';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import User from './user';
import Sidebar from './sidebar';

describe('<NavigationBar />', () => {
    it('Should render without crashing', () => {
        shallow(<NavigationBar />);
    });

    it('Should render the Link component', () => {
        shallow(
            <Router>
                <Link to=""/>
            </Router>
        );
    });

    it('Should render the User component', () => {
        shallow(<User />);
    });

    it('Should render the Sidebar component', () => {
        shallow(<Sidebar />);
    });
});

