import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LoginForm from './loginForm';

export function Login(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="login-container">
            <main role="main" className="login">
                <img className="login-logo" src="/dialysis-and-me-logo-white.png" alt="Logo" aria-hidden="true"></img>
                <LoginForm />
            </main>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login);