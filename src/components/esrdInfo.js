import React from 'react';
import {connect} from 'react-redux';

export function ESRDInfo(props) {
    return (
        <div>
            <h1>ESRD Information</h1>
            <section>
                <p>What is ESRD?</p>
            </section>
        </div>
    );
}

export default connect()(ESRDInfo);