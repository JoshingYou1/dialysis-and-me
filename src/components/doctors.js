import React from 'react';
import NavigationBar from './navBar';
import {connect} from 'react-redux';

export class Doctors extends React.Component {

    render() {
        return (
            <div>
                <NavigationBar />
                <h1>Your doctors</h1>
                <section>
                    <p>Sally May</p>
                    <p>Nephrologist</p>
                    <p>Nephrologists of Northeast Florida</p>
                    <p>Office address:</p>
                    <p>1 Martin Luther King Dr</p>
                    <p>Jacksonville, FL 32281</p>
                    <p>Phone number: 904-321-3222</p>
                    <p>Fax number: 904-321-3411</p>
                </section>
            </div>
        );
    }
}

export default connect()(Doctors);