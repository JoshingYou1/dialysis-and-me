import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

export function LandingPage(props) {
   if (props.loggedIn) {
       return <Redirect to="/dashboard" />;
   }

    return (
        <div className="landing-page-container">
            <img 
                className="landing-background-image"
                src="https://blog.transonic.com/hubfs/images/2017/_Blog/dialysis-patient-experience.jpg"
                alt="Landing Page Background Image"
                aria-hidden="true"
            ></img>
            <main role="main" className="landing-main">
                <img className="landing-logo" src="/dialysis-and-me-logo.png" alt="Landing Page Logo" aria-hidden="true"></img>
                <span className="landing-logo-span-1">Dialysis&</span><span className="landing-logo-span-2">Me</span>
                <h2 className="landing-h2">Take control of your kidney disease!</h2>
                <p className="landing-p">
                    This portal has all of the tools you need as a dialysis patient to manage your condition and live life to the fullest.
                </p>
                <Link className="landing-link" to="/login">Get Started!</Link>
            </main>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);