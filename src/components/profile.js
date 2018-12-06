import React from 'react';
import Sidebar from './sidebar';
import NavigationBar from './navBar';
import BasicInfo from './basicInfo';
import ContactInfo from './contactInfo';
import PrimaryInsuranceInfo from './primaryInsuranceInfo';
import SecondaryInsuranceInfo from './secondaryInsuranceInfo';

export default function Profile(props) {
    return (
        <div>
            <NavigationBar />
            <Sidebar />
            <h1></h1>
            <section>
                <BasicInfo />
                <ContactInfo />
                <PrimaryInsuranceInfo />
                <SecondaryInsuranceInfo />
            </section>
        </div>
    );
}