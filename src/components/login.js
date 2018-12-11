import React from 'react';
import {connect} from 'react-redux';

export function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <fieldset>
                    <legend></legend>
                    <label>Username</label>
                    <input></input>
                    <label>Password</label>
                    <input></input>
                </fieldset>
            </form>
        </div>
    );
}

export default connect()(Login);