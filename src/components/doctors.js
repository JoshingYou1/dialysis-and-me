import React from 'react';
import { connect } from 'react-redux';
import Doctor from './doctor';
import { fetchProfileInfo, updateCurrentDoctor } from '../actions';
import requiresLogin from './requires-login';
import NavigationBar from './navBar';
import Footer from './footer';

export class Doctors extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProfileInfo(this.props.user.id));
    }
    
    render() {
        if (this.props.profile.doctors) {
            const cards = this.props.profile.doctors.map((d, i) => {
                return {
                    previous: i === 0 ? null : i - 1,
                    next: i === this.props.profile.doctors.length - 1 ? null : i + 1,
                    doctor: d
                };
            });
        const d = cards[this.props.currentDoctor].doctor;
        console.log('this.props.profile.doctors', this.props.profile.doctors);
            return (
                <div className="container">
                    <NavigationBar />
                    <main role="main">
                        <h1 className="doctors-h1">Doctors</h1>
                        <div className="doctor-display-section">
                            <Doctor doctor={d} />
                        </div>
                        <div className="doctor-button-holder">
                            <button
                                className={this.props.currentDoctor !== 0 ? 'display-doctor-button-1' : 'hidden-1'}
                                onClick={() => this.props.dispatch(updateCurrentDoctor(cards[this.props.currentDoctor].previous))}
                            >
                                <p className="fas fa-long-arrow-alt-left"></p>
                                <p className="display-profile-section-button-p">
                                    {cards[this.props.currentDoctor].previous === null ? '' : cards[this.props.currentDoctor - 1].doctor.name.firstName + ' ' + cards[this.props.currentDoctor - 1].doctor.name.lastName}
                                </p>
                            </button>
                            <button
                                className={this.props.currentDoctor !== cards.length - 1 ? 'display-doctor-button-2' : 'hidden-1'}
                                onClick={() => this.props.dispatch(updateCurrentDoctor(cards[this.props.currentDoctor].next))}
                            >
                                <p className="fas fa-long-arrow-alt-right"></p>
                                <p className="display-profile-section-button-p">
                                    {cards[this.props.currentDoctor].next === null ? '' : cards[this.props.currentDoctor + 1].doctor.name.firstName + ' ' + cards[this.props.currentDoctor + 1].doctor.name.lastName}
                                </p>
                            </button>
                        </div>
                    </main>
                    <Footer />
                </div>
            );
        }
        return (
            <div>
                loading...
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.currentUser,
    profile: state.app.profile,
    currentDoctor: state.app.currentDoctor
});

export default requiresLogin()(connect(mapStateToProps)(Doctors));