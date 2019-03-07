import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {toggleSidebar, toggleSublinks} from '../actions';

export class Sublinks extends React.Component {
    render() {
        const sublinks = this.props.sublinks.map((sl, i) => {
            return (
                <li className="sublinks-list-item">
                    <Link 
                        className="sidebar-sublink" 
                        to={sl.link} 
                        key={i + this.props.parent}
                        onClick={() => {this.props.dispatch(toggleSidebar()); this.props.dispatch(toggleSublinks())}}
                    >
                        {sl.display}
                    </Link>
                </li>
            );
        });
        return (
            <ul className="sidebar-sublinks-list">
                {sublinks}
            </ul>
        );
    }
}

export default connect()(Sublinks)