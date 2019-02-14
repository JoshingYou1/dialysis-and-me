import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import InputTwo from './inputTwo';
import {API_BASE_URL} from '../config';
import {required, nonEmpty, isTrimmed} from '../validators';
import { connect } from 'react-redux';

export class CreateDoctorForm extends React.Component {
    onSubmit(values) {
        return fetch(`${API_BASE_URL}/api/patients/${this.props.user.id}/doctors`, {
            method: 'POST',
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
                        _error: 'Error creating appointment'
                    })
                );
            });
    }
    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message success-message">
                    Doctor successfully added to your list!
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
            <form className="create-doctor-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                {successMessage}
                {errorMessage}
                {/* <label className="doctor-form-label" htmlFor="first-name"></label> */}
                <Field 
                    name="first-name"
                    type="text"
                    component={InputTwo}
                    label="First Name"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                {/* <label className="doctor-form-label" htmlFor="last-name"></label> */}
                <Field 
                    name="last-name"
                    type="text"
                    component={InputTwo}
                    label="Last Name"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                {/* <label className="doctor-form-label" htmlFor="practice"></label> */}
                <Field 
                    name="practice"
                    type="text"
                    component={InputTwo}
                    label="Practice"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                {/* <label className="doctor-form-label" htmlFor="company"></label> */}
                <Field 
                    name="company"
                    type="text"
                    component={InputTwo}
                    label="Company"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                {/* <label className="doctor-form-label" htmlFor="address"></label> */}
                <Field 
                    name="address"
                    type="text"
                    component={InputTwo}
                    label="Address"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                {/* <label className="doctor-form-label" htmlFor="city"></label> */}
                <Field 
                    name="city"
                    type="text"
                    component={InputTwo}
                    label="City"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                {/* <label className="doctor-form-label" htmlFor="state"></label> */}
                <Field 
                    name="state"
                    type="text"
                    component={InputTwo}
                    label="Address"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                {/* <label className="doctor-form-label" htmlFor="zip-code"></label> */}
                <Field 
                    name="zip-code"
                    type="text"
                    component={InputTwo}
                    label="Zip Code"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                {/* <label className="doctor-form-label" htmlFor="phone-number"></label> */}
                <Field 
                    name="phone-number"
                    type="text"
                    component={InputTwo}
                    label="Phone Number"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                {/* <label className="doctor-form-label" htmlFor="fax-number"></label> */}
                <Field 
                    name="fax-number"
                    type="text"
                    component={InputTwo}
                    label="Fax Number"
                    validate={[required, nonEmpty, isTrimmed]}
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
    authToken: state.auth.authToken
});
CreateDoctorForm = connect(mapStateToProps)(CreateDoctorForm);

export default reduxForm({
    form: 'createDoctor',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('createDoctor', Object.keys(errors)[0]))})(CreateDoctorForm);