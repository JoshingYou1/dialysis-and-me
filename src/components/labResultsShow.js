import React from 'react';
import {connect} from 'react-redux';
import { toggleLabResultsInfo } from '../actions';

export function LabResultsShow(props) {
    console.log('props.isLabResultsInfoShowing', props.isLabResultsInfoShowing);
    console.log('chosenLabResult', props.chosenLabResult);
    if (props.chosenLabResult) {
        return (
            <div className={"show " + (props.isLabResultsInfoShowing ? '' : 'hidden')}>
                <button className="desktop-hide" onClick={() => props.dispatch(toggleLabResultsInfo(false))}>
                    <span className="fas fa-times 2x"></span>
                </button>
                <section className="lab-results-show-section">
                    <h2 className="lab-results-show-h2">Hematology</h2>
                        <span className="test-span">WBC Count:</span>
                        <span className="result-span">{props.chosenLabResult.hematology.wbcCount}</span>
                        <span className="measurement-method-span">1000/mcL</span>

                        <span className="test-span">RBC Count:</span>
                        <span className="result-span">{props.chosenLabResult.hematology.rbcCount}</span>
                        <span className="measurement-method-span">mill/mcL</span>
    
                        <span className="test-span">Hemoglobin:</span>
                        <span className="result-span">{props.chosenLabResult.hematology.hemoglobin}</span>
                        <span className="measurement-method-span">g/dL</span>

                        <span className="test-span">Hematocrit:</span>
                        <span className="result-span">{props.chosenLabResult.hematology.hematocrit}</span>
                        <span className="measurement-method-span">%</span>

                        <span className="test-span">Platelet Count:</span>
                        <span className="result-span">{props.chosenLabResult.hematology.plateletCount}</span>
                        <span className="measurement-method-span">1000/mcL</span>

                    <h2 className="lab-results-show-h2">Chemistry</h2>
                        <span className="test-span">BUN:</span>
                        <span className="result-span">{props.chosenLabResult.chemistry.bun}</span>
                        <span className="measurement-method-span">mg/dL</span>

                        <span className="test-span">Creatinine:</span>
                        <span className="result-span">{props.chosenLabResult.chemistry.creatinine}</span>
                        <span className="measurement-method-span">mg/dL</span>
                </section>
            </div>
        );
    } else {
        return (
            <div className="show mobile-hide">Please select a lab result</div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        chosenLabResult: state.app.selectedLabResult,
        isLabResultsInfoShowing: state.app.isLabResultsInfoShowing
    }
};

export default connect(mapStateToProps)(LabResultsShow);