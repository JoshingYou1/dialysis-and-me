import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import InputTwo from './inputTwo';

describe('<InputTwo />', () => {
    it('Should render without crashing', () => {
        shallow(<InputTwo />);
    });
});