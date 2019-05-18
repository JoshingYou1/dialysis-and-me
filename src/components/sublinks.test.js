import React from 'react';
import {shallow} from 'enzyme';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { expect } from 'chai';

import {Sublinks} from './sublinks';

const sidebarLinks = [
    {
        display: 'Dashboard',
        link: '/dashboard'
    },
    {
        display: 'Appointments',
        link: '/appointments'
    },
    {
        display: 'Doctors',
        link: '/doctors'
    },
    {
        display: 'Lab Results',
        link: '/lab-results'
    },
    {
        display: 'My Profile',
        link: '/profile'
    },
    {
        display: 'Patient Education',
        link: '/patient-education',
        sublinks: [
            {
                display: 'Understanding ESRD',
                link: '/patient-education/understanding-esrd'
            },
            {
                display: 'Living with ESRD',
                link:'/patient-education/living-with-esrd'
            },
            {
                display: 'Diet for Dialysis',
                link: '/patient-education/diet-for-dialysis'
            }
        ]
    },
    {
        display: 'About',
        link: '/about'
    }
];

describe('<Sublinks />', () => {
    it('Should render without crashing', () => {
        const props = {
            sidebarLinks: [
                {
                    display: 'Dashboard',
                    link: '/dashboard'
                },
                {
                    display: 'Appointments',
                    link: '/appointments'
                },
                {
                    display: 'Doctors',
                    link: '/doctors'
                },
                {
                    display: 'Lab Results',
                    link: '/lab-results'
                },
                {
                    display: 'My Profile',
                    link: '/profile'
                },
                {
                    display: 'Patient Education',
                    link: '/patient-education',
                    sublinks: [
                        {
                            display: 'Understanding ESRD',
                            link: '/patient-education/understanding-esrd'
                        },
                        {
                            display: 'Living with ESRD',
                            link:'/patient-education/living-with-esrd'
                        },
                        {
                            display: 'Diet for Dialysis',
                            link: '/patient-education/diet-for-dialysis'
                        }
                    ]
                },
                {
                    display: 'About',
                    link: '/about'
                }
            ]
        }
        shallow(<Sublinks {...props} />);
    });

    it('Should render the Link component', () => {
        shallow(
            <Router>
                <Link to=""/>
            </Router>
        );
    });
});