import React from 'react';
import Sidebar from './sidebar';
import LabResultsList from './labResultsList';
import LabResultsShow from './labResultsShow';
import NavigationBar from './navBar';
import {connect} from 'react-redux';
import { fetchLabResults, selectLabResultsById, toggleLabResultsInfo } from '../actions';
import requiresLogin from './requires-login';

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

    sidebarLinks = [
    {
        display: 'Dashboard',
        link: '/dashboard'
    },
    {
        display: 'Appointments',
        link: '/appointments'
    },
    {
        display: 'Doctors',
        link: '/doctors'
    },
    {
        display: 'Lab Results',
        link: '/lab-results'
    },
    {
        display: 'My Profile',
        link: '/profile',
        sublinks : [
            {
                display: 'Contact Information',
                link: '/profile/contact-info'
            },
            {
                display: 'Primary Insurance Information',
                link: '/profile/primary-insurance-info'
            },
            {
                display: 'Secondary Insurance Information',
                link: '/profile/secondary-insurance-info'
            }   
        ]
    },
    {
        display: 'Patient Education',
        link: '/patient-education',
        sublinks: [
            {
                display: 'ESRD Information',
                link: '/patient-education/esrd-info'
            },
            {
                display: 'Living with ESRD',
                link:'/patient-education/living-with-esrd'
            },
            {
                display: 'Nutritional Information',
                link: '/patient-education/nutritional-info'
            }
        ]
    }
  ];

    render() {
        const list = this.props.labResults.map(l => {
            return {
                id: l.id,
                date: l.date
            };
        });
        return (
            <div className="container">
                <NavigationBar />
                <Sidebar links={this.sidebarLinks}/>
                <main role="main">
                    <h1>Lab Results</h1>
                    <section className="grid">
                        <LabResultsList list={list} chooseLabResults={choice => this.chooseLabResults(choice)}/>
                        <LabResultsShow />
                    </section>
                </main>
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

