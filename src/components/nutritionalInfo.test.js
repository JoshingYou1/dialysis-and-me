import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {NutritionalInfo} from './nutritionalInfo';
import NavigationBar from './navBar';
import Footer from './footer';

describe('<NutritionalInfo />', () => {
    it('Should render without crashing', () => {
        shallow(<NutritionalInfo />);
    });

    it('Should render the NavigationBar component', () => {
        shallow(<NavigationBar />);
    });

    it('Should render the Footer component', () => {
        shallow(<Footer />);
    });
});