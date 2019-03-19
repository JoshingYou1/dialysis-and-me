import React from 'react';
import {Field, reduxForm, SubmissionError, focus, getFormValues} from 'redux-form';
import InputTwo from './inputTwo';
import InputHidden from './inputHidden';
import {API_BASE_URL} from '../config';
import {required, nonEmpty, isTrimmed, phoneNumber, faxNumber, stateAbbrv, zipCode} from '../validators';
import { connect } from 'react-redux';
import { editSelectedDoctorById, successErrorMessage, fetchDoctors, updateCurrentDoctor, updateDoctorSuccess } from '../actions';
import PropTypes from 'prop-types';

export class EditDoctorForm extends React.Component {
    showDoctor() {
        this.props.dispatch(editSelectedDoctorById());
        this.props.dispatch(successErrorMessage(false));
    }

    static propTypes = {
        name: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired
        ])
    };

    onSubmit(values) {
        return fetch(`${API_BASE_URL}/api/patients/${this.props.user.id}/doctors/${this.props.selectedDoctorToEdit._id}`, {
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
                return res.json();
            })
            .then(d => this.props.dispatch(updateDoctorSuccess(d)))
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
                        _error: 'Error updating this doctor\'s information'
                    })
                );
            });
    }
    render() {
            let successMessage;
            if (this.props.submitSucceeded) {
                successMessage = (
                    <div className="message edit-doctor-success-message">
                        <p className="edit-doctor-success-message-p">
                            Doctor successfully updated!&nbsp;
                            <button 
                                className="form-message-button"
                                onClick={() => {this.showDoctor(); this.props.initialize()}}
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
                    <div className="message edit-doctor-error-message">
                        <p className="edit-doctor-error-message-p">
                            {this.props.error}&nbsp;
                            <button 
                                className="form-message-button"
                                onClick={() => {this.showDoctor(); this.props.initialize()}}
                            >
                                <span className="fas fa-share-square">&nbsp;</span>
                                <span>Go back</span>
                            </button>
                        </p>
                    </div>
                );
            }
            return (
                <div className="edit-doctor-form-div">
                    {successMessage}
                    {errorMessage}
                    <form 
                        className={"edit-doctor-form " + (this.props.isMessageShowing ? 'hidden-1' : '')}
                        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                    >
                        <Field 
                            name="name.firstName"
                            type="text"
                            component={InputTwo}
                            label="First Name"
                            validate={[required, isTrimmed, nonEmpty]}
                        />
                        <Field 
                            name="name.lastName"
                            type="text"
                            component={InputTwo}
                            label="Last Name"
                            validate={[required, isTrimmed, nonEmpty]}
                        />
                        <Field 
                            name="practice"
                            type="text"
                            component={InputTwo}
                            label="Practice"
                            validate={[required, isTrimmed, nonEmpty]}
                        />
                        <Field 
                            name="company"
                            type="text"
                            component={InputTwo}
                            label="Company"
                            validate={[required, isTrimmed, nonEmpty]}
                        />
                        <Field 
                            name="address.street"
                            type="text"
                            component={InputTwo}
                            label="Address"
                            validate={[required, isTrimmed, nonEmpty]}
                        />
                        <Field 
                            name="address.city"
                            type="text"
                            component={InputTwo}
                            label="City"
                            validate={[required, isTrimmed, nonEmpty]}
                        />
                        <Field 
                            name="address.state"
                            type="text"
                            component={InputTwo}
                            label="State"
                            validate={[required, isTrimmed, nonEmpty, stateAbbrv]}
                        />
                        <Field 
                            name="address.zipCode"
                            type="number"
                            component={InputTwo}
                            label="Zip Code"
                            validate={[required, zipCode]}
                        />
                        <Field 
                            name="phoneNumber"
                            type="text"
                            component={InputTwo}
                            label="Phone Number"
                            validate={[required, isTrimmed, nonEmpty, phoneNumber]}
                        />
                        <Field 
                            name="faxNumber"
                            type="text"
                            component={InputTwo}
                            label="Fax Number"
                            validate={[required, isTrimmed, nonEmpty, faxNumber]}
                        />
                        <Field 
                            name=""
                            component={InputHidden}
                        />
                        <button
                            className="edit-doctor-submit-button"
                            type="submit"
                            disabled={this.props.pristine || this.props.submitting || !this.props.valid}
                            onClick={() => this.props.dispatch(successErrorMessage(true))}
                        >
                            <span className="fas fa-check">&nbsp;&nbsp;</span>
                            Submit
                        </button>
                        <button
                            type="button"
                            className="cancel-edit-doctor-form-changes-button"
                            onClick={() => {this.showDoctor(); this.props.initialize()}}
                        >
                            <span className="fas fa-times">&nbsp;&nbsp;</span>
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
    initialValues: state.app.selectedDoctorToEdit,
    selectedDoctorToEdit: state.app.selectedDoctorToEdit,
    isMessageShowing: state.app.isMessageShowing
});

EditDoctorForm = reduxForm({
    form: 'editDoctorForm',
    asyncBlurFields: [],
    enableReinitialize: true
})(EditDoctorForm);

EditDoctorForm = connect(mapStateToProps)(EditDoctorForm);

export default reduxForm({
    form: 'editDoctor',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editDoctor', Object.keys(errors)[0]))})(EditDoctorForm);