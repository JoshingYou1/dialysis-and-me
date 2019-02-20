import React from 'react';
import { connect } from 'react-redux';

export class AppointmentsList extends React.Component {
    render() {
        const months = [
            {
                month: 'January',
                index: 0
            },
            {
                month: 'February',
                index: 1
            },
            {
                month: 'March',
                index: 2
            },
            {
                month: 'April',
                index: 3
            },
            {
                month: 'May',
                index: 4
            },
            {
                month: 'June',
                index: 5
            },
            {
                month: 'July',
                index: 6
            },
            {
                month: 'August',
                index: 7
            },
            {
                month: 'September',
                index: 8
            },
            {
                month: 'October',
                index: 9
            },
            {
                month: 'November',
                index: 10
            },
            {
                month: 'December',
                index: 11
            }
        ];
        
        const list = months.map((m, i) => (
            <li className="appointments-list-item" onClick={e => this.props.chooseAppointmentsByMonth(m.index)} key={i}>
                {m.month}
            </li>
        ));

        return (
            <div className={"appointments-list-div " + (this.props.isAppointmentInfoShowing ? 'hidden-4' : '')}>
                <h2 className="appointments-list-h2">Appointments by Month</h2>
                <section className="appointments-list-section">
                    <ul className="appointments-list">{list}</ul>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAppointmentInfoShowing: state.app.isAppointmentInfoShowing
});

export default connect(mapStateToProps)(AppointmentsList);