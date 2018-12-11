import React from 'react';
import {connect} from 'react-redux';

export function User(props) {
    const user = props.user;
    
    return (
        <div>
            <p>{user.username}</p>
        </div>
    );
}

export default connect()(User);