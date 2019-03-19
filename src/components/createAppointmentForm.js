import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import InputTwo from './inputTwo';
import {API_BASE_URL} from '../config';
import {required, nonEmpty, isTrimmed, phoneNumber, zipCode, stateAbbrv} from '../validators';
import { connect } from 'react-redux';
import { createAppointment, chooseCreateAppointment, successErrorMessage, createAppointmentSuccess } from '../actions';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocaliser from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';

momentLocaliser(moment)

const renderDateTimePicker = ({ input: { onChange, value, onBlur }, showTime, meta: { touched, error } }) =>
    (
    <div>
        <div className={"form-error " + (touched && error ? '' : 'hidden-1')}>
            <span className={"fas fa-info-circle " + (touched && error ? '' : 'hidden-1')}>&nbsp;</span>
            {error}
        </div>
        <DateTimePicker
            className="datetime-picker-input-2"
            onChange={onChange}
            format="MM/DD/YYYY"
            time={showTime}
            value={!value ? null : new Date(value)}
            selected={value ? moment(value) : null}
            placeholder="07/21/2018"
            onBlur={onBlur}
        />
    </div>
);

export class CreateAppointmentForm extends React.Component {
    showAppointments() {
        this.props.dispatch(chooseCreateAppointment());
        this.props.dispatch(successErrorMessage(false));
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
                return res.json();
            })
            .then(a => this.props.dispatch(createAppointmentSuccess(a)))
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
                            onClick={() => {this.showAppointments(); this.props.initialize()}}
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
                            onClick={() => {this.showAppointments(); this.props.initialize()}}
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
                    <div className="form-input-2 a">
                        <label className="input-two-label a" htmlFor="date">
                            Date
                        </label>
                        <Field
                            name="date"
                            type="date"
                            component={renderDateTimePicker}
                            showTime={false}
                            validate={required}
                            placeholder="07/21/19"
                        />
                    </div>
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
                        placeholder="10:15 a.m."
                    />
                    <Field 
                        name="with"
                        type="text"
                        component={InputTwo}
                        label="With"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder="John Doe"
                    />
                    <Field 
                        name="title"
                        type="text"
                        component={InputTwo}
                        label="Title"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder="MD"
                    />
                    <Field 
                        name="where"
                        type="text"
                        component={InputTwo}
                        label="Where"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder="Mayo Clinic"
                    />
                    <Field 
                        name="address.street"
                        type="text"
                        component={InputTwo}
                        label="Address"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder="123 International Drive"
                    />
                    <Field 
                        name="address.city"
                        type="text"
                        component={InputTwo}
                        label="City"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder="Jacksonville"
                    />
                    <Field 
                        name="address.state"
                        type="text"
                        component={InputTwo}
                        label="State"
                        validate={[required, nonEmpty, isTrimmed, stateAbbrv]}
                        placeholder="FL"
                    />
                    <Field 
                        name="address.zipCode"
                        type="number"
                        component={InputTwo}
                        label="Zip Code"
                        validate={[required, nonEmpty, isTrimmed, zipCode]}
                        placeholder="32204"
                    />
                    <Field
                        name="phoneNumber"
                        type="text"
                        component={InputTwo}
                        label="Phone Number"
                        validate={[required, nonEmpty, isTrimmed, phoneNumber]}
                        placeholder="123-456-7890"
                    />
                    <button
                        className="create-appointment-submit-button"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting || !this.props.valid}
                        onClick={() => this.props.dispatch(successErrorMessage(true))}
                    >
                        <span className="fas fa-check">&nbsp;&nbsp;</span>
                        Submit
                    </button>
                    <button 
                        type="button"
                        className="cancel-create-appointment-form-changes-button"
                        onClick={() => {this.props.dispatch(chooseCreateAppointment()); this.props.initialize()}}
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