import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {Profile} from './profile';
import NavigationBar from './navBar';
import PrimaryInsuranceInfo from './primaryInsuranceInfo';
import SecondaryInsuranceInfo from './secondaryInsuranceInfo';
import TreatmentInfo from './treatmentInfo';
import EditBasicProfileInfoForm from './editBasicProfileInfoForm';
import Footer from './footer';
import { selectProfileInfoSection } from '../actions';

chai.use(spies);

const profile = {
    _id: '5cb601649279f123701f3168',
        name: {
            firstName: 'Jericho',
            lastName: 'Cotchery'
        },
        dateOfBirth: '02/18/1976',
        sex: 'Male',
        socialSecurityNumber: '976578653',
        address: {
            street: '89 Stillwater Circle',
            city: 'Jacksonville',
            state: 'FL',
            zipCode: '38273'
        },
        phoneNumbers: {
            home: '904-876-8786',
            cell: '904-454-9787',
            work: null
        },
        primaryInsurance: {
            insuranceCompany: 'Cigna',
            nameOfCardHolder: {
                firstName: 'Jericho',
                lastName: 'Cotchery'
            },
            policyNumber: 843886479,
            dateOfBirthOfCardHolder: '02/18/1976',
            socialSecurityNumberOfCardHolder: '976578653'
        },
        secondaryInsurance: {
            insuranceCompany: 'Ally Health',
            nameOfCardHolder: {
                firstName: 'Jericho',
                lastName: 'Cotchery'
            },
            policyNumber: 738265749,
            dateOfBirthOfCardHolder: '02/18/1976',
            socialSecurityNumberOfCardHolder: '976578653'
        },
        treatmentDays: 'Tue/Thu/Sat',
        treatmentTime: '11:30 a.m.',
        labResults: [
            '5cb699172459f123701f3168',
            '5cb699172459f123701f0264',
            '5cb026482459f123701f0264'
        ],
        clinic: '9d9236482459f123701f0264',
        doctors: [
            '5cb694034859f123701f3168',
            '5cb694034859f123701w9173'
        ],
        appointments: [
            '5cb694034859fh37701f316e',
            '5cb694034859f123701f316d',
            '5cb694034859f123701f316f'
        ],
        username: 'robert.jones',
        password: 'hello'
}

describe('<Profile />', () => {
    it('Should render without crashing', () => {
        const props = {
            user: {
                _id: 1
            },
            profile: {},
            section: 0,
            isEditBasicProfileInfoFormShowing: false,
            loadedBasicProfileInfoFormData: {},
            isMessageShowing: false,
            isLoading: true,
            dispatch: chai.spy()
        };
        shallow(<Profile {...props} />);
    });

    it('Should render the NavigationBar component', () => {
        const props = {
            user: {
                _id: 1
            },
            profile: profile,
            section: 0,
            isEditBasicProfileInfoFormShowing: false,
            loadedBasicProfileInfoFormData: {},
            isMessageShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Profile {...props} />);
        expect(wrapper.find(NavigationBar).length).to.equal(1);
    });

    it('Should render the PrimaryInsuranceInfo component if the section prop is equal to 1', () => {
        const props = {
            user: {
                _id: 1
            },
            profile: profile,
            section: 1,
            isEditBasicProfileInfoFormShowing: false,
            loadedBasicProfileInfoFormData: {},
            isMessageShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Profile {...props} />);
        expect(wrapper.find(PrimaryInsuranceInfo).length).to.equal(1);
    });

    it('Should render the SecondaryInsuranceInfo component if the section prop is equal to 2', () => {
        const props = {
            user: {
                _id: 1
            },
            profile: profile,
            section: 2,
            isEditBasicProfileInfoFormShowing: false,
            loadedBasicProfileInfoFormData: {},
            isMessageShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Profile {...props} />);
        expect(wrapper.find(SecondaryInsuranceInfo).length).to.equal(1);
    });

    it('Should render the TreatmentInfo component if the section prop is equal to 3', () => {
        const props = {
            user: {
                _id: 1
            },
            profile: profile,
            section: 1,
            isEditBasicProfileInfoFormShowing: false,
            loadedBasicProfileInfoFormData: {},
            isMessageShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Profile {...props} />);
        expect(wrapper.find(TreatmentInfo).length).to.equal(1);
    });

    it('Should render the EditBasicProfileInfoForm component', () => {
        const props = {
            user: {
                _id: 1
            },
            profile: profile,
            section: 0,
            isEditBasicProfileInfoFormShowing: false,
            loadedBasicProfileInfoFormData: {},
            isMessageShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Profile {...props} />);
        expect(wrapper.find(EditBasicProfileInfoForm).length).to.equal(1);
    });

    it('Should render the Footer component', () => {
        const props = {
            user: {
                _id: 1
            },
            profile: profile,
            section: 0,
            isEditBasicProfileInfoFormShowing: false,
            loadedBasicProfileInfoFormData: {},
            isMessageShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Profile {...props} />);
        expect(wrapper.find(Footer).length).to.equal(1);
    });

    it('Calls componentDidMount', () => {
        const props = {
            user: {
                _id: 1
            },
            profile: profile,
            section: 0,
            isEditBasicProfileInfoFormShowing: false,
            loadedBasicProfileInfoFormData: {},
            isMessageShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        };
        chai.spy.on(Profile.prototype, 'componentDidMount');
        const wrapper = shallow(<Profile {...props} />);
        expect(Profile.prototype.componentDidMount).to.have.been.called.once;
    });

    it(`Should dispatch the actions chooseEditBasicProfileInfo and loadBasicProfileInfoFormData when the button element named
    .edit-profile-button is clicked`, () => {
        const props = {
            user: {
                _id: 1
            },
            profile: profile,
            section: 0,
            isEditBasicProfileInfoFormShowing: false,
            loadedBasicProfileInfoFormData: {},
            isMessageShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Profile {...props} />);
        const instance = wrapper.instance();
        wrapper.find('.edit-profile-button').simulate('click');
        expect(instance.props.dispatch.chooseEditBasicProfileInfo).to.have.been.called.once;
    });

    it('Should dispatch the action selectProfileInfoSection when the button named .display-profile-section-button-1 is clicked', () => {
        const props = {
            user: {
                _id: 1
            },
            profile: profile,
            section: 1,
            isEditBasicProfileInfoFormShowing: false,
            loadedBasicProfileInfoFormData: {},
            isMessageShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        };

        const wrapper = shallow(<Profile {...props} />);
        const instance = wrapper.instance();
        wrapper.find('.display-profile-section-button-1').simulate('click');
        expect(instance.props.dispatch).to.have.been.called.once;
    });
});