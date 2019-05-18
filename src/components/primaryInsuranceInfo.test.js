import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {PrimaryInsuranceInfo} from './primaryInsuranceInfo';

const profile = {
    _id: '5c9067ab7a373130a893ybec',
    address: {
        street: '456 International Drive',
        city: 'Jacksonville',
        state: 'FL',
        zipCode: 39199
    },
    appointments: [],
    doctors: [],
    dateOfBirth: '05/12/1965',
    name: {
        firstName: 'Jason',
        lastName: 'Merriman'
    },
    phoneNumbers: {
        home: '904-223-5455',
        cell: '904-423-8573',
        work: null
    },
    sex: 'Male',
    socialSecurityNumber: '987654321',
    treatmentDays: 'Tue/Thu/Sat',
    treatmentTime: '11:30 a.m.',
    primaryInsurance: {
        dateOfBirthOfCardHolder: '05/12/1965',
        insuranceCompany: 'Cigna',
        nameOfCardHolder: {
            firstName: 'Jason', 
            lastName: 'Merriman'
        },
        policyNumber: 739275412,
        socialSecurityNumberOfCardHolder: '987654321'
    }
};

describe('<PrimaryInsuranceInfo />', () => {
    it('Should render without crashing', () => {
        const props = {
            profile: profile
        };
        shallow(<PrimaryInsuranceInfo  {...props} />);
    });

    it('Should render two span elements named .grid-c-span and .grid-d-span if the prop profile is populated', () => {
        const props = {
            profile: profile
        };
        const wrapper = shallow(<PrimaryInsuranceInfo {...props} />);
        expect(wrapper.find('.grid-c-span').length).to.equal(5);
        expect(wrapper.find('.grid-d-span').length).to.equal(5);
    });
});