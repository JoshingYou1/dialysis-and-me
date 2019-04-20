import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {toggleSidebar, toggleSublinks} from '../actions';

export class Sublinks extends React.Component {
    onClick() {
        this.props.dispatch(toggleSidebar());
        this.props.dispatch(toggleSublinks());
        this.forceUpdate()
    }

    render() {
        const sublinks = this.props.sublinks.map((sl, i) => {
            return (
                <li className="sublinks-list-item" key={i + this.props.parent}>
                    <Link 
                        className="sidebar-sublink" 
                        to={sl.link} 
                        onClick={this.onClick}
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