import React from 'react';
import User from './user';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Login from './login';

export class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    userCredentials = {
        
    }

    render() {
        return (
            <div>
                <nav>
                    <User user={this.userCredentials.username}/>
                    <Link exact path="/login" component={Login}>Sign Out</Link>
                </nav>
            </div>
        );
    }
}

export default connect()(NavigationBar);