import React from 'react';
import { connect } from 'react-redux';
import Doctor from './doctor';
import { 
    fetchProfileInfo,
    updateCurrentDoctor, 
    fetchDoctors, 
    toggleDoctorMenu, 
    deleteDoctor, 
    loadDoctorFormData, 
    editSelectedDoctorById,
    chooseCreateDoctor,
    successErrorMessage,
    toggleDoctorList
} from '../actions';
import requiresLogin from './requires-login';
import NavigationBar from './navBar';
import Footer from './footer';
import EditDoctorForm from './editDoctorForm';
import CreateDoctorForm from './createDoctorForm';
import PropTypes from 'prop-types';

export class Doctors extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            animate: true
        }
    }

    static propTypes = {
        name: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired
        ])
    };

    showEditDoctorForm(d) {
        this.props.dispatch(loadDoctorFormData(d));
        this.props.dispatch(editSelectedDoctorById(d));
    }

    componentDidMount() {
        this.props.dispatch(fetchDoctors(this.props.user.id));
    }

    componentDidUpdate(prevProps){
        if (this.props.currentDoctor !== prevProps.currentDoctor) {
            this.setState({
                animate: !this.state.animate,
            })
            this.props.dispatch(fetchDoctors(this.props.user.id))
        }
    }
    
    render() {
        if (this.props.deletedDoctor) {
            return (
                <div className="container">
                    <NavigationBar />
                    <main role="main">
                        <div className="delete-doctor-success-message">
                            <p className="delete-doctor-success-message-p">
                                Doctor successfully removed!
                                <button 
                                    className="message-button"
                                    onClick={() => this.props.dispatch(toggleDoctorList())}
                                >
                                    <span className="fas fa-share-square">&nbsp;</span>
                                    <span>Go back</span>
                                </button>
                            </p>
                        </div>
                    </main>
                    <Footer />
                </div>
            );
        }
        if (this.props.doctors.length > 0) {
            const cards = this.props.doctors.map((d, i) => {
                return {
                    previous: i === 0 ? null : i - 1,
                    next: i === this.props.doctors.length - 1 ? null : i + 1,
                    doctor: d
                };
            });
            let className = this.state.animate ? "doctor-display-section " : "doctor-display-section-2 "

            const d = cards[this.props.currentDoctor].doctor;

            return (
                <div className="container">
                    <NavigationBar />
                    <main role="main" className="doctors-main">
                        <h1 
                            className={"doctors-h1 " + (this.props.isCreateDoctorFormShowing || this.props.selectedDoctorToEdit ? 'hidden-1 ' : '')}
                        >
                            Doctors
                        </h1>
                        <h1 
                            className={"create-doctor-h1 " + (this.props.isCreateDoctorFormShowing ? '' : 'hidden-1 ') + 
                            (this.props.isMessageShowing ? 'hidden-1' : '')}
                        >
                            Add a Doctor
                        </h1>
                        <h1 
                            className={"edit-doctor-h1 " + (this.props.selectedDoctorToEdit ? '' : 'hidden-1 ') + 
                            (this.props.isMessageShowing ? 'hidden-1' : '')}
                        >
                            Edit {d.name.firstName} {d.name.lastName}
                        </h1>
                        <div className={className + (this.props.selectedDoctorToEdit || this.props.isCreateDoctorFormShowing || this.props.isMessageShowing ? ' hidden-1' : '')}>
                            <Doctor doctor={d} />
                        </div>
                        <div className={"doctor-button-holder " + (this.props.selectedDoctorToEdit || this.props.isCreateDoctorFormShowing ? 'hidden-1' : '')}>
                            <button
                                className={this.props.currentDoctor !== 0 ? 'display-doctor-button-1' : 'hidden-1'}
                                onClick={() => this.props.dispatch(updateCurrentDoctor(cards[this.props.currentDoctor].previous))}
                            >
                                <p className="fas fa-long-arrow-alt-left"></p>
                                <p className="display-profile-section-button-p">
                                    {cards[this.props.currentDoctor].previous === null ? '' : cards[this.props.currentDoctor - 1].doctor.name.firstName +
                                    ' ' + cards[this.props.currentDoctor - 1].doctor.name.lastName}
                                </p>
                            </button>
                            <button
                                className={this.props.currentDoctor !== cards.length - 1 ? 'display-doctor-button-2' : 'hidden-1'}
                                onClick={() => this.props.dispatch(updateCurrentDoctor(cards[this.props.currentDoctor].next))}
                            >
                                <p className="fas fa-long-arrow-alt-right"></p>
                                <p className="display-profile-section-button-p">
                                    {cards[this.props.currentDoctor].next === null ? '' : cards[this.props.currentDoctor + 1].doctor.name.firstName +
                                    ' ' + cards[this.props.currentDoctor + 1].doctor.name.lastName}
                                </p>
                            </button>
                        </div>
                        <div className={"create-doctor-div " + (this.props.selectedDoctorToEdit || this.props.isMessageShowing ? 'hidden-1' : '')}>
                            <span className={"create-doctor-span " + (this.props.isCreateDoctorFormShowing ? 'hidden-1' : '')}>
                                Need to add a doctor?
                            </span>
                            <button
                                className={"create-doctor-button "  + (this.props.isCreateDoctorFormShowing ? 'hidden-1' : '')}
                                onClick={() => this.props.dispatch(chooseCreateDoctor())}
                            >
                                Click here
                            </button>
                        </div>
                        <div className={"create-doctor-form-component-div " + (this.props.isCreateDoctorFormShowing ? '' : 'hidden-1')}>
                            <CreateDoctorForm />
                        </div>
                        <div
                            className={"edit-doctor-form-component-div " + (this.props.selectedDoctorToEdit ? '' : 'hidden-1')}
                        >
                            <EditDoctorForm />
                        </div>
                    </main>
                    <Footer />
                </div>
            );
        }
        if (this.props.doctors.length === 0) {
            return (
                <div className="container">
                    <NavigationBar />
                    <main role="main" className="doctors-main">
                        <h1 className={"create-doctor-h1 " + (this.props.isCreateDoctorFormShowing ? '' : 'hidden-1 ') + 
                            (this.props.isMessageShowing ? 'hidden-1' : '')}
                        >
                            Add a Doctor
                        </h1>
                        <div className="no-doctor-div">
                            <h2 className={"no-doctor-h2 " + (this.props.isCreateDoctorFormShowing ? 'hidden-1' : '')}>
                                You currently have no doctors on file
                            </h2>
                            <div className={"create-doctor-div " + (this.props.selectedDoctorToEdit ? 'hidden-1' : '')}>
                                <span className={"create-doctor-span " + (this.props.isCreateDoctorFormShowing ? 'hidden-1' : '')}>
                                    Need to add a doctor?
                                </span>
                                <button
                                    className={"create-doctor-button "  + (this.props.isCreateDoctorFormShowing ? 'hidden-1' : '')}
                                    onClick={() => this.props.dispatch(chooseCreateDoctor())}
                                >
                                    Click here
                                </button>
                            </div>
                        </div>
                        <div className={"create-doctor-form-component-div " + (this.props.isCreateDoctorFormShowing ? '' : 'hidden-1')}>
                            <CreateDoctorForm />
                        </div>
                    </main>
                    <Footer />
                </div>
            );
        }
        return (
            <div>
                Loading...
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.currentUser,
    currentDoctor: state.app.currentDoctor,
    doctors: state.app.doctors,
    selectedDoctorToEdit: state.app.selectedDoctorToEdit,
    isCreateDoctorFormShowing: state.app.isCreateDoctorFormShowing,
    isMessageShowing: state.app.isMessageShowing,
    deletedDoctor: state.app.deletedDoctor
});

export default requiresLogin()(connect(mapStateToProps)(Doctors));