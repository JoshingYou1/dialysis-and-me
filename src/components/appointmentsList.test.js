import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import {AppointmentsList} from './appointmentsList';

describe('<AppointmentsList />', () => {
    it('Should render without crashing', () => {
        shallow(<AppointmentsList />);
    });

    it('Should render the div element named .appointments-list-div when the isAppointmentInfoShowing prop is falsy', () => {
        const wrapper = shallow(<AppointmentsList />);
        expect(wrapper.find('.appointments-list-div').length).to.equal(1);
    });

    it('Should render the h2 header element named .appointments-list-h2', () => {
        const wrapper = shallow(<AppointmentsList />);
        expect(wrapper.find('.appointments-list-h2').length).to.equal(1);
    });

    it('Should render the ul element named .appointments-list', () => {
        const wrapper = shallow(<AppointmentsList />);
        expect(wrapper.find('.appointments-list').length).to.equal(1);
    });

    it('Should simulate click events', () => {
        const onListItemClick = sinon.spy();
        const wrapper = shallow(<AppointmentsList onClick={onListItemClick} />);
        wrapper.find('li').at(0).simulate('click');
        expect(onClick).to.have.property('callCount', 1);
    })
});

