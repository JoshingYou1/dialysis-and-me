import React from 'react';
import {shallow} from 'enzyme';

import {ESRDInfo} from './esrdInfo';
import NavigationBar from './navBar';
import Footer from './footer';

describe('<ESRDInfo />', () => {
    it('Should render without crashing', () => {
        shallow(<ESRDInfo />);
    });

    it('Should render the NavigationBar component', () => {
        shallow(<NavigationBar />);
    });

    it('Should render the Footer component', () => {
        shallow(<Footer />);
    });
});