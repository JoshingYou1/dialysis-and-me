import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {toggleSidebar} from '../actions';

export class Sublinks extends React.Component {
    render() {
        const sublinks = this.props.sublinks.map((sl, i) => {
            console.log('props.parent', i + this.props.parent);
            return (
                <li className="sublinks-list-item">
                    <Link 
                        className="sidebar-sublink" 
                        to={sl.link} 
                        key={i + this.props.parent}
                        onClick={() => {this.props.dispatch(toggleSidebar()); this.refreshPage()}}
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