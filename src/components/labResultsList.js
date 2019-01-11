import React from 'react';

export default function LabResultsList(props) {

    const list = props.list.map((l, i) => (
        <span onClick={e => props.chooseLabResults(l.id)} key={i}>
            {l.date}
        </span>
    ));

    
    return (
        <div className="lab-results-list">
            <h2>Lab Results by Date</h2>
            <section>
                <p className="lab-results-list-item">{list}</p>
            </section>
        </div>
    );
}