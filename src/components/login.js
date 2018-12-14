import React from 'react';
import {LoginForm} from './login-form';
import {connect} from 'react-redux';

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LoginForm />
            </div>
        );
    }
}

export default connect()(Login);