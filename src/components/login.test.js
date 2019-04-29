import React from 'react';
import {shallow} from 'enzyme';

import {Login} from './login';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import LoginForm from './loginForm';
import { expect } from 'chai';

describe('<Login />', () => {
    it('Should render without crashing', () => {
        shallow(<Login />);
    });

    it('Should render the Redirect component', () => {
        shallow(
            <Router>
                <Redirect to=""/>
            </Router>
        );
    });

    it('Should render the LoginForm component', () => {
        shallow(<LoginForm />);
    });
});