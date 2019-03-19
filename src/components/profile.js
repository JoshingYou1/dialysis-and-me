import React from 'react';
import NavigationBar from './navBar';
import {connect} from 'react-redux';
import { fetchProfileInfo, selectProfileInfoSection, chooseEditBasicProfileInfo, loadBasicProfileInfoFormData } from '../actions';
import requiresLogin from './requires-login';
import Footer from './footer';
import PrimaryInsuranceInfo from './primaryInsuranceInfo';
import SecondaryInsuranceInfo from './secondaryInsuranceInfo';
import TreatmentInfo from './treatmentInfo';
import { EditBasicProfileInfoForm } from './editBasicProfileInfoForm';

export class Profile extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProfileInfo(this.props.user.id));
    }

    showEditProfileForm() {
        this.props.dispatch(chooseEditBasicProfileInfo());
        this.props.dispatch(loadBasicProfileInfoFormData(this.props.profile));
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
        if (this.props.profile.name && this.props.profile.address && this.props.profile.phoneNumbers && this.props.profile.socialSecurityNumber) {
            let date = new Date(this.props.profile.dateOfBirth);

            let day = date.getDate();
            if (day < 10) {
                day = `0${day}`
            }
            let month = date.getMonth() + 1;
            if (month < 10) {
                month = `0${month}`;
            }
            const year = date.getFullYear();

            let formattedDateOfBirth = `${month}/${day}/${year}`;

            let formattedSsn = this.props.profile.socialSecurityNumber.replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3');

            
            let homePhone = this.props.profile.phoneNumbers.home ? this.props.profile.phoneNumbers.home : 'N/A';
            
            let cellPhone = this.props.profile.phoneNumbers.cell ? this.props.profile.phoneNumbers.cell : 'N/A';
            
            let workPhone = this.props.profile.phoneNumbers.work ? this.props.profile.phoneNumbers.work : 'N/A';

            const cards = [
                {
                    previous: null,
                    next: 1,
                    name: 'Basic Info'
                },
                {
                    previous: 0,
                    next: 2,
                    name: 'Primary Insurance Info'
                },
                {
                    previous: 1,
                    next: 3,
                    name: 'Secondary Insurance Info'
                },
                {
                    previous: 2,
                    next: null,
                    name: 'Treatment Info'
                }
            ];

            return (
                <div className="container">
                    <NavigationBar />
                    <main role="main">
                        <div className={"display-section " + (this.props.section === 0 ? '' : 'hidden-1') + 
                            (this.props.isEditBasicProfileInfoFormShowing ? ' hidden-1' : '')}>
                            <h1 className="basic-info-h1">
                                {this.props.profile.name.firstName} {this.props.profile.name.lastName}
                            </h1>
                            <section className={"basic-info-section " + (this.props.isEditBasicProfileInfoFormShowing ? 'hidden-1' : '')}>
                                <button 
                                    className="edit-profile-button"
                                    onClick={() => this.showEditProfileForm()}
                                >
                                    <span className="fas fa-edit"></span>
                                </button>
                                <span className="grid-c-span">Sex:</span>
                                <span className="grid-d-span">{this.props.profile.sex}</span>
                            
                            
                                <span className="grid-c-span">DOB:</span>
                                <span className="grid-d-span">{formattedDateOfBirth}</span>
                            
                            
                                <span className="grid-c-span">SSN:</span>
                                <span className="grid-d-span">{formattedSsn}</span>
                                
                                <span className="grid-c-span">Address:</span>
                                <span className="grid-d-span">{this.props.profile.address.street}</span>
                                <span className="grid-c-span">City/State/Zip:</span>
                                <span className="grid-d-span">
                                    {this.props.profile.address.city},&nbsp;
                                    {this.props.profile.address.state}&nbsp;
                                    {this.props.profile.address.zipCode}
                                </span>
                                
                                <span className="grid-c-span">Home phone:</span>
                                <span className="grid-d-span">{homePhone}</span>
                            
                            
                                <span className="grid-c-span">Cell phone:</span>
                                <span className="grid-d-span">{cellPhone}</span>
                            
                        
                                <span className="grid-c-span">Work phone:</span>
                                <span className="grid-d-span">{workPhone}</span>
                                
                            </section>
                        </div>
                        <div className={this.props.section === 1 ? 'display-section' : 'hidden-1'}>
                            <PrimaryInsuranceInfo />
                        </div>
                        <div className={this.props.section === 2 ? 'display-section' : 'hidden-1'}>
                            <SecondaryInsuranceInfo />
                        </div>
                        <div className={this.props.section === 3 ? 'display-section' : 'hidden-1'}>
                            <TreatmentInfo />
                        </div>
                        <div className={"profile-section-button-holder " + (this.props.isEditBasicProfileInfoFormShowing ? 'hidden-1' : '')}>
                            <button
                                className={this.props.section !== 0 ? 'display-profile-section-button-1' : 'hidden-1'}
                                onClick={() => this.props.dispatch(selectProfileInfoSection(cards[this.props.section].previous))}
                            >
                                <p className="fas fa-long-arrow-alt-left mobile-hide"></p>
                                <p class="fas fa-arrow-alt-circle-left desktop-hide-2"></p>
                                <p className="display-profile-section-button-p mobile-hide">
                                    {cards[this.props.section].previous === null ? '' : cards[this.props.section - 1].name}
                                </p>
                            </button>
                            <button
                                className={this.props.section !== 3 ? 'display-profile-section-button-2' : 'hidden-1'}
                                onClick={() => this.props.dispatch(selectProfileInfoSection(cards[this.props.section].next))}
                            >
                                <p className="fas fa-long-arrow-alt-right mobile-hide"></p>
                                <p class="fas fa-arrow-alt-circle-right desktop-hide-2"></p>
                                <p className="display-profile-section-button-p mobile-hide">
                                    {cards[this.props.section].next === null ? '' : cards[this.props.section + 1].name}
                                </p>
                            </button>
                        </div>
                        <div 
                            className={"edit-basic-profile-info-form-component-div " + (this.props.isEditBasicProfileInfoFormShowing ? '' : 'hidden-1')}
                        >
                            <h1 className={"basic-info-h1 " + (this.props.isMessageShowing ? 'hidden-1' : '')}>
                                Edit Your Profile
                            </h1>
                            <EditBasicProfileInfoForm />
                        </div>
                    </main>
                    <Footer />
                </div>
            );
        }
        return (
            <div></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
        profile: state.app.profile,
        section: state.app.section,
        isEditBasicProfileInfoFormShowing: state.app.isEditBasicProfileInfoFormShowing,
        loadedBasicProfileInfoFormData: state.app.loadedBasicProfileInfoFormData,
        isMessageShowing: state.app.isMessageShowing,
        isLoading: state.app.isLoading
    };
}

export default requiresLogin()(connect(mapStateToProps)(Profile));