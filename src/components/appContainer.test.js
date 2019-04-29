import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import {AppContainer} from './appContainer';
import {Route} from 'react-router-dom';

describe('<AppContainer />', () => {
    it('Should render without crashing', () => {
        shallow(<AppContainer />);
    });

    it('Should render a container div', () => {
        const wrapper = shallow(<AppContainer />);
        expect(wrapper.find('div').length).to.equal(1);
    })

    it('Should render 12 <Route /> components', () => {
        const wrapper = shallow(<AppContainer />);
        expect(wrapper.find(Route).length).to.equal(12);
    });
});