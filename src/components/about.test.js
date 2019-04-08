import React from 'react';
import {shallow, mount} from 'enzyme';

import About from './about';
import NavigationBar from './navBar';
import Footer from './footer';

describe('<About />', () => {
    it('Should render without crashing', () => {
        const dispatch = jest.fn();
        shallow(<About dispatch={dispatch} />);
    });

    it('Should render the navigation bar', () => {
        const dispatch = jest.fn();
        shallow(<NavigationBar dispatch={dispatch} />);
    });
    
    it('Should render the footer', () => {
        const dispatch = jest.fn();
        shallow(<Footer dispatch={dispatch} />);
    });
});