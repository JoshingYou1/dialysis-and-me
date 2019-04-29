import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import Input from './input';

describe('<Input />', () => {
    it('Should render without crashing', () => {
        shallow(<Input />);
    });
});