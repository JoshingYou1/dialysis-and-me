import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {PrimaryInsuranceInfo} from './primaryInsuranceInfo';

describe('<PrimaryInsuranceInfo />', () => {
    it('Should render without crashing', () => {
        shallow(<PrimaryInsuranceInfo />);
    });
});