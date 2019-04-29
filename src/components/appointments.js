import React from 'react';
import AppointmentsList from './appointmentsList';
import AppointmentsShow from './appointmentsShow';
import NavigationBar from './navBar';
import {connect} from 'react-redux';
import { fetchAppointments,  toggleAppointmentInfo, selectAppointmentsById, chooseCreateAppointment } from '../actions';
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
        if (this.props.isLoading) {
            return (
                <div className="container">
                    <NavigationBar />
                    <main role="main">
                        <div className="loading-div">
                            <div className="sk-circle">
                                <div className="sk-circle1 sk-child"></div>
                                <div className="sk-circle2 sk-child"></div>
                                <div className="sk-circle3 sk-child"></div>
                                <div className="sk-circle4 sk-child"></div>
                                <div className="sk-circle5 sk-child"></div>
                                <div className="sk-circle6 sk-child"></div>
                                <div className="sk-circle7 sk-child"></div>
                                <div className="sk-circle8 sk-child"></div>
                                <div className="sk-circle9 sk-child"></div>
                                <div className="sk-circle10 sk-child"></div>
                                <div className="sk-circle11 sk-child"></div>
                                <div className="sk-circle12 sk-child"></div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            );
        }
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
                        <h1 
                            className={"create-appointment-h1 " + (this.props.isCreateAppointmentFormShowing ? '' : 'hidden-1 ') +
                            (this.props.isMessageShowing ? 'hidden-1' : '')}
                        >
                            Create an Appointment
                        </h1>
                        <section className={"appointments-section " + (this.props.isCreateAppointmentFormShowing ? 'hidden-1' : '')}>
                            <AppointmentsList list={list} chooseAppointmentsByMonth={choice => this.chooseAppointmentsByMonth(choice)}/>
                            <AppointmentsShow />
                        </section>
                        <div className={"create-appointment-div desktop-hide-2 " + (this.props.isAppointmentInfoShowing ? 'hidden-1' : '')}>
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
                        <div className="create-appointment-div mobile-hide">
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
    }
}

const mapStateToProps = state => ({
    appointments: state.app.appointments,
    user: state.auth.currentUser,
    isCreateAppointmentFormShowing: state.app.isCreateAppointmentFormShowing,
    isAppointmentInfoShowing: state.app.isAppointmentInfoShowing,
    deletedAppointment: state.app.deletedAppointment,
    isMessageShowing: state.app.isMessageShowing,
    isLoading: state.app.isLoading
});

export default requiresLogin()(connect(mapStateToProps)(Appointments));