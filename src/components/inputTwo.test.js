import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import InputTwo from './inputTwo';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

describe('<InputTwo />', () => {
    let wrapper;
    let initialState;
    let store;
    beforeEach(() => {
        initialState = {
            app: {
                selectedAppointments: [],
                selectedLabResult: null,
                isSidebarShowing: false,
                labResults: [],
                isLabResultsInfoShowing: false,
                profile: [],
                loadedBasicProfileInfoFormData: {},
                isUserInfoShowing: false,
                section: 0,
                appointments: [],
                isAppointmentInfoShowing: false,
                areSublinksShowing: false,
                currentDoctor: 0,
                isCreateAppointmentFormShowing: false,
                isCreateDoctorFormShowing: false,
                isEditBasicProfileInfoFormShowing: false,
                selectedAppointmentToEdit: null,
                selectedDoctorToEdit: null,
                loadedAppointmentFormData: {},
                isDoctorMenuShowing: false,
                loadedDoctorFormData: {},
                doctors: [],
                areAppointmentsShowing: false,
                deletedAppointment: null,
                deletedDoctor: null,
                isLoading: true,
                animation: false,
                isEditAppointmentFormShowing: false,
                isEditDoctorFormShowing: false
            },
            auth: {
                loading: false,
                currentUser: {
                    _id: 1
                },
                error: null
            },
            form: {
                meta: {
                    touched: false,
                    error: null,
                    warning: null
                },
                input: {
                    name: null
                }
            }
        };
        store = mockStore(initialState);
    });

    it('Should render without crashing', () => {
        let meta = initialState.form.meta;
        let input = initialState.form.input;
        shallow(<InputTwo meta={meta} input={input}/>);
    });

    it('Should render the div element named .form-error if meta.error is called and meta.touched is truthy', () => {
        let meta = initialState.form.meta;
        let input = initialState.form.input;
        initialState.form.meta.touched = true;
        initialState.form.meta.error = <div>error</div>;
        wrapper = shallow(<InputTwo meta={meta} input={input}/>);
        expect(wrapper.find('div.form-error').length).to.equal(1);
    });

    it('Should render the div element named .form-warning if meta.warning is called and meta.touched is truthy', () => {
        let meta = initialState.form.meta;
        let input = initialState.form.input;
        initialState.form.meta.touched = true;
        initialState.form.meta.warning = <div>warning</div>;
        wrapper = shallow(<InputTwo meta={meta} input={input}/>);
        expect(wrapper.find('div.form-warning').length).to.equal(1);
    });

    it('Should render the div element named .form-input-2', () => {
        let meta = initialState.form.meta;
        let input = initialState.form.input;
        wrapper = shallow(<InputTwo meta={meta} input={input}/>);
        expect(wrapper.find('.form-input-2').length).to.equal(1);
    });
});