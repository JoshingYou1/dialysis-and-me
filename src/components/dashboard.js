import React from 'react';
import Sidebar from './sidebar';
import NavigationBar from './navBar';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export class Dashboard extends React.Component {

    sidebarLinks = [
    {
        display: 'Dashboard',
        link: '/dashboard'
    },
    {
        display: 'Appointments',
        link: '/appointments'
    },
    {
        display: 'Doctors',
        link: '/doctors'
    },
    {
        display: 'Lab Results',
        link: '/lab-results'
    },
    {
        display: 'My Profile',
        link: '/profile',
        sublinks : [
            {
                display: 'Contact Information',
                link: '/profile/contact-info'
            },
            {
                display: 'Primary Insurance Information',
                link: '/profile/primary-insurance-info'
            },
            {
                display: 'Secondary Insurance Information',
                link: '/profile/secondary-insurance-info'
            }   
        ]
    },
    {
        display: 'Patient Education',
        link: '/patient-education',
        sublinks: [
            {
                display: 'ESRD Information',
                link: '/patient-education/esrd-info'
            },
            {
                display: 'Living with ESRD',
                link:'/patient-education/living-with-esrd'
            },
            {
                display: 'Nutritional Information',
                link: '/patient-education/nutritional-info'
            }
        ]
    }
  ];

    render() {
        return (
            <div className="container">
                <NavigationBar />
                <Sidebar links={this.sidebarLinks}/>
                <main role="main">
                    <h1 className="dashboard-h1">Welcome to your dashboard</h1>
                    <section className="dashboard-links">
                        <div className="dashboard-link-container">
                            <Link className="dashboard-link" to="/profile">
                                <p className="fa fa-user fa-5x" aria-hidden="true"></p>
                            </Link>
                            <Link className="dashboard-link" to="/profile">My Profile</Link>
                        </div>
                        <div className="dashboard-link-container">
                            <Link className="dashboard-link" to="/patient-education">
                                <p className="fa fa-book fa-5x" aria-hidden="true"></p>
                            </Link>
                            <Link className="dashboard-link" to="/patient-education">Patient Education</Link>
                        </div>
                        <div className="dashboard-link-container">
                            <Link className="dashboard-link" to="/lab-results">
                                <p className="fa fa-vial fa-5x" aria-hidden="true"></p>
                            </Link>
                            <Link className="dashboard-link" to="/lab-results">Lab Results</Link>
                        </div>
                        <div className="dashboard-link-container">
                            <Link className="dashboard-link" to="/doctors">
                                <p className="fa fa-user-md fa-5x" aria-hidden="true"></p>
                            </Link>
                            <Link className="dashboard-link" to="/doctors">Doctors</Link>
                        </div>
                        <div className="dashboard-link-container">
                            <Link className="dashboard-link" to="/appointments">
                                <p className="fa fa-calendar-alt fa-5x" aria-hidden="true"></p>
                            </Link>
                            <Link className="dashboard-link" to="/appointments">Appointments</Link>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default connect()(Dashboard);