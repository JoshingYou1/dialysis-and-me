import React from 'react';
import {connect} from 'react-redux';
import {toggleAppointmentInfo} from '../actions';

export function AppointmentsShow(props) {
    if (props.chosenAppointments) {
    const list = props.chosenAppointments.map((a, i) => {
        return (
            <li  className="appointments-show-list-item" key={i}>
                <h2 className="appointment-date-h2">{a.date}</h2>

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

                <span className="grid-e-span">City/State/Zip</span>
                <span className="grid-f-span">
                    {a.address.city},&nbsp;
                    {a.address.state}&nbsp;
                    {a.address.zipCode}
                </span>

                <span className="grid-e-span">Phone number:</span>
                <span className="grid-f-span">{a.phoneNumber}</span>
            </li>
        );
    });
        return (
            <div className={"show " + (props.isAppointmentInfoShowing ? '' : 'hidden-1')}>
                <button className="desktop-hide" onClick={() => props.dispatch(toggleAppointmentInfo(false))}>
                    <span className="fas fa-times 2x"></span>
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
                <h2>Please select a calendar month</h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        chosenAppointments: state.app.selectedAppointments,
        isAppointmentInfoShowing: state.app.isAppointmentInfoShowing
    }
};

export default connect(mapStateToProps)(AppointmentsShow);