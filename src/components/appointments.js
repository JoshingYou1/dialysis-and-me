import React from 'react';
import AppointmentsList from './appointmentsList';
import AppointmentsShow from './appointmentsShow';
import NavigationBar from './navBar';
import {connect} from 'react-redux';
import { fetchAppointments,  toggleAppointmentInfo, selectAppointmentById } from '../actions';
import requiresLogin from './requires-login';
import Footer from './footer';

export class Appointments extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAppointments(this.props.user.id));
    }

    chooseAppointmentsByMonth(choice) {
        const appointments = this.props.appointments.filter(result => {
            const resultMonth = new Date(result.date).getMonth();
            return resultMonth === choice;
        });
        this.props.dispatch(selectAppointmentById(appointments));
        this.toggleAppointmentInfo();
    }

    toggleAppointmentInfo() {
        this.props.dispatch(toggleAppointmentInfo(true));
    }

    render() {
        if (this.props.appointments) {
            console.log('this.props.appointments', this.props.appointments);
            const list = this.props.appointments.map(l => {
                let appointmentDate = new Date(l.date);
                    
                    let day = appointmentDate.getDate();
                    if (day < 10) {
                        day = `0${day}`
                    }
                    let month = appointmentDate.getMonth() + 1;
                    if (month < 10) {
                        month = `0${month}`;
                    }
                    const year = appointmentDate.getFullYear();
            
                    let formattedAppointmentDate = `${month}/${day}/${year}`;
                return {
                    id: l._id,
                    date: formattedAppointmentDate
                };
            });
            return (
                <div className="container">
                    <NavigationBar />
                    <main role="main">
                        <h1>Appointments</h1>
                        <section className="grid">
                            <AppointmentsList list={list} chooseAppointmentsByMonth={choice => this.chooseAppointmentsByMonth(choice)}/>
                            <AppointmentsShow />
                        </section>
                    </main>
                    <Footer />
                </div>
            );
        }
        return (
            <div>
                Loading...
            </div>
        );
    }
}

const mapStateToProps = state => ({
    appointments: state.app.appointments,
    user: state.auth.currentUser,
    isAppointmentInfoShowing: state.isAppointmentInfoShowing
});

export default requiresLogin()(connect(mapStateToProps)(Appointments));