import React from 'react';
import Sidebar from './sidebar';
import LabResultsList from './labResultsList';
import NavigationBar from './navBar';

export default function LabResults(props) {
    return (
        <div>
            <NavigationBar />
            <Sidebar />
            <LabResultsList />
            <LabResultsShow />
        </div>
    );
}