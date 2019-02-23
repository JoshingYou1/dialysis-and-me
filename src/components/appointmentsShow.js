import React from 'react';
import { connect } from 'react-redux';
import {
    toggleAppointmentInfo,
    loadAppointmentFormData,
    editSelectedAppointmentById,
    deleteAppointment
} from '../actions';
import EditAppointmentForm from './editAppointmentForm';

export class AppointmentsShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animate: true
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.chosenAppointments !== prevProps.chosenAppointments) {
            this.setState({
                animate: !this.state.animate,
            })
        }
    }

    showAppointmentForm(a) {
        this.props.dispatch(loadAppointmentFormData(a));
        this.props.dispatch(editSelectedAppointmentById(a));
    }

    render() {
        let className = this.state.animate ? "appointments-show-list-item" : "appointments-show-list-item-2";
        if (this.props.chosenAppointments) {
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
                            className={className + (a._id === this.props.loadedAppointmentFormData._id ? ' hidden-1' : '')}
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
                            <span className="grid-f-span">
                                {a.address.city},&nbsp;
                                {a.address.state}&nbsp;
                                {a.address.zipCode}
                            </span>

                            <span className="grid-e-span">Phone number:</span>
                            <span className="grid-f-span">{a.phoneNumber}</span>
                            <div className="appointment-button-holder-sm">
                                <button
                                    className="edit-appointment-button-sm"
                                    onClick={() => this.showAppointmentForm(a)}
                                >
                                    <span className="fas fa-edit">&nbsp;&nbsp;</span>
                                    Edit
                            </button>
                                <button
                                    className="delete-appointment-button-sm"
                                    onClick={() => this.props.dispatch(deleteAppointment(this.props.user.id, a._id))}
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
                <div className={"show-a " + (this.props.isAppointmentInfoShowing ? '' : ' hidden-1')}>
                    <button className="desktop-hide" onClick={() => this.props.dispatch(toggleAppointmentInfo(false))}>
                        <span className="fas fa-times 2x a"></span>
                    </button>
                    <section className="appointments-show-section">
                        <div className={"no-appointments-div " + (this.props.chosenAppointments.length !== 0 ? 'hidden-1' : '')}>
                            <h2 
                                className={"no-appointments-h2 " + (this.props.chosenAppointments.length === 0 ? '' : 'hidden-1')}
                            >
                                No appointments for this month
                            </h2>
                        </div>
                        <ul className={"appointments-show-list " + (this.props.chosenAppointments.length === 0 ? 'hidden-1' : '')}>
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
        isMessageShowing: state.app.isMessageShowing
    }
};

export default connect(mapStateToProps)(AppointmentsShow);