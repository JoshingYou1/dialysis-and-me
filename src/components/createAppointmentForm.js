import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {API_BASE_URL} from '../config';
import {required, nonEmpty} from '../validators';
import { connect } from 'react-redux';

export class CreateAppointmentForm extends React.Component {
    onSubmit(values) {
        return fetch(`${API_BASE_URL}/api/patients/${this.props.user.id}/appointments`, {
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
                    Appointment created successfully!
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
                <Field 
                    name="date"
                    type="text"
                    component={Input}
                    label="Date"
                    validate={[required, nonEmpty]}
                />
                <Field 
                    name="reason"
                    type="text"
                    component={Input}
                    label="Reason"
                    validate={[required, nonEmpty]}
                />
                <Field 
                    name="time"
                    type="text"
                    component={Input}
                    label="Time"
                    validate={[required, nonEmpty]}
                />
                <Field 
                    name="with"
                    type="text"
                    component={Input}
                    label="With"
                />
                <Field 
                    name="title"
                    type="text"
                    component={Input}
                    label="Title"
                    validate={[required, nonEmpty]}
                />
                <Field 
                    name="where"
                    type="text"
                    component={Input}
                    label="Where"
                    validate={[required, nonEmpty]}
                />
                <Field 
                    name="address"
                    type="text"
                    component={Input}
                    label="Address"
                    validate={[required, nonEmpty]}
                />
                <Field 
                    name="city"
                    type="text"
                    component={Input}
                    label="City"
                    validate={[required, nonEmpty]}
                />
                <Field 
                    name="state"
                    type="text"
                    component={Input}
                    label="State"
                    validate={[required, nonEmpty]}
                />
                <Field 
                    name="zip-code"
                    type="text"
                    component={Input}
                    label="Zip Code"
                    validate={[required, nonEmpty]}
                />
                <Field 
                    name="phone-number"
                    type="text"
                    component={Input}
                    label="Phone Number"
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
CreateAppointmentForm = connect(mapStateToProps)(CreateAppointmentForm);

export default reduxForm({
    form: 'createAppointment',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('createAppointment', Object.keys(errors)[0]))})(CreateAppointmentForm);