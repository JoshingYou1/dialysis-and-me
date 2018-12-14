import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

export function LandingPage(props) {
   if (props.loggedIn) {
       return <Redirect to="/dashboard" />;
   } 

    return (
        <div>
            <h1>Dialysis & Me</h1>
            <h2>Patient Portal</h2>
            <Link to="/login">Get Started!</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);