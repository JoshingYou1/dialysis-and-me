import React from 'react';
import {connect} from 'react-redux';

export function TreatmentInfo(props) {
    if (props.profile.primaryInsurance) {
        let treatmentDays = props.profile.treatmentDays ? props.profile.treatmentDays : 'N/A';
        
        let treatmentTime = props.profile.treatmentTime ? props.profile.treatmentTime : 'N/A';

        return (
            <div className="card">
                <h1 className="treatment-h1">Treatment Information</h1>
                <section className="treatment-info-section">
                    
                    <span className="grid-c-span">Clinic:</span>
                    <span className="grid-d-span">{props.profile.clinic.name}</span>

                    <span className="grid-c-span">Address</span>
                    <span className="grid-d-span">{props.profile.clinic.address.street}</span>
                    <span className="grid-c-span">City/State/Zip</span>
                    <span className="grid-d-span">
                        {props.profile.clinic.address.city},&nbsp;
                        {props.profile.clinic.address.state}&nbsp;
                        {props.profile.clinic.address.zipCode}
                    </span>

                    <span className="grid-c-span">Phone number:</span>
                    <span className="grid-d-span">{props.profile.clinic.phoneNumber}</span>

                    <span className="grid-c-span">Fax number:</span>
                    <span className="grid-d-span">{props.profile.clinic.faxNumber}</span>

                    <span className="grid-c-span">Clinic manager:</span>
                    <span className="grid-d-span">{props.profile.clinic.clinicManager.firstName} {props.profile.clinic.clinicManager.lastName}</span>

                    <span className="grid-c-span">Treatment days:</span>
                    <span className="grid-d-span">{treatmentDays}</span>

                    <span className="grid-c-span">Treatment time:</span>
                    <span className="grid-d-span">{treatmentTime}</span>
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

export default connect(mapStateToProps)(TreatmentInfo);