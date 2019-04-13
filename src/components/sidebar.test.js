import React from 'react';
import {shallow} from 'enzyme';

import {Sidebar} from './sidebar';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Sublinks from './sublinks';

describe('<Sidebar />', () => {
    it('Should render without crashing', () => {
        shallow(<Sidebar />);
    });

    it('Should render the Link component', () => {
        shallow(
            <Router>
                <Link to=""/>
            </Router>
        );
    });

    it('Should render the Sublinks component', () => {
        shallow(<Sublinks />);
    });
});