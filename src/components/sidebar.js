import React from 'react';
import {Link} from 'react-router-dom';

export default function Sidebar(props) {
   const links = props.links.forEach(l => (
    <Link to={l.link}>{l.display}</Link>
));

    return (
        <div>
            <section>
                {links}
            </section>
        </div>
    );
}