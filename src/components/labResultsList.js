import React from 'react';

export default function LabResultsList(props) {

    const list = props.list.map((l, i) => (
        <li className="lab-results-list-item" onClick={e => props.chooseLabResults(l.id)} key={i}>
            {l.date}
        </li>
    ));

    
    return (
        <div className="lab-results-list-div">
            <h2 className="lab-results-list-h2">Lab Results by Date</h2>
            <section className="lab-results-list-section">
                <ul className="lab-results-list">{list}</ul>
            </section>
        </div>
    );
}