import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export function Sidebar(props) {
   const links = props.links.map((l, i) => (
    <Link to={l.link} key={i}>{l.display}</Link>
));

    return (
        <div>
            <section>
                {links}
            </section>
        </div>
    );
}

export default connect()(Sidebar);