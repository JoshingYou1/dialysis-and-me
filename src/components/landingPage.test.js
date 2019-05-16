import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {LandingPage} from './landingPage';
import Redirect from './landingPage';
import Link from './landingPage';

const currentUser = {
    id: '5cc3ad03c618433734f719be', 
    username: 'joshua.johnson'
};

describe('<LandingPage />', () => {
    it('Should render without crashing', () => {
        const props = {
            currentUser: null
        };
        shallow(<LandingPage {...props} />);
    });

    it('Should render the Redirect component if the prop loggedIn is not null', () => {
        const props = {
            currentUser: currentUser
        };
        const wrapper = shallow(<LandingPage {...props} />);
        expect(wrapper.find(Redirect)).to.exist;
    });

    it('Should render the Link component', () => {
        const props = {
            currentUser: null
        };
        const wrapper = shallow(<LandingPage {...props} />);
        expect(wrapper.find(Link)).to.exist;
    });

    it('Should render the div element named .landing-page-container', () => {
        const props = {
            currentUser: null
        };
        const wrapper = shallow(<LandingPage {...props} />);
        expect(wrapper.find('.landing-page-container').length).to.equal(1);
    });
});