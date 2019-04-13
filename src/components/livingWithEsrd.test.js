import React from 'react';
import {shallow} from 'enzyme';

import LivingWithESRD from './livingWithEsrd';
import NavigationBar from './navBar';
import Footer from './footer';

describe('<LivingWithESRD />', () => {
    it('Should render without crashing', () => {
        shallow(<LivingWithESRD />);
    });

    it('Should render the NavigationBar component', () => {
        shallow(<NavigationBar />);
    });

    it('Should render the Footer component', () => {
        shallow(<Footer />);
    });
});