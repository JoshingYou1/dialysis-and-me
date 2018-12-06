import React from 'react';

export default function Sidebar(props) {
    return (
        <div>
            <section>
                <Link to="/home">Home</Link>
                <Link to="/doctors">Doctors</Link>
                <Link to="/profile">My Profile</Link>
                <Link to="/patient-education">Patient Education</Link>
                <Link to="/lab-results">Lab Results</Link>
                <Link to="/appointments">Appointments</Link>
            </section>
        </div>
    );
}