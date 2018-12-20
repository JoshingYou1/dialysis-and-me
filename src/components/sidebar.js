import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Sublinks from './sublinks';

export function Sidebar(props) {
   const links = props.links.map((l, i) => {
        if (l.sublinks) {
            return (
            <li>
                <Link className="sidebar-link" to={l.link} key={i}>{l.display}</Link>
                <Sublinks parent={l.display.replace(' ', '')} sublinks={l.sublinks}/>
            </li>
            );
        }

        return <li><Link className="sidebar-link" to={l.link} key={i}>{l.display}</Link></li>;
   });

    return (
        <nav>
            <ul className="sidebar-list">{links}</ul>
        </nav>
    );
}

export default connect()(Sidebar);