import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import InputTwo from './inputTwo';
import {API_BASE_URL} from '../config';
import {required, nonEmpty, isTrimmed} from '../validators';
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
                <div className="message create-appointment-success-message">
                    <span>Appointment successfully created!</span>
                </div>
            );
        }
        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message create-appointment-error-message">
                    <span>{this.props.error}</span>
                </div>
            );
        }
        return (
            <div className="create-appointment-form-div">
                {successMessage}
                {errorMessage}
                <form className="create-appointment-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                        {/* <label className="appointment-form-label" htmlFor="date"></label> */}
                        <Field 
                            name="date"
                            type="date"
                            component={InputTwo}
                            label="Date"
                            validate={[required, nonEmpty, isTrimmed]}
                        />
                        {/* <label className="appointment-form-label" htmlFor="reason"></label> */}
                        <Field 
                            name="description"
                            type="text"
                            component={InputTwo}
                            label="Reason"
                            validate={[required, nonEmpty, isTrimmed]}
                        />
                    {/* <label className="appointment-form-label slot-3" htmlFor="time"></label> */}
                    <Field 
                        name="time"
                        type="text"
                        component={InputTwo}
                        label="Time"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    {/* <label className="appointment-form-label slot-1" htmlFor="with"></label> */}
                    <Field 
                        name="with"
                        type="text"
                        component={InputTwo}
                        label="With"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    {/* <label className="appointment-form-label slot-2" htmlFor="title"></label> */}
                    <Field 
                        name="title"
                        type="text"
                        component={InputTwo}
                        label="Title"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    {/* <label className="appointment-form-label slot-3" htmlFor="where"></label> */}
                    <Field 
                        name="where"
                        type="text"
                        component={InputTwo}
                        label="Where"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    {/* <label className="appointment-form-label slot-1" htmlFor="address"></label> */}
                    <Field 
                        name="address.street"
                        type="text"
                        component={InputTwo}
                        label="Address"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    {/* <label className="appointment-form-label slot-2" htmlFor="city"></label> */}
                    <Field 
                        name="address.city"
                        type="text"
                        component={InputTwo}
                        label="City"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    {/* <label className="appointment-form-label slot-3" htmlFor="state"></label> */}
                    <Field 
                        name="address.state"
                        type="text"
                        component={InputTwo}
                        label="State"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    {/* <label className="appointment-form-label slot-1" htmlFor="zip-code"></label> */}
                    <Field 
                        name="address.zipCode"
                        type="number"
                        component={InputTwo}
                        label="Zip Code"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    {/* <label className="appointment-form-label slot-2" htmlFor="phone-number"></label> */}
                    <Field
                        className="hello" 
                        name="phoneNumber"
                        type="text"
                        component={InputTwo}
                        label="Phone Number"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <button
                        // onClick={this.props.dispatch(createAppointment(this.props.user.id))}
                        className="create-appointment-submit-button"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}
                    >
                        <span className="fas fa-check">&nbsp;&nbsp;</span>
                        Submit
                    </button>
                    <button 
                        type="button"
                        className="cancel-create-appointment-form-changes-button"
                        onClick={() => this.props.dispatch(chooseCreateAppointment())}
                    >
                        <span className="fas fa-times b">&nbsp;&nbsp;</span>
                        Cancel
                    </button>
                </form>
            </div>
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