import React from 'react';
import {shallow, mount} from 'enzyme';

import About from './about';
import NavigationBar from './navBar';
import Footer from './footer';

describe('<About />', () => {
    it('Should render without crashing', () => {
        shallow(<About />);
    });

    it('Should render the NavigationBar component', () => {
        shallow(<NavigationBar />);
    });

    it('Should render the Footer component', () => {
        shallow(<Footer />);
    });
});