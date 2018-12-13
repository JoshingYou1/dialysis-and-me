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
        <h1>The importance of patient education</h1>
        <section className="content-container patient-education">
            <p>
                Patient education involves healthcare professionals teaching patients about their health so they may better understand their \n
                condition. The overall aim of patient education is to improve individual health as well as enhance the performance of the \n 
                healthcare industry as a whole. Here are some of the benefits that patient education provides:
            </p>
            <h2>Increased Patient Understanding</h2>
            <p>
                Patient education ensures that patients are well-informed about their own health. This could mean teaching them about the \n
                side-effects of their condition, discussing their diagnosis, going through possible treatment options or looking at ways to \n
                to prevent their condition from deteriorating. This level of understanding could reduce a patient’s anxiety and could also \n
                build trust between patient and care provider. An increased understanding puts patients in a better position to make informed \n
                decisions regarding their healthcare.
            </p>
            <h2>More active approach to healthcare</h2>
            <p>
                An educated patient may also be able to self-manage certain elements of their care. Obviously there will always be certain aspects \n
                of care that only professionals can administer, but some elements could be managed by the patient, which would relieve some of the \n
                burden from providers.
            </p>
            <h2>Enhanced motivation and better outcomes</h2>
            <p>
                If a patient is well educated on their condition, they will no doubt understand what goals they need to work towards in order to \n
                improve their health. In this case, educated patients could be more motivated to reach certain healthcare goals, which would in \n
                turn improve their overall health more quickly and more efficiently.
            </p>
        </section>
        </div>
    
      );
  }
}

export default connect()(PatientEducation);