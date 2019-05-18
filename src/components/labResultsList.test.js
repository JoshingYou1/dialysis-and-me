import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {LabResultsList} from './labResultsList';
import { triggerAnimation } from '../actions';

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

const list = [
    {
        _id: '5cb699172459f123701f3168',
        date: '06/19/2012'
    },
    {
        _id: '5cb699172459f123701f0264',
        date: '03/11/2015'
    },
    {
        _id: '5cb026482459f123701f0264',
        date: '08/11/2014'
    }
];

function chooseLabResults(choice) {
        labResults.find(result => {
            return result._id === choice;
    });
}

describe('<LabResultsList />', () => {
    it('Should render without crashing', () => {
        const props = {
            isLabResultsInfoShowing: false
        };
        shallow(<LabResultsList list={list} {...props} />);
    });

    it('Should dispatch the action triggerAnimation when the li element named .lab-results-list-item is clicked on', () => {
        const props = {
            isLabResultsInfoShowing: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<LabResultsList list={list} chooseLabResults={() => chooseLabResults} {...props} />);
        const instance = wrapper.instance();
        expect(wrapper.find('.lab-results-list-item').length).to.equal(3);
        wrapper.find('li').at(0).simulate('click');
        expect(instance.props.dispatch).to.have.been.called.with(triggerAnimation());
    });

    it('Should render the div element named .lab-results-list-div', () => {
        const props = {
            isLabResultsInfoShowing: false
        };
        const wrapper = shallow(<LabResultsList list={list} {...props} />);
        expect(wrapper.find('.lab-results-list-div').length).to.equal(1);
    });
});