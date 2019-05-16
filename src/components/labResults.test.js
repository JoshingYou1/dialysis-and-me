import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {LabResults} from './labResults';
import NavigationBar from './navBar';
import LabResultsList from './labResultsList';
import LabResultsShow from './labResultsShow';
import Footer from './footer';

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
    it('Should render without crashing', () => {
        const props = {
            user: {
                _id: 1
            },
            labResults: [],
            isLabResultsInfoShowing: false,
            isLoading: true,
            dispatch: chai.spy()
        }
        shallow(<LabResults {...props} />);
    });

    it('Should render the div element named .loading-div if the state of the isLoading prop is truthy', () => {
        const props = {
            user: {
                _id: 1
            },
            labResults: [],
            isLabResultsInfoShowing: false,
            isLoading: true,
            dispatch: chai.spy()
        }
        const wrapper = shallow(<LabResults {...props} />);
        expect(wrapper.find('.loading-div').length).to.equal(1);

    });

    it('Should render the NavigationBar component', () => {
        const props = {
            user: {
                _id: 1
            },
            labResults: labResults,
            isLabResultsInfoShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        }
        const wrapper = shallow(<LabResults {...props} />);
        expect(wrapper.find(NavigationBar).length).to.equal(1);
    });

    it('Should render the LabResultsList component', () => {
        const props = {
            user: {
                _id: 1
            },
            labResults: labResults,
            isLabResultsInfoShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        }
        const wrapper = shallow(<LabResults {...props} />);
        expect(wrapper.find(LabResultsList).length).to.equal(1);
    });

    it('Should render the LabResultsShow component', () => {
        const props = {
            user: {
                _id: 1
            },
            labResults: labResults,
            isLabResultsInfoShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        }
        const wrapper = shallow(<LabResults {...props} />);
        expect(wrapper.find(LabResultsShow).length).to.equal(1);
    });
    
    it('Should render the Footer component', () => {
        const props = {
            user: {
                _id: 1
            },
            labResults: labResults,
            isLabResultsInfoShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        }
        const wrapper = shallow(<LabResults {...props} />);
        expect(wrapper.find(Footer).length).to.equal(1);
    });

    it('Calls componentDidMount', () => {
        const props = {
            user: {
                _id: 1
            },
            labResults: [],
            isLabResultsInfoShowing: false,
            isLoading: true,
            dispatch: chai.spy()
        };
        chai.spy.on(LabResults.prototype, 'componentDidMount');
        const wrapper = shallow(<LabResults {...props} />);
        expect(LabResults.prototype.componentDidMount).to.have.been.called.once;
    });

    it('Should render the section element named .lab-results-section if there are lab results', () => {
        const props = {
            user: {
                _id: 1
            },
            labResults: labResults,
            isLabResultsInfoShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        }
        const wrapper = shallow(<LabResults {...props} />);
        expect(wrapper.find('.lab-results-section').length).to.equal(1);
    });

    it('Should render the div element named .no-lab-results-div if there are no lab results', () => {
        const props = {
            user: {
                _id: 1
            },
            labResults: [],
            isLabResultsInfoShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        }
        const wrapper = shallow(<LabResults {...props} />);
        expect(wrapper.find('.no-lab-results-div').length).to.equal(1);
    });
});