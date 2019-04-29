import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {SecondaryInsuranceInfo} from './secondaryInsuranceInfo';

describe('<SecondaryInsuranceInfo />', () => {
    it('Should render without crashing', () => {
        shallow(<SecondaryInsuranceInfo />);
    });
});