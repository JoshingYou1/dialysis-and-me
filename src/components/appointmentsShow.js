import React from 'react';
import {connect} from 'react-redux';
import {
    toggleAppointmentInfo,
    loadAppointmentFormData,
    editSelectedAppointmentById
} from '../actions';
import { EditAppointmentForm } from './editAppointmentForm';

export class AppointmentsShow extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            animate: true
        }
    }

    componentDidUpdate(prevProps){
        console.log(this.state.animate);
        if (this.props.chosenAppointments !== prevProps.chosenAppointments) {
            this.setState({
                animate: !this.state.animate,
            })
        }
    }

    // showAppointmentMenu(a) {
    //     this.props.dispatch(toggleAppointmentMenu());
    //     this.props.dispatch(appointmentMenuId(a._id));
    // }

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
                <li className={className} key={i}>
                    {/* <div>{a._id}</div>
                    <div>{this.props.chosenAppointments._id}</div> */}
                    {/* <span 
                        className="fas fa-ellipsis-v a"
                        onClick={() => this.showAppointmentMenu(a)}
                    >
                    </span>
                    <div 
                        className={"appointment-button-holder-lg " + (this.props.appointmentMenu === a._id ? '' : 'hidden-1')}
                    >
                        <button 
                            className="edit-appointment-button-lg"
                            onClick={() => {this.showAppointmentForm(a)}}
                        >
                        <span className="fas fa-edit">&nbsp;&nbsp;</span>
                            Edit
                        </button>
                        <button 
                            className="delete-appointment-button-lg"
                            onClick={() => this.props.dispatch(deleteAppointment())}
                        >
                        <span className="fas fa-trash-alt">&nbsp;&nbsp;</span>
                            Delete
                        </button>
                    </div>
                    <div className={"edit-appointment-form-div " + (a._id === this.props.loadedAppointmentFormData._id ? '' : 'hidden-1')}>
                            <EditAppointmentForm />
                    </div> */}
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
                            // onClick={this.props.dispatch(deleteAppointment())}
                        >
                        <span className="fas fa-trash-alt">&nbsp;&nbsp;</span>
                            Delete
                        </button>
                    </div>
                    <div className={"edit-appointment-form-div " + (a._id === this.props.loadedAppointmentFormData._id ? '' : 'hidden-1')}>
                            <EditAppointmentForm />
                    </div>
                </li>
            );
        });
            return (
                <div className={"show " + (this.props.isAppointmentInfoShowing ? '' : 'hidden-1')}>
                    <button className="desktop-hide" onClick={() => this.props.dispatch(toggleAppointmentInfo(false))}>
                        <span className="fas fa-times 2x a"></span>
                    </button>
                    <section className="appointments-show-section">
                        <ul className="appointments-show-list">
                            {list}
                        </ul>
                    </section>
                </div>
            );
        }
        else {
            return (
                <div className="appointments-show-text show mobile-hide">
                    <h2 className="appointments-show-instruction-h2">Please select a calendar month</h2>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        chosenAppointments: state.app.selectedAppointments,
        isAppointmentInfoShowing: state.app.isAppointmentInfoShowing,
        selectedAppointmentToEdit: state.app.selectedAppointmentToEdit,
        loadedAppointmentFormData: state.app.loadedAppointmentFormData
    }
};

export default connect(mapStateToProps)(AppointmentsShow);