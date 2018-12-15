import React from 'react';
import User from './user';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Login from './login';
import requiresLogin from './requires-login';

export class NavigationBar extends React.Component {

    render() {
        return (
            <div>
                <nav>
                    <User user={this.props.username}/>
                    <Link to="/login">Sign Out</Link>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: currentUser.username
    };
};

export default requiresLogin()(connect(mapStateToProps)(NavigationBar));