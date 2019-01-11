import React from 'react';
import {connect} from 'react-redux';

export function Footer(props) {
    return (
        <div className="footer-div">
            <footer>
                &#169; 2018 Joshua Drumm All Rights Reserved
            </footer>
        </div>
    );
}

export default connect()(Footer);