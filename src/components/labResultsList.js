import React from 'react';
import { connect } from 'react-redux';
import { triggerAnimation } from '../actions';

export class LabResultsList extends React.Component {
    animationHandler() {
        this.props.dispatch(triggerAnimation());
    }

    render() {
        const list = this.props.list.map((l, i) => (
            <li 
                className="lab-results-list-item" 
                onClick={() => {this.props.chooseLabResults(l.id); this.animationHandler()}}
                key={i}
            >
                {l.date}
            </li>
        ));


        return (
            <div className={"lab-results-list-div " + (this.props.isLabResultsInfoShowing ? 'hidden-3' : '')}>
                <h2 className="lab-results-list-h2">Lab Results by Date</h2>
                <section className="lab-results-list-section">
                    <ul className="lab-results-list">
                        {list}
                    </ul>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLabResultsInfoShowing: state.app.isLabResultsInfoShowing
})

export default connect(mapStateToProps)(LabResultsList)