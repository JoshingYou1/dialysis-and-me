import React from 'react';

export default function LabResultsList(props) {

    const list = props.list.map((l, i) => (
        <div onClick={e => props.chooseLabResults(l.id)} key={i}>
            {l.date}
        </div>
    ));

    
    return (
        <div className="list">
            <h2>Lab Results by Date</h2>
            <section>
                {list}
            </section>
        </div>
    );
}