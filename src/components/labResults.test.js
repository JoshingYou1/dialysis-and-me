import React from 'react';
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router';
import thunk from 'redux-thunk';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {LabResults} from './labResults';
import NavigationBar from './navBar';
import LabResultsList from './labResultsList';
import LabResultsShow from './labResultsShow';
import Footer from './footer';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

chai.use(spies);

const labResults = [
    {
        _id: '5cb699172459f123701f3168',
        date: '06/19/2012',
        hematology: {
            wbcCount: 6.42,
            rbcCount: 4.79,
            hemoglobin: 10.6,
            hematocrit: 29.4,
            plateletCount: 193
        },
        chemistry: {
            bun: 39,
            creatinine: 8.87,
            sodium: 121,
            potassium: 4.8,
            calcium: 11.1,
            phosphorus: 5.2,
            albumin: 5.1,
            glucose: 134,
            iron: 79,
            cholesterol: 210,
            triglycerides: 186
        },
        patient: '5cb694034859f123701f3159' 
    },
    {
        _id: '5cb699172459f123701f0264',
        date: '03/11/2015',
        hematology: {
            wbcCount: 6.40,
            rbcCount: 4.71,
            hemoglobin: 10.2,
            hematocrit: 29.8,
            plateletCount: 191
        },
        chemistry: {
            bun: 32,
            creatinine: 8.82,
            sodium: 111,
            potassium: 4.2,
            calcium: 11.3,
            phosphorus: 5.8,
            albumin: 5.2,
            glucose: 139,
            iron: 75,
            cholesterol: 201,
            triglycerides: 189
        },
        patient: '5cb694034859f123701f3159' 
    },
    {
        _id: '5cb026482459f123701f0264',
        date: '08/11/2014',
        hematology: {
            wbcCount: 6.21,
            rbcCount: 4.82,
            hemoglobin: 10.9,
            hematocrit: 31.2,
            plateletCount: 199
        },
        chemistry: {
            bun: 31,
            creatinine: 8.73,
            sodium: 103,
            potassium: 4.8,
            calcium: 11.7,
            phosphorus: 5.3,
            albumin: 5.9,
            glucose: 112,
            iron: 73,
            cholesterol: 202,
            triglycerides: 153
        },
        patient: '5cb694034859f123701f3159' 
    }
];

describe('<LabResults />', () => {
    let wrapper;
    let store;
    let initialState;
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
            }
        };
        store = mockStore(initialState);
    });
    
    it('Should render without crashing', () => {
        initialState.app.labResults = labResults;
        shallow(<LabResults />);
    });

    it('Should render the div element named .loading-div if the state of the isLoading prop is truthy', () => {
        initialState.app.isLoading = true;
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initalEntries={['/lab-results']}>
                    <LabResults />
                </MemoryRouter>
            </Provider>
        );
        expect(wrapper.find('.loading-div').length).to.equal(1);

    });

    it('Should render the NavigationBar component', () => {
        initialState.app.labResults = labResults;
        wrapper = shallow(<LabResults />);
        expect(wrapper.find(NavigationBar).length).to.equal(1);
    });

    it('Should render the LabResultsList component', () => {
        initialState.app.labResults = labResults;
        wrapper = shallow(<LabResults />);
        expect(wrapper.find(LabResultsList).length).to.equal(1);
    });

    it('Should render the LabResultsShow component', () => {
        initialState.app.labResults = labResults;
        wrapper = shallow(<LabResults />);
        expect(wrapper.find(LabResultsShow).length).to.equal(1);
    });
    
    it('Should render the Footer component', () => {
        initialState.app.labResults = labResults;
        wrapper = shallow(<LabResults />);
        expect(wrapper.find(Footer).length).to.equal(1);
    });

    it('Should fire the componentDidMount method and inject lab results into the state', () => {
        const dispatch = chai.spy();
        shallow(<LabResults dispatch={dispatch}/>);

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return labResults;
                }
            })
        );
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initalEntries={['/lab-results']}>
                    <LabResults />
                </MemoryRouter>
            </Provider>
        );
        expect(wrapper.find(LabResults).find('.container').length).to.equal(1);

        initialState.app.doctors = labResults;
        initialState.app.isLoading = false;
        wrapper.unmount();
        store = mockStore(initialState);
        // wrapper.update();
        //Since wrapper.update() is currently broken as of 4/19/19, I had to manually remount the component
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initalEntries={['/lab-results']}>
                    <LabResults />
                </MemoryRouter>
            </Provider>
        );
        wrapper.find(LabResults).render();
        // console.log('wrapper.find', wrapper.find(LabResults).html());
        expect(wrapper.find(LabResults).find('h1').length).to.equal(1);
    });
});