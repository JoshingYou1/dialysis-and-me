import React from 'react';
import AppointmentsList from './appointmentsList';
import AppointmentsShow from './appointmentsShow';
import NavigationBar from './navBar';
import {connect} from 'react-redux';
import { fetchAppointments,  toggleAppointmentInfo, selectAppointmentsById, chooseCreateAppointment, discardAppointmentFormChanges } from '../actions';
import requiresLogin from './requires-login';
import Footer from './footer';
import CreateAppointmentForm from './createAppointmentForm';

export class Appointments extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAppointments(this.props.user.id));
    }

    toggleAppointmentInfo() {
        this.props.dispatch(toggleAppointmentInfo(true));
    }

    chooseAppointmentsByMonth(choice) {
        const appointments = this.props.appointments.filter(result => {
            const resultMonth = new Date(result.date).getMonth();
            return resultMonth === choice;
        });
        this.props.dispatch(selectAppointmentsById(appointments));
        this.toggleAppointmentInfo();
    }

    render() {
        if (this.props.appointments) {
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
                        <h1 
                            className={"appointments-h1 " + (this.props.isCreateAppointmentFormShowing ? 'hidden-1 ' : '') +
                            (this.props.isAppointmentInfoShowing ? 'hidden-3' : '')}
                        >
                            Appointments
                        </h1>
                        <h1 className={"create-appointment-h1 " + (this.props.isCreateAppointmentFormShowing ? '' : 'hidden-1')}>
                            Create an Appointment
                        </h1>
                        <section className={"appointments-section " + (this.props.isCreateAppointmentFormShowing ? 'hidden-1' : '')}>
                            <AppointmentsList list={list} chooseAppointmentsByMonth={choice => this.chooseAppointmentsByMonth(choice)}/>
                            <AppointmentsShow />
                        </section>
                        <div className="create-appointment-div">
                        <span className={"create-appointment-span " + (this.props.isCreateAppointmentFormShowing ? 'hidden-1' : '')}>
                            Need to create an appointment?
                        </span>
                        <button
                            className={"create-appointment-button "  + (this.props.isCreateAppointmentFormShowing ? 'hidden-1' : '')}
                            onClick={() => this.props.dispatch(chooseCreateAppointment())}
                        >
                            Click here
                        </button>
                        </div>
                        <div className={"create-appointment-form-component-div " + (this.props.isCreateAppointmentFormShowing ? '' : 'hidden-1')}>
                            <CreateAppointmentForm />
                        </div> 
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
    isCreateAppointmentFormShowing: state.app.isCreateAppointmentFormShowing,
    isAppointmentInfoShowing: state.app.isAppointmentInfoShowing,
    deletedAppointment: state.app.deletedAppointment
});

export default requiresLogin()(connect(mapStateToProps)(Appointments));