import React from 'react';
import { connect } from 'react-redux';
import {
    toggleAppointmentInfo,
    loadAppointmentFormData,
    editSelectedAppointmentById,
    deleteAppointment,
    toggleAppointmentList
} from '../actions';
import EditAppointmentForm from './editAppointmentForm';

export class AppointmentsShow extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.chosenAppointments !== prevProps.chosenAppointments) {
            console.log('Hello world!!')
            let scrollbar = document.getElementsByClassName('appointments-show-list');
            return scrollbar[0].scrollTop = 320;
        }
    }

    deleteAppointmentHandler(a, formattedAppointmentDate) {
        if (window.confirm(`Are you sure you want to remove this appointment scheduled for ${formattedAppointmentDate}?`)) {
            this.props.dispatch(deleteAppointment(this.props.user.id, a._id))
        }
    }

    showAppointmentForm(a) {
        this.props.dispatch(loadAppointmentFormData(a));
        this.props.dispatch(editSelectedAppointmentById(a));
    }

    render() {
        if (this.props.deletedAppointment) {
            return (
                <div className={"message show-a delete-appointment-success-message " + (this.props.selectedAppointments ? 'hidden-1' : '')}>
                    <p className="delete-appointment-success-message-p">
                        Appointment successfully deleted!
                        <button 
                            className="message-button"
                            onClick={() => this.props.dispatch(toggleAppointmentList())}
                        >
                            <span className="fas fa-share-square">&nbsp;</span>
                            <span>Go back</span>
                        </button>
                    </p>
                </div>
            );
        }
        if (this.props.chosenAppointments.length === 0 && this.props.isAppointmentInfoShowing) {
            return (
                <div 
                    className={"no-appointments-div " + (this.props.chosenAppointments.length !== 0 && this.props.animation === true ? 'hidden-1 ' : '')
                    + (this.props.animation ? 'fade-in-1' : 'fade-in-2')}
                >
                    <button className="desktop-hide" onClick={() => this.props.dispatch(toggleAppointmentInfo(false))}>
                        <span className="fas fa-times 2x a"></span>
                    </button>
                    <h2 className="no-appointments-h2-mobile desktop-hide-2">
                        No appointments for this month
                    </h2>
                    <h2 className="no-appointments-h2-desktop mobile-hide">
                        No appointments for this month
                    </h2>
                </div>
            );
        }
        if (this.props.chosenAppointments.length) {
            const list = this.props.chosenAppointments.map((a, i) => {
                let appointmentDate = new Date(a.date);

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
                return (
                    <li key={i}>
                        <div
                            className={"appointments-show-list-item " + (a._id === this.props.loadedAppointmentFormData._id || this.props.deletedAppointment || this.props.isMessageShowing ? 'hidden-1' : '')}
                        >
                            <h2 className="appointment-date-h2">{formattedAppointmentDate}</h2>

                            <span className="grid-e-span">Reason:</span>
                            <span className="grid-f-span">{a.description}</span>

                            <span className="grid-e-span">Time:</span>
                            <span className="grid-f-span">{a.time}</span>

                            <span className="grid-e-span">With:</span>
                            <span className="grid-f-span">{a.with}</span>

                            <span className="grid-e-span">Title:</span>
                            <span className="grid-f-span">{a.title}</span>

                            <span className="grid-e-span">Where:</span>
                            <span className="grid-f-span">{a.where}</span>

                            <span className="grid-e-span">Address:</span>
                            <span className="grid-f-span">{a.address.street}</span>

                            <span className="grid-e-span">City/State/Zip:</span>
                            <span className="grid-f-span">{a.address.city},&nbsp;{a.address.state}&nbsp;{a.address.zipCode}</span>

                            <span className="grid-e-span">Phone number:</span>
                            <span className="grid-f-span">{a.phoneNumber}</span>
                            <div className="appointment-button-holder">
                                <button
                                    className="edit-appointment-button"
                                    onClick={() => this.showAppointmentForm(a)}
                                >
                                    <span className="fas fa-edit">&nbsp;&nbsp;</span>
                                    Edit
                            </button>
                                <button
                                    className="delete-appointment-button"
                                    onClick={() => this.deleteAppointmentHandler(a, formattedAppointmentDate)}
                                >
                                    <span className="fas fa-trash-alt">&nbsp;&nbsp;</span>
                                    Delete
                            </button>
                            </div>
                        </div>
                        <div
                            className={"edit-appointment-form-component-div " + (a._id === this.props.loadedAppointmentFormData._id ? '' : 'hidden-1')}
                        >
                            <EditAppointmentForm />
                        </div>
                    </li>
                )
            });
            return (
                <div className={"show-a " + (this.props.isAppointmentInfoShowing ? '' : 'hidden-1')}>
                    <button className="desktop-hide" onClick={() => this.props.dispatch(toggleAppointmentInfo(false))}>
                        <span className="fas fa-times 2x a"></span>
                    </button>
                    <section className={"appointments-show-section " + (this.props.animation ? 'fade-in-1' : 'fade-in-2')}>
                        <ul className={"appointments-show-list " + (this.props.chosenAppointments.length !== 0 ? '' : 'hidden-1')}>
                            {list}
                        </ul>
                    </section>
                </div>
            );
        }
        return (
            <div className="appointments-show-text show-a mobile-hide">
                <h2 
                    className={"appointments-show-instruction-h2 " + (this.props.isAppointmentInfoShowing ? 'hidden-1' : '')}
                >
                    Please select a calendar month
                </h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
        chosenAppointments: state.app.selectedAppointments,
        isAppointmentInfoShowing: state.app.isAppointmentInfoShowing,
        selectedAppointmentToEdit: state.app.selectedAppointmentToEdit,
        loadedAppointmentFormData: state.app.loadedAppointmentFormData,
        isMessageShowing: state.app.isMessageShowing,
        deletedAppointment: state.app.deletedAppointment,
        animation: state.app.animation
    }
};

export default connect(mapStateToProps)(AppointmentsShow);