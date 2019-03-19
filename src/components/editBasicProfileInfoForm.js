import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import InputTwo from './inputTwo';
import {API_BASE_URL} from '../config';
import {required, nonEmpty, isTrimmed, phoneNumber, stateAbbrv, zipCode, ssn} from '../validators';
import { connect } from 'react-redux';
import { loadBasicProfileInfoFormData, chooseEditBasicProfileInfo, successErrorMessage, updateBasicProfileInfoSuccess } from '../actions';
import InputHidden from './inputHidden';

export class EditBasicProfileInfoForm extends React.Component {

    showProfile() {
        this.props.dispatch(chooseEditBasicProfileInfo());
        this.props.dispatch(loadBasicProfileInfoFormData());
        this.props.dispatch(successErrorMessage(false));
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
                return res.json();
            })
            .then(p => this.props.dispatch(updateBasicProfileInfoSuccess(p)))
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
                            onClick={() => {this.showProfile(); this.props.initialize()}}
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
                <div className="message edit-profile-info-error-message">
                    <p className="edit-profile-info-error-message-p">
                        {this.props.error}&nbsp;
                        <button 
                            className="form-message-button"
                            onClick={() => {this.showProfile(); this.props.initialize()}}
                        >
                            <span className="fas fa-share-square">&nbsp;</span>
                            <span>Go back</span>
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
                    className={"edit-basic-profile-info-form " + (this.props.isMessageShowing ? 'hidden-1' : '')}
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                >
                    <Field 
                        name="_id"
                        type="hidden"
                        component={InputHidden}
                    />
                    <Field 
                        name="socialSecurityNumber"
                        type="text"
                        component={InputTwo}
                        label="SSN"
                        validate={[required, isTrimmed, nonEmpty, ssn]}
                        placeholder="123456789"
                    />
                    <Field 
                        name="address.street"
                        type="text"
                        component={InputTwo}
                        label="Address"
                        validate={[required, isTrimmed, nonEmpty]}
                        placeholder="123 International Drive"
                    />
                    <Field 
                        name="address.city"
                        type="text"
                        component={InputTwo}
                        label="City"
                        validate={[required, isTrimmed, nonEmpty]}
                        placeholder="Jacksonville"
                    />
                    <Field 
                        name="address.state"
                        type="text"
                        component={InputTwo}
                        label="State"
                        validate={[required, isTrimmed, nonEmpty, stateAbbrv]}
                        placeholder="FL"
                    />
                    <Field 
                        name="address.zipCode"
                        type="number"
                        component={InputTwo}
                        label="Zip Code"
                        validate={[required, zipCode]}
                        placeholder="12345"
                    />
                    <Field 
                        name="phoneNumbers.home"
                        type="text"
                        component={InputTwo}
                        label="Home Phone"
                        validate={phoneNumber}
                        placeholder="123-456-7890"
                    />
                    <Field 
                        name="phoneNumbers.cell"
                        type="text"
                        component={InputTwo}
                        label="Cell Phone"
                        validate={phoneNumber}
                        placeholder="123-456-7890"
                    />
                    <Field 
                        name="phoneNumbers.work"
                        type="text"
                        component={InputTwo}
                        label="Work Phone"
                        validate={phoneNumber}
                        placeholder="123-456-7890"
                    />
                    <button
                        className="edit-basic-profile-info-submit-button"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting || !this.props.valid}
                        onClick={() => this.props.dispatch(successErrorMessage(true))}
                    >
                        <span className="fas fa-check">&nbsp;&nbsp;</span>
                        Submit
                    </button>
                    <button
                        type="button"
                        className="cancel-edit-basic-profile-info-form-changes-button"
                        onClick={() => {this.showProfile(); this.props.initialize();}}
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
    initialValues: state.app.loadedBasicProfileInfoFormData,
    isMessageShowing: state.app.isMessageShowing
});

EditBasicProfileInfoForm = reduxForm({
    form: 'editBasicProfileInfoForm',
    asyncBlurFields: [],
    enableReinitialize: true
})(EditBasicProfileInfoForm);

EditBasicProfileInfoForm = connect(mapStateToProps)(EditBasicProfileInfoForm);

export default reduxForm({
    form: 'editBasicProfileInfo',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editBasicProfileInfo', Object.keys(errors)[0]))})(EditBasicProfileInfoForm);