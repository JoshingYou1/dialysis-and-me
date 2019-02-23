import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import InputTwo from './inputTwo';
import {API_BASE_URL} from '../config';
import {required, nonEmpty, isTrimmed} from '../validators';
import { connect } from 'react-redux';
import { createAppointment, chooseCreateAppointment, formMessage } from '../actions';

export class CreateAppointmentForm extends React.Component {
    showAppointments() {
        this.props.dispatch(chooseCreateAppointment());
    }

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
                    <p className="create-appointment-success-message-p">
                        Appointment successfully created!&nbsp;
                        <button 
                            className="form-message-button"
                            onClick={() => this.showAppointments()}
                        >
                            <span className="fas fa-share-square">&nbsp;</span>
                            <span>Go back</span>
                        </button>
                    </p>
                </div>
            );
        }
        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message create-appointment-error-message">
                    <p className="create-appointment-error-message-p">
                        {this.props.error}&nbsp;
                        <button 
                            className="form-message-button"
                            onClick={() => this.showAppointments()}
                        >
                            <span className="fas fa-share-square">&nbsp;</span>
                            <span>Go back</span>
                        </button>
                    </p>
                </div>
            );
        }
        return (
            <div className="create-appointment-form-div">
                {successMessage}
                {errorMessage}
                <form 
                    className={"create-appointment-form " + (this.props.isMessageShowing ? 'hidden-1' : '')}
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                >
                    <Field 
                        name="date"
                        type="date"
                        component={InputTwo}
                        label="Date"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field 
                        name="description"
                        type="text"
                        component={InputTwo}
                        placeholder="Annual physical"
                        label="Reason"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field 
                        name="time"
                        type="text"
                        component={InputTwo}
                        label="Time"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field 
                        name="with"
                        type="text"
                        component={InputTwo}
                        label="With"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field 
                        name="title"
                        type="text"
                        component={InputTwo}
                        label="Title"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field 
                        name="where"
                        type="text"
                        component={InputTwo}
                        label="Where"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field 
                        name="address.street"
                        type="text"
                        component={InputTwo}
                        label="Address"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field 
                        name="address.city"
                        type="text"
                        component={InputTwo}
                        label="City"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field 
                        name="address.state"
                        type="text"
                        component={InputTwo}
                        label="State"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field 
                        name="address.zipCode"
                        type="number"
                        component={InputTwo}
                        label="Zip Code"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <Field
                        name="phoneNumber"
                        type="text"
                        component={InputTwo}
                        label="Phone Number"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    <button
                        className="create-appointment-submit-button"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}
                        onClick={() => this.props.dispatch(formMessage())}
                    >
                        <span className="fas fa-check">&nbsp;&nbsp;</span>
                        Submit
                    </button>
                    <button 
                        type="button"
                        className="cancel-create-appointment-form-changes-button"
                        onClick={() => {this.props.dispatch(chooseCreateAppointment()); this.props.reset()}}
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
    authToken: state.auth.authToken,
    isMessageShowing: state.app.isMessageShowing
});

CreateAppointmentForm = connect(mapStateToProps)(CreateAppointmentForm);

export default reduxForm({
    form: 'createAppointment',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('createAppointment', Object.keys(errors)[0]))})(CreateAppointmentForm);