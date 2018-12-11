import React from 'react';
import NavigationBar from './navBar';
import Sidebar from './sidebar';
import {connect} from 'react-redux';

export class Doctors extends React.Component {
    constructor(props) {
        super(props);
    }

    sidebarLinks = [
    {
        display: 'Home',
        link: '/home'
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
                <h1>Your doctors</h1>
                <section>
                    <p>Sally May</p>
                    <p>Nephrologist</p>
                    <p>Nephrologists of Northeast Florida</p>
                    <p>Office address:</p>
                    <p>1 Martin Luther King Dr</p>
                    <p>Jacksonville, FL 32281</p>
                    <p>Phone number: 904-321-3222</p>
                    <p>Fax number: 904-321-3411</p>
                </section>
            </div>
        );
    }
}

export default connect()(Doctors);