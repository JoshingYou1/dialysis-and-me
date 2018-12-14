import React from 'react';
import Sidebar from './sidebar';
import NavigationBar from './navBar';
import {connect} from 'react-redux';
import { fetchProfileInfo } from '../actions';

export class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

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
                <h1>John Smith</h1>
                <section>
                    <p>DOB: {this.props.user.dateOfBirth}</p>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    profile: state.profile
})

export default connect(mapStateToProps)(Profile);