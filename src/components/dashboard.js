import React from 'react';
import NavigationBar from './navBar';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { Footer } from './footer';

export class Dashboard extends React.Component {

    render() {
        return (
            <div className="container">
                <NavigationBar />
                <main role="main">
                    <h1 className="dashboard-h1">Welcome to your dashboard!</h1>
                    <section className="dashboard-links">
                        <Link className="dashboard-link-container" to="/profile">
                            <div className="link-div">
                                <p className="fa fa-user fa-5x" aria-hidden="true"></p>
                                <p className="dashboard-link-text">My Profile</p>
                            </div>
                        </Link>
                        <Link className="dashboard-link-container" to="/patient-education">
                            <div className="link-div">
                                <p className="fa fa-book fa-5x" aria-hidden="true"></p>
                                <p className="dashboard-link-text">Patient Education</p>
                            </div>
                        </Link>
                        <Link className="dashboard-link-container" to="/lab-results">
                            <div className="link-div">
                                <p className="fa fa-vial fa-5x" aria-hidden="true"></p>
                                <p className="dashboard-link-text" to="/lab-results">Lab Results</p>
                            </div>
                        </Link>
                        <Link className="dashboard-link-container" to="/doctors">
                            <div className="link-div">
                                <p className="fa fa-user-md fa-5x" aria-hidden="true"></p>
                                <p className="dashboard-link-text">Doctors</p>
                            </div>
                        </Link>
                        <Link className="dashboard-link-container" to="/appointments">
                            <div className="link-div">
                                <p className="fa fa-calendar-alt fa-5x" aria-hidden="true"></p>
                                <p className="dashboard-link-text">Appointments</p>
                            </div>
                        </Link>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

export default connect()(Dashboard);