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
    editSelectedDoctorById
} from '../actions';
import requiresLogin from './requires-login';
import NavigationBar from './navBar';
import Footer from './footer';
import EditDoctorForm from './editDoctorForm';

export class Doctors extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            animate: true
        }
    }

    showEditDoctorForm(d) {
        this.props.dispatch(loadDoctorFormData(d));
        this.props.dispatch(editSelectedDoctorById(d));
    }

    componentDidMount() {
        this.props.dispatch(fetchDoctors(this.props.user.id));
    }

    componentDidUpdate(prevProps){
        console.log(this.state.animate);
        if (this.props.currentDoctor !== prevProps.currentDoctor) {
            this.setState({
                animate: !this.state.animate,
            })
        }
    }
    
    render() {
        if (this.props.doctors.length > 0) {
            console.log('this.props.doctors', this.props.doctors)
            const cards = this.props.doctors.map((d, i) => {
                return {
                    previous: i === 0 ? null : i - 1,
                    next: i === this.props.doctors.length - 1 ? null : i + 1,
                    doctor: d
                };
            });
            let className = this.state.animate ? "doctor-display-section" : "doctor-display-section-2"

            const d = cards[this.props.currentDoctor].doctor;

            return (
                <div className="container">
                    <NavigationBar />
                    <main role="main">
                        <h1 className="doctors-h1">Doctors</h1>
                        <div className={className + (this.props.selectedDoctorToEdit ? ' hidden-1' : '')}>
                            {/* <span 
                                className="fas fa-ellipsis-v"
                                // onClick={() => this.props.dispatch(toggleDoctorMenu())}
                            >
                            <div className={"doctor-menu " + (this.props.isDoctorMenuShowing ? '' : 'hidden-1')}>
                                <button 
                                    className="edit-doctor-button"
                                    onClick={() => {this.showDoctorForm()}}
                                >
                                <span className="fas fa-edit">&nbsp;&nbsp;</span>
                                    Edit
                                </button>
                                <button 
                                    className="delete-doctor-button"
                                    // onClick={() => this.props.dispatch(deleteDoctor())}
                                >
                                <span className="fas fa-trash-alt">&nbsp;&nbsp;</span>
                                    Delete
                                </button>
                            </div>
                            </span> */}
                            <Doctor doctor={d} />
                        </div>
                        <div className={"doctor-button-holder " + (this.props.selectedDoctorToEdit ? 'hidden-1' : '')}>
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
                        <div
                            className={"edit-doctor-form-component-div " + (this.props.selectedDoctorToEdit ? '' : 'hidden-1')}
                            // className={"edit-doctor-form-component-div " + (d._id === this.props.loadedDoctorFormData._id ? '' : 'hidden-1')}
                        >
                            <EditDoctorForm />
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
    currentDoctor: state.app.currentDoctor,
    doctors: state.app.doctors,
    selectedDoctorToEdit: state.app.selectedDoctorToEdit
});

export default requiresLogin()(connect(mapStateToProps)(Doctors));