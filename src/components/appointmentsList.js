import React from 'react';

export default function AppointmentsList(props) {
    const list = props.list.map((l, i) => (
        <li onClick={e => props.chooseAppointment(l.id)} key={i}>
            {l.date}
        </li>
    ));

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
    
    return (
        <div>
            <h2>Appointments by Month</h2>
            <section>
                <ul>{list}</ul>
            </section>
        </div>
    );
}