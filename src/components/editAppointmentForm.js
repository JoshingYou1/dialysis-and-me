import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {API_BASE_URL} from '../config';
import {required, nonEmpty} from '../validators';
import { fetchProfileInfo } from '../actions';
import { connect } from 'react-redux';

export class EditAppointmentForm extends React.Component {
    onSubmit(values) {
        return fetch(`${API_BASE_URL}/api/patients/${this.props.user.id}/appointments`, {
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
                    Appointment updated successfully!
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
                    validate={[required]}
                />
                <Field 
                    name="description"
                    type="text"
                    component={Input}
                    label="Reason"
                    validate={[required]}
                />
                <Field 
                    name="time"
                    type="text"
                    component={Input}
                    label="Time"
                    validate={[required]}
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
                    validate={[required]}
                />
                <Field 
                    name="where"
                    type="text"
                    component={Input}
                    label="Where"
                    validate={[required]}
                />
                <Field 
                    name="address.street"
                    type="text"
                    component={Input}
                    label="Address"
                    validate={[required]}
                />
                <Field 
                    name="address.city"
                    type="text"
                    component={Input}
                    label="City"
                    validate={[required]}
                />
                <Field 
                    name="address.state"
                    type="text"
                    component={Input}
                    label="State"
                    validate={[required]}
                />
                <Field 
                    name="address.zipCode"
                    type="text"
                    component={Input}
                    label="Zip Code"
                    validate={[required]}
                />
                <Field 
                    name="phoneNumber"
                    type="text"
                    component={Input}
                    label="Phone Number"
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
    initialValues: state.app.loadedAppointmentFormData
});

EditAppointmentForm = reduxForm({
    form: 'EditAppointmentForm',
    enableReinitialize: true
})(EditAppointmentForm);

EditAppointmentForm = connect(mapStateToProps)(EditAppointmentForm);

export default reduxForm({
    form: 'editAppointment',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editAppointment', Object.keys(errors)[0]))})(EditAppointmentForm);