import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="form-error" aria-live="polite">
                    <p className="login-error">{this.props.error}</p>
                </div>
            );
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {errorMessage}
                <p className="login-p">Log in to your account</p>
                <label className="login-form-label" htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label className="login-form-label" htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button 
                    type="submit"
                    className="login-button"
                    disabled={this.props.pristine || this.props.submitting}
                >
                    Log In
                </button>
                <p>Demo username: <span>demo</span></p>
                <p>Demo password: <span>patient</span></p>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);