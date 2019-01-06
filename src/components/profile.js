import React from 'react';
import NavigationBar from './navBar';
import {connect} from 'react-redux';
import { fetchProfileInfo } from '../actions';
import requiresLogin from './requires-login';
import { Footer } from './footer';

export class Profile extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProfileInfo(this.props.user.id));
    }

  render() {
    if (this.props.profile.name && this.props.profile.address && this.props.profile.phoneNumbers) {
        console.log('profile', this.props.profile.address);
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

        
        let homePhone = this.props.profile.phoneNumbers.home ? this.props.profile.phoneNumbers.home : 'N/A';
        
        let cellPhone = this.props.profile.phoneNumbers.cell ? this.props.profile.phoneNumbers.cell : 'N/A';
        
        let workPhone = this.props.profile.phoneNumbers.work ? this.props.profile.phoneNumbers.work : 'N/A';
        
        return (
            <div className="container">
                <NavigationBar />
                <main role="main">
                    <h1 className="profile-h1">{this.props.profile.name.firstName} {this.props.profile.name.lastName}</h1>
                    <section className="profile-info">
                        
                        <span className="grid-c-span">Sex:</span>
                        <span className="grid-d-span">{this.props.profile.sex}</span>
                    
                    
                        <span className="grid-c-span">DOB:</span>
                        <span className="grid-d-span">{formattedDateOfBirth}</span>
                    
                    
                        <span className="grid-c-span">SSN:</span>
                        <span className="grid-d-span">{this.props.profile.socialSecurityNumber}</span>
                        
                        <h2 className="profile-h2">Address</h2>
                        <span className="profile-span">{this.props.profile.address.street}</span>
                        <span className="profile-span">
                            {this.props.profile.address.city},&nbsp;
                            {this.props.profile.address.state}&nbsp;
                            {this.props.profile.address.zipCode}
                        </span>
                        
                        <h2 className="profile-h2">Phone Numbers</h2>
                        <span className="grid-c-span">Home:</span>
                        <span className="grid-d-span">{homePhone}</span>
                    
                    
                        <span className="grid-c-span">Cell:</span>
                        <span className="grid-d-span">{cellPhone}</span>
                    
                
                        <span className="grid-c-span">Work:</span>
                        <span className="grid-d-span">{workPhone}</span>
                        
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
    return (
        <div>
            <NavigationBar />
            <section>Loading...</section>
        </div>
    );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser,
        profile: state.app.profile
    };
}

export default requiresLogin()(connect(mapStateToProps)(Profile));