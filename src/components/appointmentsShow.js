import React from 'react';
import {connect} from 'react-redux';
import {toggleAppointmentInfo} from '../actions';

export function AppointmentsShow(props) {
    if (props.chosenAppointment) {
        return (
            <div className={"show " + (props.isAppointmentInfoShowing ? '' : 'hidden-4')}>
                <button className="desktop-hide" onClick={() => props.dispatch(toggleAppointmentInfo(false))}>
                    <span className="fas fa-times 2x"></span>
                </button>
                <section className="appointments-show-section">
                    <span>Description:</span>
                    <span>{props.chosenAppointment.description}</span>
                </section>
            </div>
        );
    }
    else {
        return (
            <div className="lab-results-show-text show mobile-hide">
                <h2>Please select a calendar month</h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        chosenAppointment: state.app.selectedAppointment,
        isAppointmentInfoShowing: state.app.isAppointmentInfoShowing
    }
};

export default connect(mapStateToProps)(AppointmentsShow);