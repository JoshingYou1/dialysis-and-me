import React from 'react';
import {Link} from 'react-router-dom';

export default function Sublinks(props) {
    const sublinks = props.sublinks.map((sl, i) => {
        console.log('props.parent', i + props.parent);
        return <li><Link className="sidebar-sublink" to={sl.link} key={i + props.parent}>{sl.display}</Link></li>
    });
    return (
        <ul className="sidebar-sublinks-list">
            {sublinks}
        </ul>
    );
}