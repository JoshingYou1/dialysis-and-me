import React from 'react';
import {connect} from 'react-redux';

export function LabResultsShow(props) {
    if (props.chosenLabResult) {
        return (
            <div className="show">
                <h1></h1>
                <section>
                    <p>Hemoglobin: {props.chosenLabResult.hematology.hemoglobin}</p>
                </section>
            </div>
        );
    } else {
        return (
            <div className="show">Please select a lab result</div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        chosenLabResult: state.app.selectedLabResult
    }
};

export default connect(mapStateToProps)(LabResultsShow);