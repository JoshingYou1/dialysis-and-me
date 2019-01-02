import React from 'react';
import {connect} from 'react-redux';
import { PrimaryInsuranceInfo } from './primaryInsuranceInfo';
import { SecondaryInsuranceInfo } from './secondaryInsuranceInfo';

export function InsuranceInfo(props) {
    return (
        <div>
            <h1>Insurance Information</h1>
            <section>
                <PrimaryInsuranceInfo />
                <SecondaryInsuranceInfo />
            </section>
        </div>
    );
}

export default connect()(InsuranceInfo);