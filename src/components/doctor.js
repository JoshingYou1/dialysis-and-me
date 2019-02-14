import React from 'react';
import { toggleDoctorMenu, deleteDoctor, loadDoctorFormData, editSelectedDoctorById } from '../actions';
import { connect } from 'react-redux';
import EditDoctorForm from './editDoctorForm';

export class Doctor extends React.Component {
    showEditDoctorForm(d) {
        this.props.dispatch(loadDoctorFormData(d));
        this.props.dispatch(editSelectedDoctorById(d));
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
                            onClick={() => {this.showEditDoctorForm(d)}}
                        >
                        <span className="fas fa-edit">&nbsp;&nbsp;</span>
                            Edit
                        </button>
                        <button 
                            className="delete-doctor-button"
                            onClick={() => this.props.dispatch(deleteDoctor(this.props.user.id, d._id))}
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
    selectedDoctorToEdit: state.app.selectedDoctorToEdit
});

export default connect(mapStateToProps)(Doctor)