import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import spies from 'chai-spies';

import {Doctors} from './doctors';
import NavigationBar from './navBar';
import Footer from './footer';
import Doctor from './doctor';
import CreateDoctorForm from './createDoctorForm';
import EditDoctorForm from './editDoctorForm';
import { toggleDoctorList, updateCurrentDoctor, triggerAnimation, chooseCreateDoctor } from '../actions';

chai.use(spies);

const doctors = [
    {
        address: {
            city: 'Jacksonville',
            state: 'FL',
            street: '436 East Rutherford Dr',
            zipCode: 34232
        },
        company: 'Mayo Clinic',
        faxNumber: '904-743-2743',
        name: {
            firstName: 'Joseph',
            lastName: 'Armstrong'
        },
        patients: ['5cb694034859f123701f3159'],
        phoneNumber: '904-743-9433',
        practice: 'Hematology',
        _id: '5cb694034859f123701f3168'
    },
    {
        address: {
            city: 'Orange Park',
            state: 'FL',
            street: '90 West Bay St',
            zipCode: 34932
        },
        company: 'Oncologists of North Florida',
        faxNumber: '904-293-3948',
        name: {
            firstName: 'Michael',
            lastName: 'Dickerson'
        },
        patients: ['5cb694034859f123701f9284'],
        phoneNumber: '904-293-9183',
        practice: 'Oncology',
        _id: '5cb694034859f123701w9173'
    }
];

const deletedDoctor = {
    address: {
        city: 'Orange Park',
        state: 'FL',
        street: '90 West Bay St',
        zipCode: 34932
    },
    company: 'Oncologists of North Florida',
    faxNumber: '904-293-3948',
    name: {
        firstName: 'Michael',
        lastName: 'Dickerson'
    },
    patients: ['5cb694034859f123701f9284'],
    phoneNumber: '904-293-9183',
    practice: 'Oncology',
    _id: '5cb694034859f123701w9173'
};

const cards = doctors.map((d, i) => {
    return {
        previous: i === 0 ? null : i - 1,
        next: i === doctors.length - 1 ? null : i + 1,
        doctor: d
    };
});

describe('<Doctors />', () => {
    it('Should render without crashing', () => {
        const props = {
            user: {
                _id: 1
            },
            currentDoctor: 0,
            doctors: [],
            selectedDoctorToEdit: null,
            isCreateDoctorFormShowing: false,
            isMessageShowing: false,
            deletedDoctor: null,
            isLoading: true,
            animation: false,
            dispatch: chai.spy()
        };
        shallow(<Doctors {...props} />);
    });

    it('Should render the NavigationBar component', () => {
        const props = {
            user: {
                _id: 1
            },
            currentDoctor: 0,
            doctors: doctors,
            selectedDoctorToEdit: null,
            isCreateDoctorFormShowing: false,
            isMessageShowing: false,
            deletedDoctor: null,
            isLoading: false,
            animation: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Doctors {...props} />);
        expect(wrapper.find(NavigationBar).length).to.equal(1);
    });

    it('Should render the Footer component', () => {
        const props = {
            user: {
                _id: 1
            },
            currentDoctor: 0,
            doctors: doctors,
            selectedDoctorToEdit: null,
            isCreateDoctorFormShowing: false,
            isMessageShowing: false,
            deletedDoctor: null,
            isLoading: false,
            animation: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Doctors {...props} />);
        expect(wrapper.find(Footer).length).to.equal(1);
    });

    it('Should render the Doctor component', () => {
        const props = {
            user: {
                _id: 1
            },
            currentDoctor: 0,
            doctors: doctors,
            selectedDoctorToEdit: null,
            isCreateDoctorFormShowing: false,
            isMessageShowing: false,
            deletedDoctor: null,
            isLoading: false,
            animation: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Doctors {...props} />);
        expect(wrapper.find(Doctor).length).to.equal(1);
    });

    it('Should render the CreateDoctorForm component', () => {
        const props = {
            user: {
                _id: 1
            },
            currentDoctor: 0,
            doctors: doctors,
            selectedDoctorToEdit: null,
            isCreateDoctorFormShowing: false,
            isMessageShowing: false,
            deletedDoctor: null,
            isLoading: false,
            animation: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Doctors {...props} />);
        expect(wrapper.find(CreateDoctorForm).length).to.equal(1);
    });

    it('Should render the EditDoctorForm component', () => {
        const props = {
            user: {
                _id: 1
            },
            currentDoctor: 0,
            doctors: doctors,
            selectedDoctorToEdit: null,
            isCreateDoctorFormShowing: false,
            isMessageShowing: false,
            deletedDoctor: null,
            isLoading: false,
            animation: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Doctors {...props} />);
        expect(wrapper.find(EditDoctorForm).length).to.equal(1);
    });

    it(`Should dispatch the action toggleDoctorList if the prop deletedDoctor is populated and the button element named .message-button 
    is clicked`, () => {
        const props = {
            user: {
                _id: 1
            },
            currentDoctor: 0,
            doctors: doctors,
            selectedDoctorToEdit: null,
            isCreateDoctorFormShowing: false,
            isMessageShowing: false,
            deletedDoctor: deletedDoctor,
            isLoading: false,
            animation: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Doctors {...props} />);
        const instance = wrapper.instance();
        wrapper.find('.message-button').simulate('click');
        expect(instance.props.dispatch).to.have.been.called.with(toggleDoctorList());
    });

    it(`Should dispatch the actions updateCurrentDoctor and triggerAnimation if the prop doctors has a length greater than zero and 
    the button element named .display-doctor-button-1 is clicked`, () => {
        const props = {
            user: {
                _id: 1
            },
            currentDoctor: 1,
            doctors: doctors,
            selectedDoctorToEdit: null,
            isCreateDoctorFormShowing: false,
            isMessageShowing: false,
            deletedDoctor: null,
            isLoading: false,
            animation: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Doctors {...props} />);
        const instance = wrapper.instance();
        wrapper.find('.display-doctor-button-1').simulate('click');
        expect(instance.props.dispatch).to.have.been.called.with(updateCurrentDoctor(cards[props.currentDoctor].previous));
        expect(instance.props.dispatch).to.have.been.called.with(triggerAnimation());
    });

    it(`Should dispatch the actions updateCurrentDoctor and triggerAnimation if the prop doctors has a length greater than zero and 
    the button element named .display-doctor-button-2 is clicked`, () => {
        const props = {
            user: {
                _id: 1
            },
            currentDoctor: 0,
            doctors: doctors,
            selectedDoctorToEdit: null,
            isCreateDoctorFormShowing: false,
            isMessageShowing: false,
            deletedDoctor: null,
            isLoading: false,
            animation: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Doctors {...props} />);
        const instance = wrapper.instance();
        wrapper.find('.display-doctor-button-2').simulate('click');
        expect(instance.props.dispatch).to.have.been.called.with(updateCurrentDoctor(cards[props.currentDoctor].next));
        expect(instance.props.dispatch).to.have.been.called.with(triggerAnimation());
    });

    it(`Should dispatch the action chooseCreateDoctor if the prop doctors has a length greater than zero and 
    the button element named .create-doctor-button is clicked`, () => {
        const props = {
            user: {
                _id: 1
            },
            currentDoctor: 0,
            doctors: doctors,
            selectedDoctorToEdit: null,
            isCreateDoctorFormShowing: false,
            isMessageShowing: false,
            deletedDoctor: null,
            isLoading: false,
            animation: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Doctors {...props} />);
        const instance = wrapper.instance();
        wrapper.find('.create-doctor-button').simulate('click');
        expect(instance.props.dispatch).to.have.been.called.with(chooseCreateDoctor());
    });

    it(`Should dispatch the action chooseCreateDoctor if the prop doctors has a length of zero and 
    the button element named .create-doctor-button is clicked`, () => {
        const props = {
            user: {
                _id: 1
            },
            currentDoctor: 0,
            doctors: [],
            selectedDoctorToEdit: null,
            isCreateDoctorFormShowing: false,
            isMessageShowing: false,
            deletedDoctor: null,
            isLoading: false,
            animation: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Doctors {...props} />);
        const instance = wrapper.instance();
        wrapper.find('.create-doctor-button').simulate('click');
        expect(instance.props.dispatch).to.have.been.called.with(chooseCreateDoctor());
    });
});