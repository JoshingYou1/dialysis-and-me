import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {LabResultsShow} from './labResultsShow';
import { toggleLabResultsInfo } from '../actions';

chai.use(spies);

const selectedLabResult = {
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
};

describe('<LabResultsShow />', () => {
    it('Should render without crashing', () => {
        const props = {
            chosenLabResult: null,
            isLabResultsInfoShowing: false,
            animation: false
        };
        shallow(<LabResultsShow {...props} />);
    });

    it('Should render the div element named .show-b if the prop chosenLabResult is populated', () => {
        const props = {
            chosenLabResult: selectedLabResult,
            isLabResultsInfoShowing: false,
            animation: false
        };
        const wrapper = shallow(<LabResultsShow {...props} />);
        expect(wrapper.find('.show-b').length).to.equal(1);
    });

    it('Should render the div element named .lab-results-show-text show-b mobile-hide if the prop chosenLabResult is null', () => {
        const props = {
            chosenLabResult: null,
            isLabResultsInfoShowing: false,
            animation: false
        };
        const wrapper = shallow(<LabResultsShow {...props} />);
        expect(wrapper.find('div.lab-results-show-text.show-b.mobile-hide').length).to.equal(1);
    });

    it('Should dispatch the action toggleLabResultsInfo when the button named .desktop-hide is clicked', () => {
        const props = {
            chosenLabResult: selectedLabResult,
            isLabResultsInfoShowing: false,
            animation: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<LabResultsShow {...props} />);
        const instance = wrapper.instance();
        wrapper.find('.desktop-hide').simulate('click');
        expect(instance.props.dispatch).to.have.been.called;
    });
});