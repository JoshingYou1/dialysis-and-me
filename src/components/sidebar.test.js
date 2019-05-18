import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {Sidebar} from './sidebar';
import {Link} from 'react-router-dom';
import Sublinks from './sublinks';
import { toggleSidebar, toggleSublinks } from '../actions';

chai.use(spies);

describe('<Sidebar />', () => {
    it('Should render without crashing', () => {
        const props = {
            areSublinksShowing: false
        };
        shallow(<Sidebar {...props} />);
    });

    it('Should render seven Link components', () => {
        const props = {
            areSublinksShowing: false
        };
        const wrapper = shallow(<Sidebar {...props} />);
        expect(wrapper.find(Link).length).to.equal(7);
    });

    it('Should render the Sublinks component', () => {
        const props = {
            areSublinksShowing: false
        };
        const wrapper = shallow(<Sidebar {...props} />);
        expect(wrapper.find(Sublinks).length).to.equal(1);
    });

    it('Should dispatch the action toggleSidebar when the Link component is clicked', () => {
        const props = {
            areSublinksShowing: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Sidebar {...props} />);
        const instance = wrapper.instance();
        wrapper.find(Link).at(0).simulate('click');
        expect(instance.props.dispatch).to.have.been.called.with(toggleSidebar());
    });

    it('Should dispatch the action toggleSublinks when the button element named .fas.fa-caret-down.fa-2x is clicked', () => {
        const props = {
            areSublinksShowing: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Sidebar {...props} />);
        const instance = wrapper.instance();
        wrapper.find('.fas.fa-caret-down.fa-2x').simulate('click');
        expect(instance.props.dispatch).to.have.been.called.with(toggleSublinks());
    });

    it('Should dispatch the action toggleSublinks when the button element named .fas.fa-caret-up.fa-2x is clicked', () => {
        const props = {
            areSublinksShowing: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Sidebar {...props} />);
        const instance = wrapper.instance();
        wrapper.find('.fas.fa-caret-up.fa-2x').simulate('click');
        expect(instance.props.dispatch).to.have.been.called.with(toggleSublinks());
    });

    it('Should dispatch the action toggleSidebar when the button named .sidebar-button is clicked', () => {
        const props = {
            areSublinksShowing: false,
            dispatch: chai.spy()
        };
        const wrapper = shallow(<Sidebar {...props} />);
        const instance = wrapper.instance();
        wrapper.find('.sidebar-button').simulate('click');
        expect(instance.props.dispatch).to.have.been.called.with(toggleSidebar());
    });
});