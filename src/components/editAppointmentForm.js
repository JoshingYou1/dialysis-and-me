import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import InputTwo from './inputTwo';
import {API_BASE_URL} from '../config';
import {required, nonEmpty} from '../validators';
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
        console.log('selectedAppointment', this.props.selectedAppointment);
        console.log('initialValues', this.props.initialValues);
        
        if ((this.props.selectedAppointment && this.props.initialValues) && this.props.initialValues._id === this.props.selectedAppointment._id) {
            console.log('selectedAppointment.id', this.props.selectedAppointment._id);
            console.log('initialValues.id', this.props.initialValues._id);
            let successMessage;
            if (this.props.submitSucceeded) {
                successMessage = (
                    <div className="message success-message">
                        Appointment successfully updated!
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
                    <label className="appointment-form-label" htmlFor="date"></label>
                    <Field 
                        name="date"
                        type="text"
                        component={InputTwo}
                        label="Date"
                        validate={[required]}
                    />
                    <label className="appointment-form-label" htmlFor="reason"></label>
                    <Field 
                        name="description"
                        type="text"
                        component={InputTwo}
                        label="Reason"
                        validate={[required]}
                    />
                    <label className="appointment-form-label" htmlFor="time"></label>
                    <Field 
                        name="time"
                        type="text"
                        component={InputTwo}
                        label="Time"
                        validate={[required]}
                    />
                    <label className="appointment-form-label" htmlFor="with"></label>
                    <Field 
                        name="with"
                        type="text"
                        component={InputTwo}
                        label="With"
                    />
                    <label className="appointment-form-label" htmlFor="title"></label>
                    <Field 
                        name="title"
                        type="text"
                        component={InputTwo}
                        label="Title"
                        validate={[required]}
                    />
                    <label className="appointment-form-label" htmlFor="where"></label>
                    <Field 
                        name="where"
                        type="text"
                        component={InputTwo}
                        label="Where"
                        validate={[required]}
                    />
                    <label className="appointment-form-label" htmlFor="address.street"></label>
                    <Field 
                        name="address.street"
                        type="text"
                        component={InputTwo}
                        label="Address"
                        validate={[required]}
                    />
                    <label className="appointment-form-label" htmlFor="address.city"></label>
                    <Field 
                        name="address.city"
                        type="text"
                        component={InputTwo}
                        label="City"
                        validate={[required]}
                    />
                    <label className="appointment-form-label" htmlFor="address.state"></label>
                    <Field 
                        name="address.state"
                        type="text"
                        component={InputTwo}
                        label="State"
                        validate={[required]}
                    />
                    <label className="appointment-form-label" htmlFor="address.zipCode"></label>
                    <Field 
                        name="address.zipCode"
                        type="text"
                        component={InputTwo}
                        label="Zip Code"
                        validate={[required]}
                    />
                    <label className="appointment-form-label" htmlFor="phoneNumber"></label>
                    <Field 
                        name="phoneNumber"
                        type="text"
                        component={InputTwo}
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
        return (
            <div></div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.currentUser,
    authToken: state.auth.authToken,
    initialValues: state.app.loadedAppointmentFormData,
    selectedAppointment: state.app.selectedAppointment
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