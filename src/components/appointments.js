import React from 'react';
import AppointmentsByMonth from './appointmentsByMonth';
import AppointmentShow from './appointmentShow';
import NavigationBar from './navBar';
import Sidebar from './sidebar';

export default function Appointments(props) {
    return (
        <div>
            <NavigationBar />
            <Sidebar />
            <h1></h1>
            <section>
                <AppointmentsByMonth />
                <AppointmentShow />
            </section>
        </div>
    );
}