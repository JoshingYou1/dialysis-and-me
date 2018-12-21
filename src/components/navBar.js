import React from 'react';
import User from './user';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { clearAuthToken } from '../local-storage';
import {clearAuth} from '../actions/auth';

export class NavigationBar extends React.Component {
    logout() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        return (
            <header>
                <img className="nav-logo" src="/dialysis-and-me-logo.png" alt="Logo" aria-hidden="true"></img>
                <div className="header-div">
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