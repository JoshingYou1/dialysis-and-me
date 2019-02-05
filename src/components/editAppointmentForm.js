import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import InputThree from './inputThree';
import {API_BASE_URL} from '../config';
import {required, nonEmpty} from '../validators';
import { connect } from 'react-redux';
import { loadAppointmentFormData } from '../actions';

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
        
        if ((this.props.selectedAppointmentToEdit && this.props.initialValues) && this.props.initialValues._id === this.props.selectedAppointmentToEdit._id) {
            console.log('selectedAppointment.id', this.props.selectedAppointmentToEdit._id);
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
                <form className="edit-appointment-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    {successMessage}
                    {errorMessage}
                    {/* <label className="appointment-form-label" htmlFor="date"></label> */}
                    <Field 
                        name="date"
                        type="text"
                        component={InputThree}
                        label="Date"
                        validate={[required]}
                    />
                    {/* <label className="appointment-form-label" htmlFor="reason"></label> */}
                    <Field 
                        name="description"
                        type="text"
                        component={InputThree}
                        label="Reason"
                        validate={[required]}
                    />
                    {/* <label className="appointment-form-label" htmlFor="time"></label> */}
                    <Field 
                        name="time"
                        type="text"
                        component={InputThree}
                        label="Time"
                        validate={[required]}
                    />
                    {/* <label className="appointment-form-label" htmlFor="with"></label> */}
                    <Field 
                        name="with"
                        type="text"
                        component={InputThree}
                        label="With"
                    />
                    {/* <label className="appointment-form-label" htmlFor="title"></label> */}
                    <Field 
                        name="title"
                        type="text"
                        component={InputThree}
                        label="Title"
                        validate={[required]}
                    />
                    {/* <label className="appointment-form-label" htmlFor="where"></label> */}
                    <Field 
                        name="where"
                        type="text"
                        component={InputThree}
                        label="Where"
                        validate={[required]}
                    />
                    {/* <label className="appointment-form-label" htmlFor="address.street"></label> */}
                    <Field 
                        name="address.street"
                        type="text"
                        component={InputThree}
                        label="Address"
                        validate={[required]}
                    />
                    {/* <label className="appointment-form-label" htmlFor="address.city"></label> */}
                    <Field 
                        name="address.city"
                        type="text"
                        component={InputThree}
                        label="City"
                        validate={[required]}
                    />
                    {/* <label className="appointment-form-label" htmlFor="address.state"></label> */}
                    <Field 
                        name="address.state"
                        type="text"
                        component={InputThree}
                        label="State"
                        validate={[required]}
                    />
                    {/* <label className="appointment-form-label" htmlFor="address.zipCode"></label> */}
                    <Field 
                        name="address.zipCode"
                        type="text"
                        component={InputThree}
                        label="Zip Code"
                        validate={[required]}
                    />
                    {/* <label className="appointment-form-label" htmlFor="phoneNumber"></label> */}
                    <Field 
                        name="phoneNumber"
                        type="text"
                        component={InputThree}
                        label="Phone Number"
                        validate={[required]}
                    />
                    <button
                        className="edit-appointment-submit-button"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        <span className="fas fa-check">&nbsp;&nbsp;</span>
                        Submit
                    </button>
                    <button
                        className="cancel-edit-appointment-form-changes-button"
                    >
                        <span className="fas fa-times">&nbsp;&nbsp;</span>
                        Cancel
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
    selectedAppointmentToEdit: state.app.selectedAppointmentToEdit
});

EditAppointmentForm = reduxForm({
    form: 'editAppointmentForm',
    enableReinitialize: true
})(EditAppointmentForm);

EditAppointmentForm = connect(mapStateToProps)(EditAppointmentForm);

export default reduxForm({
    form: 'editAppointment',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editAppointment', Object.keys(errors)[0]))})(EditAppointmentForm);