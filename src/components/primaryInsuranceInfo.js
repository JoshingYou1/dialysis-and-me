import React from 'react';
import {connect} from 'react-redux';

export function PrimaryInsuranceInfo(props) {
    if (props.profile.primaryInsurance) {
        return (
            <div className="card">
                <h1 className="primary-insurance-h1">Primary Insurance Information</h1>
                <section className="primary-insurance-info-section">
                    
                    <span className="grid-c-span">Insurance company:</span>
                    <span className="grid-d-span">{props.profile.primaryInsurance.insuranceCompany}</span>

                    <span className="grid-c-span">Card holder's name:</span>
                    <span className="grid-d-span">{props.profile.primaryInsurance.nameOfCardHolder.firstName} {props.profile.primaryInsurance.nameOfCardHolder.lastName}</span>

                    <span className="grid-c-span">Policy number:</span>
                    <span className="grid-d-span">{props.profile.primaryInsurance.policyNumber}</span>

                    <span className="grid-c-span">Card holder's DOB:</span>
                    <span className="grid-d-span">{props.profile.primaryInsurance.dateOfBirthOfCardHolder}</span>

                    <span className="grid-c-span">Card holder's SSN:</span>
                    <span className="grid-d-span">{props.profile.primaryInsurance.socialSecurityNumberOfCardHolder}</span>
                </section>
            </div>
        );
    }
    return (
        <div></div>
    );
}

const mapStateToProps = state => ({
    profile: state.app.profile
});

export default connect(mapStateToProps)(PrimaryInsuranceInfo);