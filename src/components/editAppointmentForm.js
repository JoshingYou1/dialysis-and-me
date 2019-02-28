import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import InputThree from './inputThree';
import {API_BASE_URL} from '../config';
import {required, nonEmpty, isTrimmed, maxLength} from '../validators';
import { connect } from 'react-redux';
import { loadAppointmentFormData, updateAppointment, editSelectedAppointmentById, successErrorMessage } from '../actions';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocaliser from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';

const max = maxLength(2);

momentLocaliser(moment)

const renderDateTimePicker = ({ input: { onChange, value }, showTime, meta: { error, warning } }) =>
    <div>
        <div className="form-error b">
            <span className={"fas fa-info-circle " + (error ? '' : 'hidden-1')}>&nbsp;</span>
            {error}
        </div>
        <div className="form-warning b">
            <span className={"fas fa-info-circle " + (warning ? '' : 'hidden-1')}>&nbsp;</span>
            {warning}
        </div>
        <DateTimePicker
            className="datetime-picker-input-3"
            onChange={onChange}
            format="MM/DD/YYYY"
            time={showTime}
            value={!value ? null : new Date(value)}
            validate={required}
            placeholder="07/21/19"
        />
    </div>

export class EditAppointmentForm extends React.Component {
    showAppointments() {
        this.props.dispatch(editSelectedAppointmentById({}));
        this.props.dispatch(loadAppointmentFormData({}));
        this.props.dispatch(successErrorMessage(false));
    }

    onSubmit(values) {
        return fetch(`${API_BASE_URL}/api/patients/${this.props.user.id}/appointments/${this.props.selectedAppointmentToEdit._id}`, {
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
        if ((this.props.selectedAppointmentToEdit && this.props.initialValues) && this.props.initialValues._id === this.props.selectedAppointmentToEdit._id) {
            let successMessage;
            if (this.props.submitSucceeded) {
                successMessage = (
                    <div className="message edit-appointment-success-message">
                        <p className="edit-appointment-success-message-p">
                            Appointment successfully updated!&nbsp;
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
                    <div className="message edit-appointment-error-message">
                        <p className="edit-appointment-error-message-p">
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
                <div className="edit-appointment-form-div">
                    {successMessage}
                    {errorMessage}
                    <form 
                        className={"edit-appointment-form " + (this.props.isMessageShowing ? 'hidden-1' : '')} 
                        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                    >
                        <div className="form-input-3 a">
                            <label className="input-three-label a" htmlFor="date">
                                Date
                            </label>
                            <Field
                                name="date"
                                type="date"
                                component={renderDateTimePicker}
                                showTime={false}
                                validate={required}
                            />
                        </div>
                        {/* <label className="appointment-form-label" htmlFor="reason"></label> */}
                        <Field 
                            name="description"
                            type="text"
                            component={InputThree}
                            label="Reason"
                            validate={[required, isTrimmed, nonEmpty]}
                            placeholder="Annual physical"
                        />
                        {/* <label className="appointment-form-label" htmlFor="time"></label> */}
                        <Field 
                            name="time"
                            type="text"
                            component={InputThree}
                            label="Time"
                            validate={[required, isTrimmed, nonEmpty]}
                            placeholder="10:15 a.m."
                        />
                        {/* <label className="appointment-form-label" htmlFor="with"></label> */}
                        <Field 
                            name="with"
                            type="text"
                            component={InputThree}
                            label="With"
                            validate={[required, isTrimmed, nonEmpty]}
                            placeholder="John Doe"
                        />
                        {/* <label className="appointment-form-label" htmlFor="title"></label> */}
                        <Field 
                            name="title"
                            type="text"
                            component={InputThree}
                            label="Title"
                            validate={[required, isTrimmed, nonEmpty]}
                            placeholder="MD"
                        />
                        {/* <label className="appointment-form-label" htmlFor="where"></label> */}
                        <Field 
                            name="where"
                            type="text"
                            component={InputThree}
                            label="Where"
                            validate={[required, isTrimmed, nonEmpty]}
                            placeholder="Mayo Clinic"
                        />
                        {/* <label className="appointment-form-label" htmlFor="address.street"></label> */}
                        <Field 
                            name="address.street"
                            type="text"
                            component={InputThree}
                            label="Address"
                            validate={[required, isTrimmed, nonEmpty]}
                            placeholder="123 International Drive"
                        />
                        {/* <label className="appointment-form-label" htmlFor="address.city"></label> */}
                        <Field 
                            name="address.city"
                            type="text"
                            component={InputThree}
                            label="City"
                            validate={[required, isTrimmed, nonEmpty]}
                            placeholder="Jacksonville"
                        />
                        {/* <label className="appointment-form-label" htmlFor="address.state"></label> */}
                        <Field 
                            name="address.state"
                            type="text"
                            component={InputThree}
                            label="State"
                            validate={[required, isTrimmed, nonEmpty, max]}
                            placeholder="FL"
                        />
                        {/* <label className="appointment-form-label" htmlFor="address.zipCode"></label> */}
                        <Field 
                            name="address.zipCode"
                            type="number"
                            component={InputThree}
                            label="Zip Code"
                            validate={required}
                            placeholder="32204"
                        />
                        {/* <label className="appointment-form-label" htmlFor="phoneNumber"></label> */}
                        <Field 
                            name="phoneNumber"
                            type="text"
                            component={InputThree}
                            label="Phone Number"
                            validate={[required]}
                            placeholder="123-456-7890"
                        />
                        <button
                            className="edit-appointment-submit-button"
                            type="submit"
                            disabled={this.props.pristine || this.props.submitting || !this.props.valid}
                            onClick={() => this.props.dispatch(successErrorMessage(true))}
                        >
                            <span className="fas fa-check">&nbsp;&nbsp;</span>
                            Submit
                        </button>
                        <button
                            type="button"
                            className="cancel-edit-appointment-form-changes-button"
                            onClick={() => {this.showAppointments(); this.props.reset()}}
                        >
                            <span className="fas fa-times">&nbsp;&nbsp;</span>
                            Cancel
                        </button>
                    </form>
                </div>
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
    selectedAppointmentToEdit: state.app.selectedAppointmentToEdit,
    isMessageShowing: state.app.isMessageShowing
});

EditAppointmentForm = reduxForm({
    form: 'editAppointmentForm',
    asyncBlurFields: [],
    enableReinitialize: true
})(EditAppointmentForm);

EditAppointmentForm = connect(mapStateToProps)(EditAppointmentForm);

export default reduxForm({
    form: 'editAppointment',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editAppointment', Object.keys(errors)[0]))})(EditAppointmentForm);