import React from 'react';

export default class Doctor extends React.Component {
    render() {
        let d = this.props.doctor;
        return (
            <section className="doctor-section">
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
        );
    }
}