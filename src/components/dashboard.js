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
        subLinks : [
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
        subLinks: [
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
            <div>
                <NavigationBar />
                <Sidebar links={this.sidebarLinks}/>
                <h1>Welcome to your dashboard</h1>
                <section>
                    <Link to="/doctors">Doctors</Link>
                    <Link to="/profile">My Profile</Link>
                    <Link to="/patient-education">Patient Education</Link>
                    <Link to="/lab-results">Lab Results</Link>
                    <Link to="/appointments">Appointments</Link>
                </section>
            </div>
        );
    }
}

export default connect()(Dashboard);