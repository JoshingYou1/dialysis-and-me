import React from 'react';
import {shallow} from 'enzyme';

import {LabResults} from './labResults';
import NavigationBar from './navBar';
import LabResultsList from './labResultsList';
import LabResultsShow from './labResultsShow';
import Footer from './footer';

describe('<LabResults />', () => {
    it('Should render without crashing', () => {
        shallow(<LabResults />);
    });

    it('Should render the NavigationBar component', () => {
        shallow(<NavigationBar />);
    });

    it('Should render the LabResultsList component', () => {
        shallow(<LabResultsList />);
    });

    it('Should render the LabResultsShow component', () => {
        shallow(<LabResultsShow />);
    });
    
    it('Should render the Footer component', () => {
        shallow(<Footer />);
    });
});