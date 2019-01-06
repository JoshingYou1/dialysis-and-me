import React from 'react';
import LabResultsList from './labResultsList';
import LabResultsShow from './labResultsShow';
import NavigationBar from './navBar';
import {connect} from 'react-redux';
import { fetchLabResults, selectLabResultsById, toggleLabResultsInfo } from '../actions';
import requiresLogin from './requires-login';
import { Footer } from './footer';

export class LabResults extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchLabResults(this.props.user.id));
    }

    chooseLabResults(choice) {
        const labResults = this.props.labResults.find(result => {
            return result.id === choice;
        });
        this.props.dispatch(selectLabResultsById(labResults));
        this.toggleLabResultsInfo();
    }

    toggleLabResultsInfo() {
        this.props.dispatch(toggleLabResultsInfo(true));
    }

    render() {
        const list = this.props.labResults.map(l => {
                let resultsDate = new Date(l.date);
                
                let day = resultsDate.getDate();
                if (day < 10) {
                    day = `0${day}`
                }
                let month = resultsDate.getMonth() + 1;
                if (month < 10) {
                    month = `0${month}`;
                }
                const year = resultsDate.getFullYear();
        
                let formattedResultsDate = `${month}/${day}/${year}`;
            return {
                id: l.id,
                date: formattedResultsDate
            };
        });
        
        return (
            <div className="container">
                <NavigationBar />
                <main role="main" class="lab-results-main">
                    <h1>Lab Results</h1>
                    <section className="grid">
                        <LabResultsList list={list} chooseLabResults={choice => this.chooseLabResults(choice)}/>
                        <LabResultsShow />
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

LabResults.defaultProps = {
    labResults: []
};

const mapStateToProps = state => {
    return {
        labResults: state.app.labResults,
        user: state.auth.currentUser,
        isLabResultsInfoShowing: state.isLabResultsInfoShowing
    };
}

export default requiresLogin()(connect(mapStateToProps)(LabResults));

