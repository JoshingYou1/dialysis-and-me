import React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'react-router-dom';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {Sublinks} from './sublinks';

chai.use(spies);

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
                    link: '/patient-education'
                },
                {
                    display: 'About',
                    link: '/about'
                }
            ],
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
        };
        shallow(<Sublinks {...props} />);
    });

    it('Should render the Link component', () => {
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
                    link: '/patient-education'
                },
                {
                    display: 'About',
                    link: '/about'
                }
            ],
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
        };
        const wrapper = shallow(<Sublinks {...props} />);
        expect(wrapper.find(Link).length).to.equal(3);
    });

    it('Should render the ul element named .sidebar-sublinks-list', () => {
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
                    link: '/patient-education'
                },
                {
                    display: 'About',
                    link: '/about'
                }
            ],
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
        };
        const wrapper = shallow(<Sublinks {...props} />);
        expect(wrapper.find('.sidebar-sublinks-list').length).to.equal(1);
    });
});