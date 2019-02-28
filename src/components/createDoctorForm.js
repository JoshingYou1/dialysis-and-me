import React from 'react';
import {Field, reduxForm, SubmissionError, focus} from 'redux-form';
import InputTwo from './inputTwo';
import {API_BASE_URL} from '../config';
import {required, nonEmpty, isTrimmed, maxLength} from '../validators';
import { connect } from 'react-redux';
import InputHidden from './inputHidden';
import { chooseCreateDoctor, successErrorMessage, createDoctorSuccess } from '../actions';

const max = maxLength(2);

export class CreateDoctorForm extends React.Component {
    showDoctor() {
        this.props.dispatch(chooseCreateDoctor());
    }
    onSubmit(values) {
        return fetch(`${API_BASE_URL}/api/patients/${this.props.user.id}/doctors`, {
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
            .then(d => this.props.dispatch(createDoctorSuccess(d)))
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
                <div className="message create-doctor-success-message">
                    <p className="create-doctor-success-message-p">
                        Doctor successfully added to your list!&nbsp;
                        <button 
                            className="form-message-button"
                            onClick={() => this.showDoctor()}
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
                <div className="message create-doctor-error-message">
                    <p className="create-doctor-error-message-p">
                        {this.props.error}&nbsp;
                        <button 
                            className="form-message-button"
                            onClick={() => this.showDoctor()}
                        >
                            <span className="fas fa-share-square">&nbsp;</span>
                            <span>Go back</span>
                        </button>
                    </p>
                </div>
            );
        }
        return (
            <div className="create-doctor-form-div">
                {successMessage}
                {errorMessage}
                <form 
                    className={"create-doctor-form " + (this.props.isMessageShowing ? 'hidden-1' : '')}
                    onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                >
                    <Field 
                        name="name.firstName"
                        type="text"
                        component={InputTwo}
                        label="First Name"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder="Jane"
                    />
                    <Field 
                        name="name.lastName"
                        type="text"
                        component={InputTwo}
                        label="Last Name"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder="Doe"
                    />
                    <Field 
                        name="practice"
                        type="text"
                        component={InputTwo}
                        label="Practice"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder="Oncologist"
                    />
                    <Field 
                        name="company"
                        type="text"
                        component={InputTwo}
                        label="Company"
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
                        validate={[required, nonEmpty, isTrimmed, max]}
                        placeholder="FL"
                    />
                    <Field 
                        name="address.zipCode"
                        type="text"
                        component={InputTwo}
                        label="Zip Code"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder="12345"
                    />
                    <Field 
                        name="phoneNumber"
                        type="text"
                        component={InputTwo}
                        label="Phone Number"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder="123-456-7890"
                    />
                    <Field 
                        name="faxNumber"
                        type="text"
                        component={InputTwo}
                        label="Fax Number"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder="123-456-1234"
                    />
                    <Field 
                        name=""
                        component={InputHidden}
                    />
                    <button
                        className="create-doctor-submit-button"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}
                        onClick={() => this.props.dispatch(successErrorMessage())}
                    >
                        <span className="fas fa-check">&nbsp;&nbsp;</span>
                        Submit
                    </button>
                    <button 
                        type="button"
                        className="cancel-create-doctor-form-changes-button"
                        onClick={() => {this.showDoctor(); this.props.reset()}}
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
CreateDoctorForm = connect(mapStateToProps)(CreateDoctorForm);

export default reduxForm({
    form: 'createDoctor',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('createDoctor', Object.keys(errors)[0]))})(CreateDoctorForm);