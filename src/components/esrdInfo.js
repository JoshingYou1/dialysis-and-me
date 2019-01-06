import React from 'react';
import {connect} from 'react-redux';

export function ESRDInfo(props) {
    return (
        <div>
            <h1>ESRD Information</h1>
            <section>
                <h2>Introduction</h2>
                <p>
                    Kidney failure, which is known as end-stage renal disease(ESRD), is the final stage of kidney of chronic kidney disease(CKD).
                </p>
                <h2>What causes kidney failure?</h2>
                <p>
                    Generally, kidney failure is caused by other health issues that have done irreversible damage to your kidneys over time. When
                    your kidneys are harmed, they may not perform as well as they are supposed to. The more your kidneys are damaged, the less
                    they are able to do their job, which will eventually result in chronic kidney failure(CKD).
                </p>
            </section>
        </div>
    );
}

export default connect()(ESRDInfo);