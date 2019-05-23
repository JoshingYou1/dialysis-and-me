import React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'react-router-dom';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {Sublinks} from './sublinks';
import { toggleSidebar, toggleSublinks } from '../actions';

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

    it('Should dispatch the actions toggleSidebar and toggleSublinks when the Link component is clicked on', () => {
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
            ],
            dispatch: chai.spy()
        };
        Object.defineProperty(window.location, 'reload', {
            configurable: true,
          });
        delete window.location;
        window.location = { reload: chai.spy() };
        const wrapper = shallow(<Sublinks {...props} />);
        const instance = wrapper.instance();
        wrapper.find(Link).at(0).simulate('click');
        window.location.reload();
        expect(window.location.reload).to.have.been.called();
        expect(instance.props.dispatch).to.have.been.called.with(toggleSidebar());
        expect(instance.props.dispatch).to.have.been.called.with(toggleSublinks());
    });
});