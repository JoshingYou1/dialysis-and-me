import React from 'react';
import Sidebar from './sidebar';
import LabResultsList from './labResultsList';
import LabResultsShow from './labResultsShow';
import NavigationBar from './navBar';
import {connect} from 'react-redux';
import { fetchLabResults, selectLabResultsById } from '../actions';
import requiresLogin from './requires-login';

export class LabResults extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchLabResults(this.props.user.id));
    }

    chooseLabResult(choice) {
        const labResult = this.props.labResults.find(result => {
            return result.id === choice;
        });
        this.props.dispatch(selectLabResultsById(labResult)); 
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
        subLinks : [
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
        subLinks: [
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
        console.log('this.props.labResults', this.props.labResults);
        const list = this.props.labResults.map(l => {
            return {
                id: l.id,
                date: l.date
            };
        });
        return (
            <div>
                <NavigationBar />
                <Sidebar links={this.sidebarLinks}/>
                <h1>Lab Results</h1>
                <section>
                    <LabResultsList list={list} chooseLabResult={choice => this.chooseLabResult(choice)}/>
                    <LabResultsShow />
                </section>
            </div>
        );
    }
}

LabResults.defaultProps = {
    labResults: []
};

const mapStateToProps = state => ({
    labResults: state.labResults,
    user: state.auth.currentUser
});

export default requiresLogin()(connect(mapStateToProps)(LabResults));

