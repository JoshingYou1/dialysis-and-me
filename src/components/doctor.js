import React from 'react';
import { connect } from 'react-redux';

export default class Doctor extends React.Component {
    render() {
        let d = this.props.doctor;
        return (
            <div>
                <section>
                    <h2>{d.name.firstName} {d.name.lastName}</h2>

                    <span>Practice:</span>
                    <span>{d.practice}</span>

                    <span>Company:</span>
                    <span>{d.company}</span>

                    <span>Address:</span>
                    <span>{d.street}</span>

                    <span>City/State/Zip:</span>
                    <span>
                        {d.address.city},&nbsp;
                        {d.address.state}&nbsp;
                        {d.address.zipCode}
                    </span>

                    <span>Phone number:</span>
                    <span>{d.phoneNumber}</span>

                    <span>Fax number:</span>
                    <span>{d.faxNumber}</span>
                </section>
            </div>
        );
    }
}