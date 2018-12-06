import React from 'react';
import Sidebar from './sidebar';
import NavigationBar from './navBar';

export default function Home(props) {
    return (
        <div>
            <NavigationBar />
            <Sidebar />
            <h1></h1>
            <section>
                <Link to="/doctors">Doctors</Link>
                <Link to="/profile">My Profile</Link>
                <Link to="/patient-education">Patient Education</Link>
                <Link to="/lab-results">Lab Results</Link>
                <Link to="/appointments">Appointments</Link>
            </section>
        </div>
    );
}