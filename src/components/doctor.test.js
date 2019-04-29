import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {Doctor} from './doctor';

describe('<Doctor />', () => {
    // let d = props.doctor;

    it('Should render without crashing', () => {
        shallow(<Doctor doctor={d} />);
    });
});