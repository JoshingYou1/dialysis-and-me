import React from 'react';
import { connect } from 'react-redux';
import Doctor from './doctor';
import { fetchProfileInfo } from '../actions';
import requiresLogin from './requires-login';
import NavigationBar from './navBar';
import Footer from './footer';

export class Doctors extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProfileInfo(this.props.user.id));
    }
    
    render() {
        if (this.props.profile.doctors) {
            const doctors = this.props.profile.doctors.map(d => {
                return (
                    <div>
                        <Doctor doctor={d} />
                    </div>
                );
            });
            return (
                <div className="container">
                    <NavigationBar />
                    <main role="main">
                        <h1 className="doctors-h1">Doctors</h1>
                        {doctors}
                    </main>
                    <Footer />
                </div>
            );
        }
        return (
            <div>
                loading...
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.currentUser,
    profile: state.app.profile
});

export default requiresLogin()(connect(mapStateToProps)(Doctors));