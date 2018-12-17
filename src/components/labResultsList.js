import React from 'react';

export default function LabResultsList(props) {
    const list = props.list.map((l, i) => (
        <div onClick={e => props.chooseLabResult(l.id)} key={i}>
            {l.date}
        </div>
    ));
    return (
        <div>
            <h1>Lab Results by Date</h1>
            <section>
                {list}
            </section>
        </div>
    );
}