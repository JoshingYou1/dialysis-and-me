import React from 'react';
import LabResultsList from './labResultsList';
import LabResultsShow from './labResultsShow';
import NavigationBar from './navBar';
import {connect} from 'react-redux';
import { fetchLabResults, selectLabResultsById, toggleLabResultsInfo } from '../actions';
import requiresLogin from './requires-login';
import Footer from './footer';

export class LabResults extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchLabResults(this.props.user.id));
    }

    chooseLabResults(choice) {
        const labResults = this.props.labResults.find(result => {
            return result._id === choice;
        });
        this.props.dispatch(selectLabResultsById(labResults));
        this.toggleLabResultsInfo();
    }

    toggleLabResultsInfo() {
        this.props.dispatch(toggleLabResultsInfo(true));
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div className="container">
                    <NavigationBar />
                    <main role="main">
                        <div className="loading-div">
                            <div className="sk-circle">
                                <div className="sk-circle1 sk-child"></div>
                                <div className="sk-circle2 sk-child"></div>
                                <div className="sk-circle3 sk-child"></div>
                                <div className="sk-circle4 sk-child"></div>
                                <div className="sk-circle5 sk-child"></div>
                                <div className="sk-circle6 sk-child"></div>
                                <div className="sk-circle7 sk-child"></div>
                                <div className="sk-circle8 sk-child"></div>
                                <div className="sk-circle9 sk-child"></div>
                                <div className="sk-circle10 sk-child"></div>
                                <div className="sk-circle11 sk-child"></div>
                                <div className="sk-circle12 sk-child"></div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            );
        }
        if (this.props.labResults.length > 0) {
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
                    id: l._id,
                    date: formattedResultsDate
                };
            });
            
            return (
                <div className="container">
                    <NavigationBar />
                    <main role="main" className="lab-results-main">
                        <h1 className={"lab-results-h1 " + (this.props.isLabResultsInfoShowing ? 'hidden-3' : '')}>Lab Results</h1>
                        <section className="lab-results-section">
                            <LabResultsList list={list} chooseLabResults={choice => this.chooseLabResults(choice)}/>
                            <LabResultsShow />
                        </section>
                    </main>
                    <Footer />
                </div>
            );
        }
        if (this.props.labResults.length === 0) {
            return (
                <div className="container">
                    <NavigationBar />
                    <main role="main" className="lab-results-main">
                        <div className="no-lab-results-div">
                            <h2 className={"no-lab-results-h2 " + (this.props.isLabResultsInfoShowing ? 'hidden-3' : '')}>
                                You currently have no lab results on file
                            </h2>
                        </div>
                    </main>
                    <Footer />
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        labResults: state.app.labResults,
        user: state.auth.currentUser,
        isLabResultsInfoShowing: state.app.isLabResultsInfoShowing,
        isLoading: state.app.isLoading
    };
}

export default requiresLogin()(connect(mapStateToProps)(LabResults));

