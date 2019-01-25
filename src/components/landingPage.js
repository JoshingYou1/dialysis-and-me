import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

export function LandingPage(props) {
   if (props.loggedIn) {
       return <Redirect to="/dashboard" />;
   }

    return (
        <main role="main" className="landing-main">
            <img className="logo" src="/dialysis-and-me-logo.png" alt="Logo" aria-hidden="true"></img>
            <h1>Dialysis & Me</h1>
            <h2>Take control of your kidney disease!</h2>
            <p>This portal has all of the tools you need as a dialysis patient to manage your condition and live life to the fullest.</p>
            <Link to="/login">Get Started!</Link>
        </main>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);