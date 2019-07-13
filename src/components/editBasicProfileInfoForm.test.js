import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {EditBasicProfileInfoForm} from './editBasicProfileInfoForm';

describe('<EditBasicProfileInfoForm />', () => {
    it('Should render without crashing', () => {
        const props = {
            user: {
                _id: 1
            },
            authToken: 1,
            initialValues: {},
            isMessageShowing: false
        }
        shallow(<EditBasicProfileInfoForm {...props} />);
    });
});