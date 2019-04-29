import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import InputThree from './inputThree';

describe('<InputThree />', () => {
    it('Should render without crashing', () => {
        shallow(<InputThree />);
    });
});