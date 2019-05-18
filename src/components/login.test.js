import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {Login} from './login';
import {Redirect} from 'react-router-dom';
import LoginForm from './loginForm';

const currentUser = {
    id: '5cc3ad03c618433734f719be', 
    username: 'joshua.johnson'
};

describe('<Login />', () => {
    it('Should render without crashing', () => {
        const props = {
            auth: {
                currentUser: null
            }
        };
        shallow(<Login {...props} />);
    });

    it('Should render the Redirect component if the prop loggedIn is not null', () => {
        const props = {
            auth: {
                currentUser: currentUser
            }
        };
        const wrapper = shallow(<Login {...props} />);
        expect(wrapper.find(Redirect)).to.exist;
    });

    it('Should render the LoginForm component', () => {
        const props = {
            auth: {
                currentUser: null
            }
        };
        const wrapper = shallow(<Login {...props} />);
        expect(wrapper.find(LoginForm).length).to.equal(1);
    });
});