import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {NavigationBar} from './navBar';
import Link from './navBar';
import User from './user';
import Sidebar from './sidebar';
import { toggleUserInfo, toggleSidebar } from '../actions';

chai.use(spies);

describe('<NavigationBar />', () => {
    it('Should render without crashing', () => {
        const props = {
            currentUser: {
                username: null
            },
            isUserInfoShowing: false,
            isSidebarShowing: false
        }
        shallow(<NavigationBar {...props} />);
    });

    it('Should render the Link component', () => {
        const props = {
            currentUser: {
                username: null
            },
            isUserInfoShowing: false,
            isSidebarShowing: false
        }
        const wrapper = shallow(<NavigationBar {...props} />);
        expect(wrapper.find(Link)).to.exist;
    });

    it('Should render the User component', () => {
        const props = {
            currentUser: {
                username: null
            },
            isUserInfoShowing: false,
            isSidebarShowing: false
        }
        const wrapper = shallow(<NavigationBar {...props} />);
        expect(wrapper.find(User).length).to.equal(1);
    });

    it('Should render the Sidebar component', () => {
        const props = {
            currentUser: {
                username: null
            },
            isUserInfoShowing: false,
            isSidebarShowing: false
        }
        const wrapper = shallow(<NavigationBar {...props} />);
        expect(wrapper.find(Sidebar).length).to.equal(1);
    });

    it('Should dispatch the action toggleUserInfo when the div element named .user-dropdown-div is clicked', () => {
        const props = {
            currentUser: {
                username: null
            },
            isUserInfoShowing: false,
            isSidebarShowing: false,
            dispatch: chai.spy()
        }
        const wrapper = shallow(<NavigationBar {...props} />);
        const instance = wrapper.instance();
        wrapper.find('.user-dropdown-div').simulate('click');
        expect(instance.props.dispatch).to.have.been.called.with(toggleUserInfo());
    });

    it('Should dispatch the actions toggleUserInfo and clearAuth when the button element named .logout-button is clicked', () => {
        const props = {
            currentUser: {
                username: null
            },
            isUserInfoShowing: false,
            isSidebarShowing: false,
            dispatch: chai.spy()
        }
        const wrapper = shallow(<NavigationBar {...props} />);
        const instance = wrapper.instance();
        wrapper.find('.logout-button').simulate('click');
        expect(instance.props.dispatch).to.have.been.called.twice;
    });

    it('Should dispatch the action toggleSidebar when the span element named .fas fa-bars is clicked', () => {
        const props = {
            currentUser: {
                username: null
            },
            isUserInfoShowing: false,
            isSidebarShowing: false,
            dispatch: chai.spy()
        }
        const wrapper = shallow(<NavigationBar {...props} />);
        const instance = wrapper.instance();
        wrapper.find('.fas.fa-bars').simulate('click');
        expect(instance.props.dispatch).to.have.been.called.with(toggleSidebar());
    });
});

