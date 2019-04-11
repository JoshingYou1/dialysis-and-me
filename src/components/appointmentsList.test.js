import React from 'react';
import {shallow} from 'enzyme';

import {AppointmentsList} from './appointmentsList';

describe('<AppointmentsList />', () => {
    it('Should render without crashing', () => {
        shallow(<AppointmentsList />);
    });
});

