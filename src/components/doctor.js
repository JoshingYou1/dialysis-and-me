import React from 'react';
import { toggleDoctorMenu, deleteDoctor, loadDoctorFormData, editSelectedDoctorById, fetchDoctors } from '../actions';
import { connect } from 'react-redux';

export class Doctor extends React.Component {
    showEditDoctorForm(d) {
        this.props.dispatch(loadDoctorFormData(d));
        this.props.dispatch(editSelectedDoctorById(d));
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.currentDoctor !== prevProps.currentDoctor) {
    //         this.props.dispatch(fetchDoctors(this.props.user.id))
    //     }
    // }

    deleteDoctorHandler() {
        if (window.confirm(`Are you sure you want to remove ${this.props.doctor.name.firstName} ${this.props.doctor.name.lastName} from your doctors?`)) {
            this.props.dispatch(deleteDoctor(this.props.user.id, this.props.doctor._id))
        }
    }

    render() {
        let d = this.props.doctor;
        return (
            <div>
                <section className="doctor-section">
                    <span 
                        className="fas fa-ellipsis-v"
                        onClick={() => this.props.dispatch(toggleDoctorMenu())}
                    >
                    <div className={"doctor-menu " + (this.props.isDoctorMenuShowing ? '' : 'hidden-1')}>
                        <button 
                            className="edit-doctor-button"
                            onClick={() => this.showEditDoctorForm(d)}
                        >
                        <span className="fas fa-edit">&nbsp;&nbsp;</span>
                            Edit
                        </button>
                        <button 
                            className="delete-doctor-button"
                            onClick={() => this.deleteDoctorHandler()}
                        >
                        <span className="fas fa-trash-alt">&nbsp;&nbsp;</span>
                            Delete
                        </button>
                    </div>
                    </span>
                    <h3 className="doctor-h3">{d.name.firstName} {d.name.lastName}</h3>

                    <span className="grid-c-span">Practice:</span>
                    <span className="grid-d-span">{d.practice}</span>

                    <span className="grid-c-span">Company:</span>
                    <span className="grid-d-span">{d.company}</span>

                    <span className="grid-c-span">Address:</span>
                    <span className="grid-d-span">{d.address.street}</span>

                    <span className="grid-c-span">City/State/Zip:</span>
                    <span className="grid-d-span">
                        {d.address.city},&nbsp;
                        {d.address.state}&nbsp;
                        {d.address.zipCode}
                    </span>

                    <span className="grid-c-span">Phone number:</span>
                    <span className="grid-d-span">{d.phoneNumber}</span>

                    <span className="grid-c-span">Fax number:</span>
                    <span className="grid-d-span">{d.faxNumber}</span>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.currentUser,
    isDoctorMenuShowing: state.app.isDoctorMenuShowing,
    loadedDoctorFormData: state.app.loadedDoctorFormData,
    selectedDoctorToEdit: state.app.selectedDoctorToEdit,
    currentDoctor: state.app.currentDoctor
});

export default connect(mapStateToProps)(Doctor)