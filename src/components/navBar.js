import React from 'react';
import User from './user';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { clearAuthToken } from '../local-storage';
import {clearAuth} from '../actions/auth';
import {Link} from 'react-router-dom';

export class NavigationBar extends React.Component {
    logout() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        return (
            <header>
                <Link to="/dashboard">
                    <img className="nav-logo a" src="/dialysis-and-me-logo.png" alt="Logo" aria-hidden="true"></img>
                </Link>
                <div className="header-div b">
                    <User user={this.props.username}/>
                    <button className="logout-button" onClick={() => this.logout()}>Log Out</button>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username
    };
};

export default requiresLogin()(connect(mapStateToProps)(NavigationBar));