import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {TreatmentInfo} from './treatmentInfo';

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
    },
    clinic: {
        _id: '5c9069f5sq623130a893ybec',
        name: 'North Florida Dialysis',
        address: {
            street: '21 Maple Street',
            city: 'Jacksonville',
            state: 'FL',
            zipCode: '32034'
        },
        phoneNumber: '904-293-7502',
        faxNumber: '904-293-9342',
        clinicManager: {
            firstName: 'Sally',
            lastName: 'Simpson'
        },
        patients: [
            '5c9067ab7a373130a893ybec'
        ]
    }
};

const noTreatmentDaysProfile = {
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
    treatmentDays: null,
    treatmentTime: null,
    primaryInsurance: {
        dateOfBirthOfCardHolder: '05/12/1965',
        insuranceCompany: 'Cigna',
        nameOfCardHolder: {
            firstName: 'Jason', 
            lastName: 'Merriman'
        },
        policyNumber: 739275412,
        socialSecurityNumberOfCardHolder: '987654321'
    },
    clinic: null
};

describe('<TreatmentInfo />', () => {
    it('Should render without crashing', () => {
        const props = {
            profile: profile
        };
        shallow(<TreatmentInfo {...props} />);
    });

    it('Should render the div element named .card if props.profile.treatmentDays is not null', () => {
        const props = {
            profile: profile
        };
        const wrapper = shallow(<TreatmentInfo {...props} />);
        expect(wrapper.find('.card').length).to.equal(1);
    });

    it('Should render the div element name .no-treatment-info-div if props.profile.treatmentDays is null', () => {
        const props = {
            profile: noTreatmentDaysProfile
        };
        const wrapper = shallow(<TreatmentInfo {...props} />);
        expect(wrapper.find('.no-treatment-info-div').length).to.equal(1);
    })
});