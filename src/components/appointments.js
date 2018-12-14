import React from 'react';
import AppointmentsList from './appointmentsList';
import AppointmentsShow from './appointmentsShow';
import NavigationBar from './navBar';
import Sidebar from './sidebar';
import {connect} from 'react-redux';

export class Appointments extends React.Component {
    constructor(props) {
        super(props);
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
        const list = this.props.appointments.map(l => {
            return {
                id: l.id,
                date: l.date
            };
        });
        return (
            <div>
                <NavigationBar />
                <Sidebar links={this.sidebarLinks}/>
                <h1>Appointments</h1>
                <section>
                    <AppointmentsList list={list} chooseAppointment={choice => this.chooseAppointment(choice)}/>
                    <AppointmentsShow />
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    appointments: state.appointments,
    user: state.user
});

export default connect(mapStateToProps)(Appointments);