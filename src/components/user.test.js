import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {User} from './user';

describe('<User />', () => {
    it('Should render without crashing', () => {
        shallow(<User />);
    });
});