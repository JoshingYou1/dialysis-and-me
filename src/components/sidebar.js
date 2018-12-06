import React from 'react';

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