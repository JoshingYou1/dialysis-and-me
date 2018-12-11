import React from 'react';
import Sidebar from './sidebar';
import NavigationBar from './navBar';
import {connect} from 'react-redux';

export class PatientEducation extends React.Component {
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
        <Sidebar links={this.sideBarLinks} />
        <section className="content-container patient-education">
          <h1>The importance of patient education</h1>
        </section>
        </div>
    
      );
  }
}

export default connect()(PatientEducation);