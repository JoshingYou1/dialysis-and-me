import React from 'react';
import {connect} from 'react-redux';

export function User(props) {
    const user = props.user;
    
    return (
        <div className="user-div">
            <p className="user-p">{user}</p>
        </div>
    );
}

export default connect()(User);