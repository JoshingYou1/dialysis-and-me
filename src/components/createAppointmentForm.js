import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import InputTwo from './inputTwo';
import {API_BASE_URL} from '../config';
import {required, nonEmpty} from '../validators';
import { connect } from 'react-redux';
import { createAppointment, chooseCreateAppointment } from '../actions';

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
                    Appointment successfully created!
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
            <form className="create-appointment-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                {successMessage}
                {errorMessage}
                    {/* <label className="appointment-form-label" htmlFor="date"></label> */}
                    <Field 
                        name="date"
                        type="text"
                        component={InputTwo}
                        label="Date"
                        validate={[required, nonEmpty]}
                    />
                    {/* <label className="appointment-form-label" htmlFor="reason"></label> */}
                    <Field 
                        name="reason"
                        type="text"
                        component={InputTwo}
                        label="Reason"
                        validate={[required, nonEmpty]}
                    />
                {/* <label className="appointment-form-label slot-3" htmlFor="time"></label> */}
                <Field 
                    name="time"
                    type="text"
                    component={InputTwo}
                    label="Time"
                    validate={[required, nonEmpty]}
                />
                {/* <label className="appointment-form-label slot-1" htmlFor="with"></label> */}
                <Field 
                    name="with"
                    type="text"
                    component={InputTwo}
                    label="With"
                    validate={[required, nonEmpty]}
                />
                {/* <label className="appointment-form-label slot-2" htmlFor="title"></label> */}
                <Field 
                    name="title"
                    type="text"
                    component={InputTwo}
                    label="Title"
                    validate={[required, nonEmpty]}
                />
                {/* <label className="appointment-form-label slot-3" htmlFor="where"></label> */}
                <Field 
                    name="where"
                    type="text"
                    component={InputTwo}
                    label="Where"
                    validate={[required, nonEmpty]}
                />
                {/* <label className="appointment-form-label slot-1" htmlFor="address"></label> */}
                <Field 
                    name="address"
                    type="text"
                    component={InputTwo}
                    label="Address"
                    validate={[required, nonEmpty]}
                />
                {/* <label className="appointment-form-label slot-2" htmlFor="city"></label> */}
                <Field 
                    name="city"
                    type="text"
                    component={InputTwo}
                    label="City"
                    validate={[required, nonEmpty]}
                />
                {/* <label className="appointment-form-label slot-3" htmlFor="state"></label> */}
                <Field 
                    name="state"
                    type="text"
                    component={InputTwo}
                    label="State"
                    validate={[required, nonEmpty]}
                />
                {/* <label className="appointment-form-label slot-1" htmlFor="zip-code"></label> */}
                <Field 
                    name="zip-code"
                    type="text"
                    component={InputTwo}
                    label="Zip Code"
                    validate={[required, nonEmpty]}
                />
                {/* <label className="appointment-form-label slot-2" htmlFor="phone-number"></label> */}
                <Field
                    className="hello" 
                    name="phone-number"
                    type="text"
                    component={InputTwo}
                    label="Phone Number"
                    validate={[required, nonEmpty]}
                />
                <button
                    onClick={this.props.dispatch(createAppointment)}
                    className="appointment-submit-button"
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}
                >
                    <span className="fas fa-check">&nbsp;&nbsp;</span>
                    Submit
                </button>
                <button 
                    className="cancel-appointment-form-changes-button"
                    onClick={this.props.dispatch(chooseCreateAppointment())}
                >
                    <span className="fas fa-times b">&nbsp;&nbsp;</span>
                    Cancel
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