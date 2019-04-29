import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {TreatmentInfo} from './treatmentInfo';

describe('<TreatmentInfo />', () => {
    it('Should render without crashing', () => {
        shallow(<TreatmentInfo />);
    });
});