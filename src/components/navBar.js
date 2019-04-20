import React from 'react';
import User from './user';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { clearAuthToken } from '../local-storage';
import {clearAuth} from '../actions/auth';
import {Link} from 'react-router-dom';
import { toggleUserInfo, toggleSidebar } from '../actions';
import Sidebar from './sidebar';

export class NavigationBar extends React.Component {
    logout() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        return (
            <header>
                <Link 
                    className="logo-link"
                    to="/dashboard"
                >
                    <img className="nav-logo a" src="/dialysis-and-me-logo.png" alt="Logo" aria-hidden="true"></img>
                    <span className="logo-span-1">Dialysis&</span><span className="logo-span-2">Me</span>
                </Link>
                <div className="header-div b">
                    <div className="header-quick-link-container">
                        <Link 
                            className="header-quick-link"
                            to="/profile"
                            onClick={this.forceUpdate}
                        >
                            Profile
                        </Link>
                        <Link 
                            className="header-quick-link"
                            to="/patient-education"
                            onClick={this.forceUpdate}
                        >
                            Patient Education
                        </Link>
                        <Link 
                            className="header-quick-link"
                            to="/lab-results"
                            onClick={this.forceUpdate}
                        >
                            Lab Results
                        </Link>
                        <Link 
                            className="header-quick-link"
                            to="/doctors"
                            onClick={this.forceUpdate}
                        >
                            Doctors
                        </Link>
                        <Link 
                            className="header-quick-link"
                            to="/appointments"
                            onClick={this.forceUpdate}
                        >
                            Appointments
                        </Link>
                    </div>
                    <div onClick={() => this.props.dispatch(toggleUserInfo())} className="user-dropdown-div">
                        <span className={"fas fa-sort-down " + (this.props.isUserInfoShowing ? 'fas fa-sort-up' : '')}></span>
                        <span className="fas fa-user-circle"></span>
                    </div>
                    <div className={"user-display " + (this.props.isUserInfoShowing ? '' : 'hidden-1')}>
                        <User user={this.props.username}/>
                        <button className="logout-button" onClick={() => {this.logout(); this.props.dispatch(toggleUserInfo())}}>Log Out</button>
                    </div>
                    <span 
                        className="fas fa-bars" 
                        onClick={() => {this.props.dispatch(toggleSidebar())}}
                    >
                    </span>
                    <div className={"sidebar-display " + (this.props.isSidebarShowing ? '' : 'hidden-2')}>
                        <Sidebar />
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username,
        isUserInfoShowing: state.app.isUserInfoShowing,
        isSidebarShowing: state.app.isSidebarShowing
    };
};

export default requiresLogin()(connect(mapStateToProps)(NavigationBar));