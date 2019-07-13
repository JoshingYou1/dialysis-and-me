import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {EditDoctorForm} from './editDoctorForm';

describe('<EditDoctorForm />', () => {
    it('Should render without crashing', () => {
        const props = {
            user: {
                _id: 1
            },
            authToken: 1,
            initialValues: {},
            selectedDoctorToEdit: {},
            isMessageShowing: false
        }
        shallow(<EditDoctorForm {...props} />);
    });
});