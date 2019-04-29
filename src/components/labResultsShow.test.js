import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {LabResultsShow} from './labResultsShow';

describe('<LabResultsShow />', () => {
    it('Should render without crashing', () => {
        shallow(<LabResultsShow />);
    });
});