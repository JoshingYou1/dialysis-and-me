import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Sublinks from './sublinks';
import {toggleSidebar} from '../actions';


export function Sidebar(props) {

    const sidebarLinks = [
        {
            display: 'Dashboard',
            link: '/dashboard'
        },
        {
            display: 'Appointments',
            link: '/appointments'
        },
        {
            display: 'Doctors',
            link: '/doctors'
        },
        {
            display: 'Lab Results',
            link: '/lab-results'
        },
        {
            display: 'My Profile',
            link: '/profile',
            sublinks : [
                {
                    display: 'My dialysis',
                    link: '/profile/my-dialysis'
                },
                {
                    display: 'My Insurance',
                    link: '/profile/my-insurance'
                }  
            ]
        },
        {
            display: 'Patient Education',
            link: '/patient-education',
            sublinks: [
                {
                    display: 'Understanding ESRD',
                    link: '/patient-education/understanding-esrd'
                },
                {
                    display: 'Living with ESRD',
                    link:'/patient-education/living-with-esrd'
                },
                {
                    display: 'Diet for Dialysis',
                    link: '/patient-education/diet-for-dialysis'
                }
            ]
        },
        {
            display: 'About',
            link: '/about'
        }
      ];

    const links = sidebarLinks.map((l, i) => {
        if (l.sublinks) {
            return (
            <li>
                <Link className="sidebar-link" to={l.link} key={i}>{l.display}</Link>
                <Sublinks parent={l.display.replace(' ', '')} sublinks={l.sublinks}/>
            </li>
            );
        }

        return <li><Link className="sidebar-link" to={l.link} key={i}>{l.display}</Link></li>;
   });

    return (
        <div>
            <button className="sidebar-button" onClick={() => props.dispatch(toggleSidebar())}>
                <span className="fas fa-times 2x"></span>
            </button>
            <nav>
                <ul className="sidebar-list">{links}</ul>
            </nav>
        </div>
    );
}

export default connect()(Sidebar);