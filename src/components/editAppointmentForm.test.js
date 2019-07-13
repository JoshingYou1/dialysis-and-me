import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {EditAppointmentForm} from './editAppointmentForm';

describe('<EditAppointmentForm />', () => {
    it('Should render without crashing', () => {
        const props = {
            user: {
                _id: 1
            },
            authToken: 1,
            initialValues: {},
            selectedAppointmentToEdit: {},
            isMessageShowing: false
        };
        shallow(<EditAppointmentForm {...props} />);
    });
});