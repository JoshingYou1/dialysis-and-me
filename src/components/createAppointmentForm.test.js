import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {CreateAppointmentForm} from './createAppointmentForm';

describe('<CreateAppointmentForm />', () => {
    it('Should render without crashing', () => {
        const props = {
            user: {
                _id: 1
            },
            authToken: 1,
            isMessageShowing: false
        };
        shallow(<CreateAppointmentForm {...props}/>);
    });
});