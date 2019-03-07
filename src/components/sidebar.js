import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Sublinks from './sublinks';
import {toggleSidebar, toggleSublinks} from '../actions';


export class Sidebar extends React.Component {

    render() {
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
                link: '/profile'
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
                <li className="sidebar-list-item">
                    <Link
                        className="sidebar-link"
                        to={l.link}
                        key={i}
                        onClick={() => this.props.dispatch(toggleSidebar())}
                    >
                        {l.display}
                    </Link>
                    <button 
                        className={"fas fa-caret-down fa-2x " + (this.props.areSublinksShowing ? 'hidden-1' : '')}
                        onClick={() => this.props.dispatch(toggleSublinks())}
                    >
                    </button>
                    <button 
                        className={"fas fa-caret-up fa-2x " + (this.props.areSublinksShowing ? '' : 'hidden-1')}
                        onClick={() => this.props.dispatch(toggleSublinks())}
                    >
                    </button>
                    <div className={"sublinks-div " + (this.props.areSublinksShowing ? '' : 'hidden-1')}>
                        <Sublinks 
                            parent={l.display.replace(' ', '')}
                            sublinks={l.sublinks}
                        />
                    </div>
                </li>
                );
            }

            return (
                <li className="sidebar-list-item">
                    <Link 
                        className="sidebar-link-2"
                        to={l.link}
                        key={i}
                        onClick={() => this.props.dispatch(toggleSidebar())}
                    >
                        {l.display}
                    </Link>
                </li>
            );
    });

        return (
            <div>
                <button className="sidebar-button" onClick={() => this.props.dispatch(toggleSidebar())}>
                    <span className="fas fa-times 2x c"></span>
                </button>
                <nav>
                    <ul className="sidebar-list">{links}</ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    areSublinksShowing: state.app.areSublinksShowing
});

export default connect(mapStateToProps)(Sidebar);