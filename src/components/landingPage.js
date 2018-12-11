import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function LandingPage(props) {
    return (
        <div>
            <h1>Dialysis & Me</h1>
            <h2>Patient Portal</h2>
            <Link to="/login">Get Started!</Link>
        </div>
    );
}

export default connect()(LandingPage);