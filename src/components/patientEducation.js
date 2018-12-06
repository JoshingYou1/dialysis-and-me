import React from 'react';
import Sidebar from './sidebar';
import ESRDInformation from './esrdInformation';
import LivingWithESRD from './livingWithEsrd';
import NutritionalInfo from './nutritionalInfo';
import NavigationBar from './navBar';

export default function PatientEducation(props) {
    return (
        <div>
            <NavigationBar />
            <Sidebar />
            <h1></h1>
            <section>
                <ESRDInformation />
                <LivingWithESRD />
                <NutritionalInfo />
            </section>
        </div>
    );
}