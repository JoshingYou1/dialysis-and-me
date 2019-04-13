import React from 'react';
import {shallow} from 'enzyme';

import {LabResultsList} from './labResultsList';

describe('<LabResultsList />', () => {
    it('Should render without crashing', () => {
        shallow(<LabResultsList />);
    });
});