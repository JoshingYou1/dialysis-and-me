import React from 'react';
import AppointmentsList from './appointmentsList';
import AppointmentsShow from './appointmentsShow';
import NavigationBar from './navBar';
import {connect} from 'react-redux';

export class Appointments extends React.Component {

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