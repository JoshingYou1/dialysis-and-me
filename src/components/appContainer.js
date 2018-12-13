import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './landingPage';
import Login from './login';
import Home from './home';
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


export default function AppContainer(props) {
    return (
        <Router>
            <div className="container">
                <main role="main">
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/patient-education" component={PatientEducation} />
                    <Route exact path="/patient-education/esrd-info" component={ESRDInfo} />
                    <Route exact path="/patient-education/living-with-esrd" component={LivingWithESRD} />
                    <Route exact path="/patient-education/nutritional-info" component={NutritionalInfo} />
                    <Route exact path="/doctors" component={Doctors} />
                    <Route exact path="/lab-results" component={LabResults} />
                    <Route exact path="/appointments" component={Appointments} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/profile/primary-insurance-info" component={PrimaryInsuranceInfo} />
                    <Route exact path="/profile/secondary-insurance-info" component={SecondaryInsuranceInfo} />
                </main>
            </div>
        </Router>
    );
}
