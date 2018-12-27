import React from 'react';
import Sidebar from './sidebar';
import NavigationBar from './navBar';
import {connect} from 'react-redux';
import { fetchProfileInfo } from '../actions';
import requiresLogin from './requires-login';

export class Profile extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProfileInfo(this.props.user.id));
    }

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
        console.log('profile', this.props.profile);
        return (
            <div>
                <NavigationBar />
                <Sidebar links={this.sidebarLinks}/>
                <h1></h1>
                <section>
                    <p>DOB: {this.props.profile.dateOfBirth}</p>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
        profile: state.app.profile
    };
}

export default requiresLogin()(connect(mapStateToProps)(Profile));