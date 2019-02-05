import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import InputTwo from './inputTwo';
import {API_BASE_URL} from '../config';
import {required, nonEmpty} from '../validators';
import { connect } from 'react-redux';

export class EditBasicProfileInfoForm extends React.Component {
    onSubmit(values) {
        return fetch(`${API_BASE_URL}/api/patients/${this.props.user.id}`, {
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
                        _error: 'Error updating your profile information'
                    })
                );
            });
    }
    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message success-message">
                    Your profile was successfully updated!
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
            <form className="edit-basic-profile-info-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                {successMessage}
                {errorMessage}
                {/* <label className="profile-form-label" htmlFor="name.firstName"></label> */}
                <Field 
                    name="socialSecurityNumber"
                    type="text"
                    component={InputTwo}
                    label="SSN"
                    validate={[required]}
                />
                {/* <label className="profile-form-label" htmlFor="address.street"></label> */}
                <Field 
                    name="address.street"
                    type="text"
                    component={InputTwo}
                    label="Address"
                    validate={[required]}
                />
                {/* <label className="profile-form-label" htmlFor="address.city"></label> */}
                <Field 
                    name="address.city"
                    type="text"
                    component={InputTwo}
                    label="City"
                    validate={[required]}
                />
                {/* <label className="profile-form-label" htmlFor="address.state"></label> */}
                <Field 
                    name="address.state"
                    type="text"
                    component={InputTwo}
                    label="State"
                />
                {/* <label className="profile-form-label" htmlFor="address.zipCode"></label> */}
                <Field 
                    name="address.zipCode"
                    type="text"
                    component={InputTwo}
                    label="Zip Code"
                    validate={[required]}
                />
                {/* <label className="profile-form-label" htmlFor="phoneNumbers.home"></label> */}
                <Field 
                    name="phoneNumbers.home"
                    type="text"
                    component={InputTwo}
                    label="Home Phone"
                />
                {/* <label className="profile-form-label" htmlFor="phoneNumbers.cell"></label> */}
                <Field 
                    name="phoneNumbers.cell"
                    type="text"
                    component={InputTwo}
                    label="Cell Phone"
                />
                {/* <label className="profile-form-label" htmlFor="phoneNumbers.work"></label> */}
                <Field 
                    name="phoneNumbers.work"
                    type="text"
                    component={InputTwo}
                    label="Work Phone"
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
    initialValues: state.app.loadedBasicProfileInfoFormData
});

EditBasicProfileInfoForm = reduxForm({
    form: 'editBasicProfileInfoForm',
    enableReinitialize: true
})(EditBasicProfileInfoForm);

EditBasicProfileInfoForm = connect(mapStateToProps)(EditBasicProfileInfoForm);

export default reduxForm({
    form: 'editBasicProfileInfo',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editBasicProfileInfo', Object.keys(errors)[0]))})(EditBasicProfileInfoForm);