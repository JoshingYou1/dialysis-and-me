import React from 'react';
import {shallow} from 'enzyme';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { expect } from 'chai';

import {Sublinks} from './sublinks';

describe('<Sublinks />', () => {
    it('Should render without crashing', () => {
        shallow(<Sublinks />);
    });

    it('Should render the Link component', () => {
        shallow(
            <Router>
                <Link to=""/>
            </Router>
        );
    });
});