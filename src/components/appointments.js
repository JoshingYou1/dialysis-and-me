import React from 'react';
import AppointmentsList from './appointmentsList';
import AppointmentsShow from './appointmentsShow';
import NavigationBar from './navBar';
import {connect} from 'react-redux';
import { fetchAppointments, selectAppointmentById, toggleAppointmentInfo } from '../actions';
import requiresLogin from './requires-login';

export class Appointments extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAppointments(this.props.user.id));
    }

    chooseAppointment(choice) {
        const appointment = this.props.appointments.find(result => {
            return result._id === choice;
        });
        this.props.dispatch(selectAppointmentById(appointment));
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
                <div>
                    <NavigationBar />
                    <h1>Appointments</h1>
                    <section>
                        <AppointmentsList list={list} chooseAppointment={choice => this.chooseAppointment(choice)}/>
                        <AppointmentsShow />
                    </section>
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