import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './landingPage';

import './landingPage.css';

export default function AppContainer(props) {
    return (
        <Router>
            <div className="container">
                <main role="main">
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Registration} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/patient-education" component={PatientEducation} />
                    <Route exact path="/doctors" component={Doctors} />
                    <Route exact path="/lab-results" component={LabResults} />
                    <Route exact path="/appointments" component={Appointments} />
                    <Route exact path="/profile" component={Profile} />
                </main>
            </div>
        </Router>
    );
}
