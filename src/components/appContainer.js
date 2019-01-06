import React from 'react';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import LandingPage from './landingPage';
import Login from './login';
import Dashboard from './dashboard';
import PatientEducation from './patientEducation';
import Doctors from './doctors';
import LabResults from './labResults';
import Appointments from './appointments';
import Profile from './profile';
import PrimaryInsuranceInfo from './primaryInsuranceInfo';
import SecondaryInsuranceInfo from './secondaryInsuranceInfo';
import ESRDInfo from './esrdInfo';
import LivingWithESRD from './livingWithEsrd';
import NutritionalInfo from './nutritionalInfo';
import {connect} from 'react-redux';
import {refreshAuthToken} from '../actions/auth';


export class AppContainer extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div> 
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/patient-education" component={PatientEducation} />
                <Route exact path="/patient-education/esrd-info" component={ESRDInfo} />
                <Route exact path="/patient-education/living-with-esrd" component={LivingWithESRD} />
                <Route exact path="/patient-education/eating-well-on-dialysis" component={NutritionalInfo} />
                <Route exact path="/doctors" component={Doctors} />
                <Route exact path="/lab-results" component={LabResults} />
                <Route exact path="/appointments" component={Appointments} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile/primary-insurance-info" component={PrimaryInsuranceInfo} />
                <Route exact path="/profile/secondary-insurance-info" component={SecondaryInsuranceInfo} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(AppContainer));
