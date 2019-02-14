import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import InputTwo from './inputTwo';
import {API_BASE_URL} from '../config';
import {required, nonEmpty, isTrimmed} from '../validators';
import { connect } from 'react-redux';
import { loadBasicProfileInfoFormData, chooseEditBasicProfileInfo } from '../actions';

export class EditBasicProfileInfoForm extends React.Component {

    showProfile() {
        this.props.dispatch(chooseEditBasicProfileInfo());
    }

    onSubmit(values) {
        return fetch(`${API_BASE_URL}/api/patients/${this.props.user.id}`, {
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
                        _error: 'Error updating your profile information'
                    })
                );
            });
    }
    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message edit-profile-info-success-message">
                    <p className="edit-profile-info-success-message-p">
                        Your profile was successfully updated!&nbsp;
                        <button 
                            className="form-message-button"
                            onClick={() => this.showProfile()}
                        >
                            Got it!
                        </button>
                    </p>
                </div>
            );
        }
        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message edit-profile-info-error-message">
                    <p className="edit-profile-info-error-message-p">
                        {this.props.error}&nbsp;
                        <button 
                            className="form-message-button"
                            onClick={() => this.showProfile()}
                        >
                            Got it!
                        </button>
                    </p>
                </div>
            );
        }
        return (
            <div className="edit-basic-profile-info-form-div">
                {successMessage}
                {errorMessage}
                <form 
                    className="edit-basic-profile-info-form"
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                >
                    <Field 
                        name="socialSecurityNumber"
                        type="text"
                        component={InputTwo}
                        label="SSN"
                        validate={[required]}
                    />
                    <Field 
                        name="address.street"
                        type="text"
                        component={InputTwo}
                        label="Address"
                        validate={[required]}
                    />
                    <Field 
                        name="address.city"
                        type="text"
                        component={InputTwo}
                        label="City"
                        validate={[required]}
                    />
                    <Field 
                        name="address.state"
                        type="text"
                        component={InputTwo}
                        label="State"
                        validate={[required]}
                    />
                    <Field 
                        name="address.zipCode"
                        type="text"
                        component={InputTwo}
                        label="Zip Code"
                        validate={[required]}
                    />
                    <Field 
                        name="phoneNumbers.home"
                        type="text"
                        component={InputTwo}
                        label="Home Phone"
                    />
                    <Field 
                        name="phoneNumbers.cell"
                        type="text"
                        component={InputTwo}
                        label="Cell Phone"
                    />
                    <Field 
                        name="phoneNumbers.work"
                        type="text"
                        component={InputTwo}
                        label="Work Phone"
                    />
                    <button
                        className="edit-basic-profile-info-submit-button"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}
                    >
                        <span className="fas fa-check">&nbsp;&nbsp;</span>
                        Submit
                    </button>
                    <button
                        type="button"
                        className="cancel-edit-basic-profile-info-form-changes-button"
                        onClick={() => this.showProfile()}
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
    initialValues: state.app.loadedBasicProfileInfoFormData
});

EditBasicProfileInfoForm = reduxForm({
    form: 'editBasicProfileInfoForm',
    enableReinitialize: true
})(EditBasicProfileInfoForm);

EditBasicProfileInfoForm = connect(mapStateToProps)(EditBasicProfileInfoForm);

export default reduxForm({
    form: 'editBasicProfileInfo',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editBasicProfileInfo', Object.keys(errors)[0]))})(EditBasicProfileInfoForm);