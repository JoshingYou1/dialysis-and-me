import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import InputHidden from './inputHidden';

describe('<InputHidden />', () => {
    it('Should render without crashing', () => {
        shallow(<InputHidden />);
    });
});