import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import InputTwo from './inputTwo';
import {API_BASE_URL} from '../config';
import {required, nonEmpty} from '../validators';
import { connect } from 'react-redux';

export class EditDoctorForm extends React.Component {
    onSubmit(values) {
        return fetch(`${API_BASE_URL}/api/patients/${this.props.user.id}/doctors`, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.authToken}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    if (res.headers.has('content-type') && res.headers.get('content-type').startsWith('application/json')) {
                        return res.json()
                            .then(err => {
                                Promise.reject(err);
                            });
                    }
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                return;
            })
            .then(() => console.log('Submitted with values', values))
            .catch(err => {
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(
                    new SubmissionError({
                        _error: 'Error updating appointment'
                    })
                );
            });
    }
    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message success-message">
                    Doctor successfully updated!
                </div>
            );
        }
        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message error-message">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                {successMessage}
                {errorMessage}
                <label className="doctor-form-label" htmlFor="name.firstName"></label>
                <Field 
                    name="name.firstName"
                    type="text"
                    component={InputTwo}
                    label="First Name"
                    validate={[required]}
                />
                <label className="doctor-form-label" htmlFor="name.lastName"></label>
                <Field 
                    name="name.lastName"
                    type="text"
                    component={InputTwo}
                    label="Last Name"
                    validate={[required]}
                />
                <label className="doctor-form-label" htmlFor="practice"></label>
                <Field 
                    name="practice"
                    type="text"
                    component={InputTwo}
                    label="Practice"
                    validate={[required]}
                />
                <label className="doctor-form-label" htmlFor="company"></label>
                <Field 
                    name="company"
                    type="text"
                    component={InputTwo}
                    label="Company"
                />
                <label className="doctor-form-label" htmlFor="address.street"></label>
                <Field 
                    name="address.street"
                    type="text"
                    component={InputTwo}
                    label="Address"
                    validate={[required]}
                />
                <label className="doctor-form-label" htmlFor="address.city"></label>
                <Field 
                    name="address.city"
                    type="text"
                    component={InputTwo}
                    label="City"
                    validate={[required]}
                />
                <label className="doctor-form-label" htmlFor="address.state"></label>
                <Field 
                    name="address.state"
                    type="text"
                    component={InputTwo}
                    label="State"
                    validate={[required]}
                />
                <label className="doctor-form-label" htmlFor="address.zipCode"></label>
                <Field 
                    name="address.zipCode"
                    type="text"
                    component={InputTwo}
                    label="Zip Code"
                    validate={[required]}
                />
                <label className="doctor-form-label" htmlFor="phoneNumber"></label>
                <Field 
                    name="phoneNumber"
                    type="text"
                    component={InputTwo}
                    label="Phone Number"
                    validate={[required]}
                />
                <label className="doctor-form-label" htmlFor="faxNumber"></label>
                <Field 
                    name="faxNumber"
                    type="text"
                    component={InputTwo}
                    label="Fax Number"
                    validate={[required]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.currentUser,
    authToken: state.auth.authToken,
    initialValues: state.app.loadedDoctorFormData
});

EditDoctorForm = reduxForm({
    form: 'EditDoctorForm',
    enableReinitialize: true
})(EditDoctorForm);

EditDoctorForm = connect(mapStateToProps)(EditDoctorForm);

export default reduxForm({
    form: 'editDoctor',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editDoctor', Object.keys(errors)[0]))})(EditDoctorForm);