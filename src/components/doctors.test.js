import React from 'react';
import {shallow} from 'enzyme';

import {Doctors} from './doctors';
import NavigationBar from './navBar';
import Footer from './footer';
import Doctor from './doctor';
import CreateDoctorForm from './createDoctorForm';
import EditDoctorForm from './editDoctorForm';

describe('<Doctors />', () => {
    it('Should render without crashing', () => {
        shallow(<Doctors />);
    });

    it('Should render the NavigationBar component', () => {
        shallow(<NavigationBar />);
    });

    it('Should render the Footer component', () => {
        shallow(<Footer />);
    });
})