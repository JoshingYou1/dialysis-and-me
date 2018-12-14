import React from 'react';
import {LoginForm} from './login-form';

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