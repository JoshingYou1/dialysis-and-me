import React from 'react';
import {connect} from 'react-redux';

export function SecondaryInsuranceInfo(props) {

    let formattedSsn = `${props.profile.secondaryInsurance.socialSecurityNumberOfCardHolder[0]}${props.profile.secondaryInsurance.socialSecurityNumberOfCardHolder[1]}${props.profile.secondaryInsurance.socialSecurityNumberOfCardHolder[2]}-${props.profile.secondaryInsurance.socialSecurityNumberOfCardHolder[3]}${props.profile.secondaryInsurance.socialSecurityNumberOfCardHolder[4]}-${props.profile.secondaryInsurance.socialSecurityNumberOfCardHolder[5]}${props.profile.secondaryInsurance.socialSecurityNumberOfCardHolder[6]}${props.profile.secondaryInsurance.socialSecurityNumberOfCardHolder[7]}${props.profile.secondaryInsurance.socialSecurityNumberOfCardHolder[8]}`;

    if (props.profile.secondaryInsurance) {
        return (
            <div className="card">
                <h1 className="secondary-insurance-h1">Secondary Insurance Information</h1>
                <section className="secondary-insurance-info-section">
                    
                    <span className="grid-c-span">Insurance company:</span>
                    <span className="grid-d-span">{props.profile.secondaryInsurance.insuranceCompany}</span>

                    <span className="grid-c-span">Card holder's name:</span>
                    <span className="grid-d-span">{props.profile.secondaryInsurance.nameOfCardHolder.firstName} {props.profile.secondaryInsurance.nameOfCardHolder.lastName}</span>

                    <span className="grid-c-span">Policy number:</span>
                    <span className="grid-d-span">{props.profile.secondaryInsurance.policyNumber}</span>

                    <span className="grid-c-span">Card holder's DOB:</span>
                    <span className="grid-d-span">{props.profile.secondaryInsurance.dateOfBirthOfCardHolder}</span>

                    <span className="grid-c-span">Card holder's SSN:</span>
                    <span className="grid-d-span">{formattedSsn}</span>
                </section>
            </div>
        );
    }
    return (
        <div>
            <p>You do not have any secondary insurance policy on record at this time.</p>
        </div>
    );
}

const mapStateToProps = state => ({
    profile: state.app.profile
});

export default connect(mapStateToProps)(SecondaryInsuranceInfo);