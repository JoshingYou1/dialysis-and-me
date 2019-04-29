import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import LoginForm from './loginForm';
import {Field} from 'redux-form';

describe('<LoginForm />', () => {
    it('Should render without crashing', () => {
        shallow(<LoginForm />);
    });

    it('Should render the Field component', () => {
        shallow(<Field />);
    });
});