import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {CreateDoctorForm} from './createDoctorForm';

describe('<CreateDoctorForm />', () => {
    it('Should render without crashing', () => {
        const props = {
            user: {
                _id: 1
            },
            authToken: 1,
            isMessageShowing: false
        };
        shallow(<CreateDoctorForm {...props} />);
    });
});