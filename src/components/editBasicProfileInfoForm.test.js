import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {EditBasicProfileInfoForm} from './editBasicProfileInfoForm';
import {Field} from 'redux-form';

chai.use(spies);

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

    // it('Should render the Field component', () => {
    //     const wrapper = shallow(<EditBasicProfileInfoForm />);
    //     expect(wrapper.find(Field).length).to.equal(9);
    // });
});