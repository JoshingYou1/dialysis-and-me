import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {RequiresLogin} from './requiresLogin';
import NavigationBar from './navBar';
import {Redirect} from 'react-router-dom';
import Footer from './footer';

describe('<RequiresLogin />', () => {
    it('Should render without crashing', () => {
        const props = {
            authenticating: false,
            loggedIn: null,
            error: null
        };
        shallow(<RequiresLogin {...props} />);
    });

    it('Should render the NavigationBar component if the authenticating prop is truthy', () => {
        const props = {
            authenticating: true,
            loggedIn: null,
            error: null
        };
        const wrapper = shallow(<RequiresLogin {...props} />);
        expect(wrapper.find(NavigationBar).length).to.equal(1);
    });

    it('Should render the Redirect component if the loggedIn prop or the error prop are not null', () => {
        const props = {
            authenticating: true,
            loggedIn: {
                id: '5cc94nb7f618433734fcfd08', 
                username: 'joshua.johnson'
            },
            error: null
        };
        const wrapper = shallow(<RequiresLogin {...props} />);
        expect(wrapper.find(Redirect).length).to.equal(1);
    });

    it('Should render the Footer component if the authenticating prop is truthy', () => {
        const props = {
            authenticating: true,
            loggedIn: null,
            error: null
        };
        const wrapper = shallow(<RequiresLogin {...props} />);
        expect(wrapper.find(Footer).length).to.equal(1);
    });
});