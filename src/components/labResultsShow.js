import React from 'react';
import {connect} from 'react-redux';

export function LabResultsShow(props) {
    return (
        <div>
            <h1></h1>
            <section>

            </section>
        </div>
    );
}

const mapStateToProps = state => ({
    chosenLabResult: state.selectedLabResult
});

export default connect(mapStateToProps)(LabResultsShow);