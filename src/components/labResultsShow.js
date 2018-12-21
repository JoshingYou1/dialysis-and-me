import React from 'react';
import {connect} from 'react-redux';
import { toggleLabResultsInfo } from '../actions';

export function LabResultsShow(props) {
    console.log('props.isLabResultsInfoShowing', props.isLabResultsInfoShowing);
    console.log('chosenLabResult', props.chosenLabResult);
    if (props.chosenLabResult) {
        return (
            <div className={"show " + (props.isLabResultsInfoShowing ? '' : 'hidden')}>
                <section>
                    <button className="desktop-hide" onClick={() => props.dispatch(toggleLabResultsInfo(false))}>
                        <span className="fas fa-times 2x"></span>
                    </button>
                    <p>
                        <span className="test-span">Hemoglobin:</span>
                        <span className="result-span">{props.chosenLabResult.hematology.hemoglobin}&nbsp;&nbsp;&nbsp;g/dL</span>
                    </p>
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